import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, GitCommit, Flame, Code } from "lucide-react";

// Custom count up animation helper
function CountUp({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const startVal = 0;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Cubic out ease
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(startVal + easeOut * (value - startVal));

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value, duration]);

  return <span ref={ref} className="tabular-nums">{count}</span>;
}

export default function GithubDashboard() {
  const [stats, setStats] = useState({
    repos: 11,
    commits: 238,
    streak: 9,
    longestStreak: 21,
  });
  const [languages, setLanguages] = useState([
    { name: "JavaScript", pct: 78 },
    { name: "Jupyter Notebook", pct: 11 },
    { name: "Java", pct: 11 },
  ]);
  const [contributions, setContributions] = useState(null);
  const [, setLoading] = useState(true);

  // Fetch live GitHub data on mount
  useEffect(() => {
    let isMounted = true;

    const fetchGithubData = async () => {
      let reposCount = 11;
      let totalCommits = 238;
      let currentStreak = 9;
      let longestStreak = 21;
      let fetchedLangs = {};

      // 1. Fetch user public profile
      try {
        const userRes = await fetch("https://api.github.com/users/NITHEESHRAMASAMY");
        if (userRes.ok) {
          const userData = await userRes.json();
          if (userData.public_repos !== undefined) {
            reposCount = userData.public_repos;
          }
        }
      } catch (err) {
        console.warn("Error fetching GitHub user profile:", err);
      }

      // 2. Fetch total commits from search API
      try {
        const searchRes = await fetch("https://api.github.com/search/commits?q=author:NITHEESHRAMASAMY");
        if (searchRes.ok) {
          const searchData = await searchRes.json();
          if (searchData && searchData.total_count) {
            totalCommits = searchData.total_count;
          }
        }
      } catch (err) {
        console.warn("Error searching commits:", err);
      }

      // 3. Fetch repositories languages breakdown
      try {
        const reposRes = await fetch("https://api.github.com/users/NITHEESHRAMASAMY/repos?per_page=100&sort=updated");
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData)) {
            reposData.forEach((repo) => {
              if (repo.language) {
                fetchedLangs[repo.language] = (fetchedLangs[repo.language] || 0) + 1;
              }
            });
          }
        }
      } catch (err) {
        console.warn("Error fetching repo languages:", err);
      }

      // 4. Fetch contribution calendar and calculate streaks
      try {
        // Try Primary Calendar API
        let calendarData = null;
        const calRes = await fetch("https://gh-calendar.rschristian.dev/user/NITHEESHRAMASAMY");
        if (calRes.ok) {
          calendarData = await calRes.json();
        } else {
          // Fallback to secondary API
          const fbRes = await fetch("https://github-contributions-api.jogruber.de/v4/NITHEESHRAMASAMY");
          if (fbRes.ok) {
            const fbData = await fbRes.json();
            if (fbData && fbData.contributions) {
              // Group into 7-day weeks
              const flat = fbData.contributions;
              const weeks = [];
              for (let i = 0; i < flat.length; i += 7) {
                weeks.push(flat.slice(i, i + 7));
              }
              calendarData = {
                total: fbData.total ? Object.values(fbData.total).reduce((a, b) => a + b, 0) : totalCommits,
                contributions: weeks,
              };
            }
          }
        }

        if (calendarData && Array.isArray(calendarData.contributions) && calendarData.contributions.length > 0) {
          if (isMounted) setContributions(calendarData.contributions);

          const days = calendarData.contributions.flat();
          const todayStr = new Date().toISOString().split("T")[0];
          const pastDays = days.filter((d) => d && d.date && d.date <= todayStr);
          pastDays.sort((a, b) => new Date(a.date) - new Date(b.date));

          // Calculate longest streak
          let tempStreak = 0;
          let computedLongest = 0;
          for (let i = 0; i < pastDays.length; i++) {
            const count = pastDays[i].count || (pastDays[i].intensity && pastDays[i].intensity > 0 ? 1 : 0);
            if (count > 0) {
              tempStreak++;
              if (tempStreak > computedLongest) {
                computedLongest = tempStreak;
              }
            } else {
              tempStreak = 0;
            }
          }

          // Calculate current streak
          let computedCurrent = 0;
          for (let i = pastDays.length - 1; i >= 0; i--) {
            const d = pastDays[i];
            const count = d.count || (d.intensity && d.intensity > 0 ? 1 : 0);
            if (count > 0) {
              computedCurrent++;
            } else if (d.date === todayStr && count === 0) {
              // If today has no commits yet, don't break current streak
              continue;
            } else {
              break;
            }
          }

          if (calendarData.total && calendarData.total > totalCommits) {
            totalCommits = calendarData.total;
          }
          if (computedLongest > 0) longestStreak = computedLongest;
          if (computedCurrent > 0) currentStreak = computedCurrent;
        }
      } catch (err) {
        console.warn("Error fetching contribution calendar:", err);
      }

      if (!isMounted) return;

      // Update Languages
      const langKeys = Object.keys(fetchedLangs);
      if (langKeys.length > 0) {
        const totalCount = langKeys.reduce((acc, k) => acc + fetchedLangs[k], 0);
        const langArr = langKeys
          .map((k) => ({
            name: k,
            pct: Math.round((fetchedLangs[k] / totalCount) * 100),
          }))
          .sort((a, b) => b.pct - a.pct);
        setLanguages(langArr.slice(0, 4));
      }

      setStats({
        repos: reposCount,
        commits: totalCommits,
        streak: currentStreak,
        longestStreak: longestStreak,
      });
      setLoading(false);
    };

    fetchGithubData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Generate matrix fallback
  const columns = Array.from({ length: 53 });
  const rows = Array.from({ length: 7 });

  const getContributionColor = (day, colIdx, rowIdx) => {
    if (!day) {
      const rand = Math.sin(colIdx * 3 + rowIdx * 7) * 10;
      const val = Math.abs(Math.floor(rand)) % 5;
      if (val === 0) return "bg-neutral-900";
      if (val === 1) return "bg-emerald-950";
      if (val === 2) return "bg-emerald-800";
      if (val === 3) return "bg-emerald-600";
      return "bg-emerald-400";
    }

    const intensity = parseInt(day.intensity ?? day.level ?? 0, 10);
    const count = day.count ?? day.contributionCount ?? 0;

    if (intensity === 0 && count === 0) return "bg-neutral-900";
    if (intensity === 1 || count === 1) return "bg-emerald-950";
    if (intensity === 2 || (count >= 2 && count <= 3)) return "bg-emerald-800";
    if (intensity === 3 || (count >= 4 && count <= 6)) return "bg-emerald-600";
    return "bg-emerald-400";
  };

  return (
    <section
      id="github-dashboard"
      className="min-h-screen py-32 px-6 md:px-12 border-t border-neutral-900 bg-black flex flex-col justify-between relative"
    >
      <div className="flex flex-col gap-2 mb-16">
        <span className="font-mono text-xs text-neutral-600 tracking-[0.3em] uppercase">
          [ INTEGRATIONS ]
        </span>
        <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-white uppercase leading-none">
          GITHUB ACTIVITY
        </h2>
      </div>

      {/* Main dashboard console grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full flex-1">
        
        {/* Left Console Column: Stats and Lang Breakdown */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Card Statistics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Total Repos */}
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex items-center gap-5 hover:border-neutral-800 transition-colors duration-300">
              <div className="p-3 bg-neutral-900 rounded-lg text-white">
                <GitBranch size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                  Total Repos
                </span>
                <span className="text-3xl font-display text-white font-semibold">
                  <CountUp value={stats.repos} />
                </span>
              </div>
            </div>

            {/* Commits */}
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex items-center gap-5 hover:border-neutral-800 transition-colors duration-300">
              <div className="p-3 bg-neutral-900 rounded-lg text-white">
                <GitCommit size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                  Commit Count
                </span>
                <span className="text-3xl font-display text-white font-semibold">
                  <CountUp value={stats.commits} />
                </span>
              </div>
            </div>

            {/* Current Streak */}
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex items-center gap-5 hover:border-neutral-800 transition-colors duration-300">
              <div className="p-3 bg-neutral-900 rounded-lg text-white">
                <Flame size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                  Current Streak
                </span>
                <span className="text-3xl font-display text-white font-semibold">
                  <CountUp value={stats.streak} /> days
                </span>
              </div>
            </div>

            {/* Longest Streak */}
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex items-center gap-5 hover:border-neutral-800 transition-colors duration-300">
              <div className="p-3 bg-neutral-900 rounded-lg text-white">
                <Flame size={22} className="opacity-60" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                  Longest Streak
                </span>
                <span className="text-3xl font-display text-white font-semibold">
                  <CountUp value={stats.longestStreak} /> days
                </span>
              </div>
            </div>
          </div>

          {/* Languages card */}
          <div className="border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex flex-col gap-5 hover:border-neutral-800 transition-colors duration-300 flex-1 justify-center">
            <div className="flex items-center gap-2 border-b border-neutral-900 pb-3">
              <Code size={14} className="text-neutral-400" />
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                Language Allocation
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {languages.map((lang, index) => (
                <div key={lang.name} className="flex flex-col gap-1">
                  <div className="flex justify-between font-mono text-[10px] text-neutral-400">
                    <span>{lang.name}</span>
                    <span>{lang.pct}%</span>
                  </div>
                  <div className="w-full h-1 bg-neutral-900 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-white origin-left"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Console Column: Contribution Graph */}
        <div className="lg:col-span-5 border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex flex-col justify-between hover:border-neutral-800 transition-colors duration-300 min-h-[350px]">
          
          <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Contribution History
            </span>
            <span className="font-mono text-[9px] text-neutral-600 uppercase">
              Green Grid // 53w
            </span>
          </div>

          {/* Svg/HTML Grid Container */}
          <div className="flex-1 flex flex-col justify-center overflow-x-auto select-none py-6 scrollbar-none">
            <div className="flex gap-[3px] min-w-full">
              {(contributions ? contributions : columns).map((colVal, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-[3px]">
                  {(contributions && Array.isArray(colVal) ? colVal : rows).map((dayVal, rowIdx) => {
                    const colorClass = getContributionColor(dayVal, colIdx, rowIdx);
                    const count = dayVal && (dayVal.count !== undefined ? dayVal.count : dayVal.contributionCount !== undefined ? dayVal.contributionCount : 0);
                    const titleText = dayVal && dayVal.date
                      ? `${count} contributions on ${dayVal.date}`
                      : `Week ${colIdx + 1}, Day ${rowIdx + 1}`;

                    return (
                      <motion.div
                        key={rowIdx}
                        initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{
                          duration: 0.4,
                          delay: (colIdx * 7 + rowIdx) * 0.0008,
                        }}
                        className={`w-[7px] h-[7px] md:w-[9px] md:h-[9px] rounded-sm transition-colors duration-500 hover:scale-125 ${colorClass}`}
                        title={titleText}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Labels under graph */}
            <div className="flex justify-between font-mono text-[8px] text-neutral-600 tracking-wider mt-4 px-1 uppercase">
              <span>Less</span>
              <div className="flex gap-[3px] items-center">
                <div className="w-[7px] h-[7px] bg-neutral-900 rounded-sm" />
                <div className="w-[7px] h-[7px] bg-emerald-950 rounded-sm" />
                <div className="w-[7px] h-[7px] bg-emerald-800 rounded-sm" />
                <div className="w-[7px] h-[7px] bg-emerald-600 rounded-sm" />
                <div className="w-[7px] h-[7px] bg-emerald-400 rounded-sm" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Metric Bottom Tagline */}
          <div className="border-t border-neutral-900 pt-4 font-mono text-[9px] text-neutral-500 leading-normal">
            <p>// Public repositories synced live via GitHub API endpoints.</p>
            <p className="text-neutral-600 mt-0.5">// Contribution values correspond to past commits, issues, and PR approvals.</p>
          </div>

        </div>
      </div>

      {/* Footer copyright */}
      <div className="flex justify-between items-center font-mono text-[9px] text-neutral-600 tracking-[0.2em] mt-24">
        <span>INTEGRATIONS // GITHUB LAB</span>
        <span>026 // © NITHEESH R</span>
      </div>
    </section>
  );
}

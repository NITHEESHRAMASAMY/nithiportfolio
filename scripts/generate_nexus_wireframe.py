import os
from PIL import Image, ImageDraw, ImageFont

def get_font(size, bold=False, mono=False):
    font_names = []
    if mono:
        font_names = ["consola.ttf", "cour.ttf", "arial.ttf"]
    elif bold:
        font_names = ["segoeuib.ttf", "arialbd.ttf", "calibrib.ttf", "tahoma.ttf"]
    else:
        font_names = ["segoeui.ttf", "arial.ttf", "calibri.ttf", "tahoma.ttf"]
    
    for name in font_names:
        try:
            return ImageFont.truetype(name, size)
        except Exception:
            continue
    return ImageFont.load_default()

def draw_placeholder_box(draw, box, label="[MEDIA / 3D PREVIEW]", font=None):
    x1, y1, x2, y2 = box
    draw.rectangle([x1, y1, x2, y2], fill=(24, 24, 28), outline=(65, 65, 75), width=1)
    # Draw standard wireframe X
    draw.line([x1, y1, x2, y2], fill=(40, 40, 48), width=1)
    draw.line([x1, y2, x2, y1], fill=(40, 40, 48), width=1)
    if label and font:
        w = draw.textlength(label, font=font)
        cx, cy = (x1 + x2) // 2, (y1 + y2) // 2
        pad_x = 10
        pad_y = 5
        draw.rectangle([cx - w//2 - pad_x, cy - 10 - pad_y, cx + w//2 + pad_x, cy + 10 + pad_y], fill=(16, 16, 18), outline=(70, 70, 80), width=1)
        draw.text((cx - w//2, cy - 8), label, fill=(190, 190, 200), font=font)

def create_wireframe_sheet():
    W, H = 2400, 1420
    img = Image.new("RGB", (W, H), (14, 14, 16))
    draw = ImageDraw.Draw(img)

    # Fonts
    f_title = get_font(24, bold=True)
    f_sub = get_font(13, mono=True)
    f_h1 = get_font(17, bold=True)
    f_h2 = get_font(13, bold=True)
    f_body = get_font(12, bold=False)
    f_mono = get_font(11, mono=True)
    f_micro = get_font(10, mono=True)
    f_badge = get_font(11, bold=True)

    # 1. Background Technical Grid (Grayscale only)
    for x in range(0, W, 40):
        draw.line([x, 0, x, H], fill=(22, 22, 26), width=1)
    for y in range(0, H, 40):
        draw.line([0, y, W, y], fill=(22, 22, 26), width=1)

    # 2. Main Title Header Bar
    draw.rectangle([40, 25, W - 40, 95], fill=(20, 20, 24), outline=(70, 70, 80), width=1)
    draw.text((65, 40), "ICY AR/VR FRAMES // LOW-FIDELITY WIREFRAME SYSTEM", fill=(255, 255, 255), font=f_title)
    draw.text((65, 70), "FIGMA PAGE 3: SCREEN ARCHITECTURE • 1440x900 DESKTOP & 390x844 MOBILE • 6-DoF SPATIAL RUNTIME", fill=(160, 160, 170), font=f_sub)
    
    # Legend Pills in Header
    legend_items = [
        ("RULES: GRAYSCALE ONLY", (220, 220, 220), (45, 45, 52)),
        ("GRID: 12-COLUMN FLUID", (180, 180, 180), (35, 35, 40)),
        ("INTERACTIVE TARGETS: [ANNOTATED]", (200, 200, 200), (35, 35, 40)),
        ("TARGET: WEBXR / QUEST 3", (220, 220, 220), (45, 45, 52)),
    ]
    lx = W - 800
    for text, text_color, bg_color in legend_items:
        tw = draw.textlength(text, font=f_micro)
        draw.rectangle([lx, 50, lx + tw + 18, 76], fill=bg_color, outline=(80, 80, 90), width=1)
        draw.text((lx + 9, 56), text, fill=text_color, font=f_micro)
        lx += tw + 24

    # -------------------------------------------------------------
    # FRAME 01: DESKTOP WIREFRAME (1440 x 900 REF) - Left
    # -------------------------------------------------------------
    fx, fy, fw, fh = 40, 115, 1150, 730
    draw.rectangle([fx, fy, fx + fw, fy + fh], fill=(22, 22, 26), outline=(90, 90, 100), width=2)
    
    # Title Tag with Badge
    draw.rectangle([fx, fy - 22, fx + 360, fy], fill=(36, 36, 42), outline=(90, 90, 100), width=1)
    draw.text((fx + 14, fy - 18), "FRAME 01 — DESKTOP DISCOVERY HUB (1440 x 900)", fill=(240, 240, 240), font=f_micro)

    # 12-Column Guide markers (subtle)
    col_w = (fw - 60) / 12
    for c in range(13):
        cx = fx + 30 + c * col_w
        draw.line([cx, fy + 45, cx, fy + fh], fill=(28, 28, 33), width=1)

    # Top Navigation Bar (Header)
    draw.rectangle([fx, fy, fx + fw, fy + 45], fill=(32, 32, 38), outline=(70, 70, 80), width=1)
    draw.rectangle([fx + 20, fy + 12, fx + 150, fy + 33], fill=(50, 50, 60), outline=(90, 90, 100), width=1)
    draw.text((fx + 28, fy + 15), "[LOGO: ICY AR/VR]", fill=(220, 220, 230), font=f_micro)

    # Nav links
    nav_links = ["01 EXPLORE", "02 WORLDS", "03 TOURNAMENTS", "04 SQUADS", "05 SPATIAL SCAN"]
    nx = fx + 170
    for nl in nav_links:
        draw.text((nx, fy + 15), nl, fill=(170, 170, 180), font=f_micro)
        nx += 105

    # Device Status & Profile
    draw.rectangle([fx + fw - 335, fy + 10, fx + fw - 110, fy + 35], fill=(40, 40, 48), outline=(85, 85, 95), width=1)
    draw.rectangle([fx + fw - 325, fy + 17, fx + fw - 315, fy + 27], fill=(210, 210, 210))
    draw.text((fx + fw - 308, fy + 15), "META QUEST 3: PAIRED (86%)", fill=(210, 210, 220), font=f_micro)
    draw.rectangle([fx + fw - 90, fy + 10, fx + fw - 20, fy + 35], fill=(220, 220, 220))
    draw.text((fx + fw - 78, fy + 15), "PILOT [AV]", fill=(20, 20, 20), font=f_micro)

    # Left Persistent Sidebar Rail
    sx, sy, sw, sh = fx + 20, fy + 60, 170, fh - 80
    draw.rectangle([sx, sy, sx + sw, sy + sh], fill=(18, 18, 22), outline=(60, 60, 70), width=1)
    draw.text((sx + 12, sy + 15), "NAV RAIL // UNIVERSE", fill=(140, 140, 150), font=f_micro)
    side_items = [
        ("• Explore Hero", True),
        ("• World Catalog", False),
        ("• Missions (S04)", False),
        ("• Leaderboards", False),
        ("— TOGETHER —", False),
        ("• Active Squad (4)", False),
        ("• Live Events", False),
        ("• Loadout Shop", False),
        ("• 6-DoF Scanner", False)
    ]
    s_y = sy + 38
    for s_txt, s_active in side_items:
        if s_active:
            draw.rectangle([sx + 8, s_y - 2, sx + sw - 8, s_y + 16], fill=(48, 48, 56), outline=(90, 90, 100), width=1)
            draw.text((sx + 12, s_y), s_txt, fill=(255, 255, 255), font=f_micro)
        else:
            draw.text((sx + 12, s_y), s_txt, fill=(150, 150, 160), font=f_micro)
        s_y += 24

    # Connect Headset Dock Widget at Bottom of Sidebar
    draw.rectangle([sx + 8, sy + sh - 98, sx + sw - 8, sy + sh - 10], fill=(26, 26, 32), outline=(75, 75, 85), width=1)
    draw.text((sx + 14, sy + sh - 90), "DEVICE LINK", fill=(150, 150, 160), font=f_micro)
    draw.text((sx + 14, sy + sh - 74), "Meta Quest 3: READY", fill=(240, 240, 240), font=f_micro)
    draw.rectangle([sx + 14, sy + sh - 56, sx + sw - 14, sy + sh - 36], fill=(220, 220, 220))
    draw.text((sx + 24, sy + sh - 51), "CONNECT VISOR", fill=(15, 15, 15), font=f_micro)
    draw.text((sx + 18, sy + sh - 26), "or Try without headset", fill=(130, 130, 140), font=f_micro)

    # Main Content Area
    mx = sx + sw + 20
    mw = fw - (sw + 60)

    # Hero Billboard Container (Season 04 Orbit Racers)
    hx, hy, hw, hh = mx, fy + 60, mw, 235
    draw.rectangle([hx, hy, hx + hw, hy + hh], fill=(20, 20, 24), outline=(70, 70, 80), width=1)
    # Right half: 3D preview box
    draw_placeholder_box(draw, [hx + hw - 360, hy + 15, hx + hw - 15, hy + hh - 15], label="[3D HERO VIEWPORT: S04]", font=f_micro)
    
    # Left half: Headline & Controls
    draw.rectangle([hx + 20, hy + 20, hx + 180, hy + 42], fill=(30, 30, 36), outline=(80, 80, 90), width=1)
    draw.text((hx + 28, hy + 26), "● ALL SYSTEMS GO • S04", fill=(230, 230, 230), font=f_micro)
    draw.text((hx + 20, hy + 58), "ORBIT RACERS: ICE CIRCUIT", fill=(255, 255, 255), font=f_h1)
    draw.text((hx + 20, hy + 88), "Leave gravity behind. 1.2k explorers currently online in this sector.", fill=(190, 190, 200), font=f_body)
    draw.text((hx + 20, hy + 106), "WebXR 6-DoF spatial tracking ready. High-velocity racing environment.", fill=(150, 150, 160), font=f_micro)
    
    # Hero CTAs
    draw.rectangle([hx + 20, hy + 135, hx + 190, hy + 172], fill=(255, 255, 255))
    draw.text((hx + 38, hy + 147), "ENTER THE WORLD [CTA]", fill=(15, 15, 15), font=f_h2)
    draw.rectangle([hx + 205, hy + 135, hx + 345, hy + 172], fill=(35, 35, 42), outline=(100, 100, 110), width=1)
    draw.text((hx + 225, hy + 147), "VIEW DETAILS [MODAL]", fill=(200, 200, 210), font=f_body)

    # Telemetry Badges inside Hero
    t_badges = ["COMFORT: MODERATE", "CAPACITY: 1-8 EXPLORERS", "CROSS-PLAY: WEBXR + QUEST"]
    bx = hx + 20
    for tb in t_badges:
        tw = draw.textlength(tb, font=f_micro)
        draw.rectangle([bx, hy + 192, bx + tw + 14, hy + 214], fill=(26, 26, 32), outline=(65, 65, 75), width=1)
        draw.text((bx + 7, hy + 198), tb, fill=(180, 180, 190), font=f_micro)
        bx += tw + 18

    # Section 2: Catalog of Worlds (3 Cards Grid)
    cy = hy + hh + 20
    draw.text((mx, cy), "DISCOVERABLE REALMS // ACTIVE SECTOR DIRECTORY", fill=(240, 240, 240), font=f_h2)
    draw.text((mx + mw - 180, cy + 2), "SORT: POPULARITY ▼  FILTER ▼", fill=(150, 150, 160), font=f_micro)

    card_w = (mw - 30) // 3
    card_h = 330
    card_y = cy + 25

    worlds_data = [
        ("ORBIT RACERS", "RACING / SPEED", "1.2k LIVE", "4.9★", "MODERATE", "ENTER SECTOR"),
        ("CRYSTAL FRONTIER", "ADVENTURE / SCI-FI", "846 LIVE", "4.9★", "STATIONARY", "ENTER SECTOR"),
        ("VERDANT PROTOCOL", "EXPLORATION / MR", "620 LIVE", "4.8★", "INTENSE", "ENTER SECTOR"),
    ]

    for idx, (w_title, w_genre, w_live, w_rate, w_comf, w_cta) in enumerate(worlds_data):
        cx = mx + idx * (card_w + 15)
        # Card container
        draw.rectangle([cx, card_y, cx + card_w, card_y + card_h], fill=(18, 18, 22), outline=(70, 70, 80), width=1)
        # Thumbnail box
        draw_placeholder_box(draw, [cx + 10, card_y + 10, cx + card_w - 10, card_y + 145], label=f"[3D THUMB: {w_title}]", font=f_micro)
        # Badges
        draw.rectangle([cx + 16, card_y + 16, cx + 90, card_y + 34], fill=(16, 16, 18), outline=(70, 70, 70), width=1)
        draw.text((cx + 22, card_y + 20), w_genre, fill=(180, 180, 190), font=f_micro)
        draw.rectangle([cx + card_w - 85, card_y + 16, cx + card_w - 16, card_y + 34], fill=(16, 16, 18), outline=(70, 70, 70), width=1)
        draw.text((cx + card_w - 78, card_y + 20), w_live, fill=(230, 230, 230), font=f_micro)

        # Meta info
        draw.text((cx + 14, card_y + 160), w_title, fill=(255, 255, 255), font=f_h2)
        draw.text((cx + 14, card_y + 182), f"RATING: {w_rate}  •  COMFORT: {w_comf}", fill=(160, 160, 170), font=f_micro)
        draw.text((cx + 14, card_y + 204), "Zero-friction WebXR handoff with spatial audio & controller haptics.", fill=(140, 140, 150), font=f_micro)

        # Specs grid
        draw.rectangle([cx + 10, card_y + 238, cx + card_w - 10, card_y + 268], fill=(26, 26, 32), outline=(60, 60, 70), width=1)
        draw.text((cx + 16, card_y + 248), "CAPACITY: 1-8  |  TICK: 60Hz  |  6-DoF", fill=(170, 170, 180), font=f_micro)

        # Action button
        draw.rectangle([cx + 10, card_y + 280, cx + card_w - 10, card_y + 315], fill=(235, 235, 235))
        draw.text((cx + card_w // 2 - 45, card_y + 292), w_cta, fill=(15, 15, 15), font=f_h2)

    # -------------------------------------------------------------
    # FRAME 02: MOBILE WIREFRAME (390 x 844 REF) - Positioned Center-Right
    # -------------------------------------------------------------
    mox, moy, mow, moh = 1225, 115, 345, 730
    draw.rectangle([mox, moy, mox + mow, moy + moh], fill=(22, 22, 26), outline=(90, 90, 100), width=2)
    # Title Tag
    draw.rectangle([mox, moy - 22, mox + 310, moy], fill=(36, 36, 42), outline=(90, 90, 100), width=1)
    draw.text((mox + 12, moy - 18), "FRAME 02 — MOBILE ADAPTIVE (390 x 844)", fill=(240, 240, 240), font=f_micro)

    # Mobile Header Bar
    draw.rectangle([mox, moy, mox + mow, moy + 45], fill=(30, 30, 36), outline=(70, 70, 80), width=1)
    draw.rectangle([mox + 14, moy + 14, mox + 34, moy + 30], fill=(60, 60, 70))
    draw.text((mox + 16, moy + 16), "≡", fill=(255, 255, 255), font=f_h2)
    draw.text((mox + 45, moy + 15), "ICY AR/VR", fill=(240, 240, 240), font=f_h2)
    # Mobile headset status icon
    draw.rectangle([mox + mow - 105, moy + 12, mox + mow - 12, moy + 34], fill=(40, 40, 48), outline=(80, 80, 90), width=1)
    draw.text((mox + mow - 98, moy + 16), "QUEST 3 (86%)", fill=(200, 200, 210), font=f_micro)

    # Mobile Hero Banner
    mh_y = moy + 55
    draw_placeholder_box(draw, [mox + 12, mh_y, mox + mow - 12, mh_y + 140], label="[MOBILE HERO: S04 ORBIT RACERS]", font=f_micro)
    draw.rectangle([mox + 18, mh_y + 10, mox + 130, mh_y + 28], fill=(15, 15, 18), outline=(70, 70, 80), width=1)
    draw.text((mox + 24, mh_y + 13), "● 1.2k ONLINE", fill=(230, 230, 230), font=f_micro)

    # Mobile Hero CTA
    draw.rectangle([mox + 12, mh_y + 150, mox + mow - 12, mh_y + 188], fill=(240, 240, 240))
    draw.text((mox + mow//2 - 62, mh_y + 162), "ENTER WORLD (1-TAP)", fill=(15, 15, 15), font=f_h2)

    # Mobile World List (Vertical Stack)
    draw.text((mox + 14, mh_y + 202), "EXPERIENCE CATALOG", fill=(240, 240, 240), font=f_h2)
    
    mw_cards = [
        ("ORBIT RACERS", "RACING", "1.2k", "4.9★", "MODERATE"),
        ("CRYSTAL FRONTIER", "ADV", "846", "4.9★", "STATIONARY"),
        ("VERDANT PROTOCOL", "MR", "620", "4.8★", "INTENSE"),
    ]
    my_c = mh_y + 226
    for c_title, c_cat, c_pop, c_star, c_comf in mw_cards:
        draw.rectangle([mox + 12, my_c, mox + mow - 12, my_c + 102], fill=(26, 26, 32), outline=(65, 65, 75), width=1)
        # thumbnail
        draw_placeholder_box(draw, [mox + 18, my_c + 8, mox + 98, my_c + 94], label="[3D]", font=f_micro)
        # texts
        draw.text((mox + 108, my_c + 12), c_title, fill=(255, 255, 255), font=f_h2)
        draw.text((mox + 108, my_c + 34), f"{c_cat} • {c_pop} Online • {c_star}", fill=(160, 160, 170), font=f_micro)
        draw.text((mox + 108, my_c + 50), f"Comfort: {c_comf}", fill=(140, 140, 150), font=f_micro)
        # launch button
        draw.rectangle([mox + 108, my_c + 68, mox + mow - 20, my_c + 94], fill=(220, 220, 220))
        draw.text((mox + 140, my_c + 74), "LAUNCH REALM", fill=(15, 15, 15), font=f_micro)
        my_c += 114

    # Mobile Bottom Navigation Bar (Thumb Zone)
    bnav_y = moy + moh - 50
    draw.rectangle([mox, bnav_y, mox + mow, moy + moh], fill=(30, 30, 38), outline=(70, 70, 80), width=1)
    b_items = ["EXPLORE", "CATALOG", "SQUADS", "SCANNER", "PROFILE"]
    bx_m = mox + 10
    for bi in b_items:
        draw.text((bx_m, bnav_y + 18), bi, fill=(180, 180, 190), font=f_micro)
        bx_m += 66

    # -------------------------------------------------------------
    # FRAME 03: HARDWARE READINESS & QUEST 3 PAIRING MODAL (Top Right)
    # -------------------------------------------------------------
    px, py, pw, ph = 1605, 115, 755, 350
    draw.rectangle([px, py, px + pw, py + ph], fill=(20, 20, 24), outline=(90, 90, 100), width=2)
    # Title Tag
    draw.rectangle([px, py - 22, px + 360, py], fill=(36, 36, 42), outline=(90, 90, 100), width=1)
    draw.text((px + 14, py - 18), "FRAME 03 — DEVICE READINESS & QUEST 3 PAIRING", fill=(240, 240, 240), font=f_micro)

    # Modal Header
    draw.rectangle([px, py, px + pw, py + 45], fill=(32, 32, 38), outline=(70, 70, 80), width=1)
    draw.text((px + 20, py + 15), "HARDWARE SYNCHRONIZATION // META QUEST 3 RUNTIME", fill=(255, 255, 255), font=f_h2)
    draw.rectangle([px + pw - 38, py + 12, px + pw - 14, py + 34], fill=(50, 50, 60))
    draw.text((px + pw - 30, py + 15), "X", fill=(220, 220, 220), font=f_micro)

    # Sub-lead
    draw.text((px + 20, py + 60), "A doorway to somewhere else. Automatic device detection confirms hardware readiness.", fill=(160, 160, 170), font=f_body)

    # Hardware Card
    draw.rectangle([px + 20, py + 85, px + pw - 20, py + 200], fill=(26, 26, 32), outline=(70, 70, 80), width=1)
    draw_placeholder_box(draw, [px + 35, py + 100, px + 175, py + 185], label="[QUEST 3 VISOR]", font=f_micro)
    
    # Specs readout
    draw.text((px + 195, py + 100), "STATUS: DETECTED & PAIRED WIRELESSLY", fill=(255, 255, 255), font=f_h2)
    draw.text((px + 195, py + 125), "• Battery Level: 86% (Estimated 2h 15m remaining)", fill=(200, 200, 210), font=f_body)
    draw.text((px + 195, py + 145), "• Runtime Protocol: WebXR Spatial Anchor v2.4", fill=(170, 170, 180), font=f_mono)
    draw.text((px + 195, py + 165), "• Controller Tracking: Left 92% | Right 88% | 6-DoF OK", fill=(170, 170, 180), font=f_mono)

    # Checklist Pills
    draw.rectangle([px + 20, py + 215, px + 250, py + 245], fill=(30, 30, 36), outline=(65, 65, 75), width=1)
    draw.text((px + 30, py + 224), "✓ DISPLAY: 90Hz STEREO", fill=(220, 220, 220), font=f_micro)
    draw.rectangle([px + 265, py + 215, px + 495, py + 245], fill=(30, 30, 36), outline=(65, 65, 75), width=1)
    draw.text((px + 275, py + 224), "✓ BOUNDARY: PASSTHROUGH ACTIVE", fill=(220, 220, 220), font=f_micro)
    draw.rectangle([px + 510, py + 215, px + pw - 20, py + 245], fill=(30, 30, 36), outline=(65, 65, 75), width=1)
    draw.text((px + 520, py + 224), "✓ NETWORK: 12ms PING", fill=(220, 220, 220), font=f_micro)

    # Action Buttons
    draw.rectangle([px + 20, py + 270, px + 360, py + 315], fill=(245, 245, 245))
    draw.text((px + 70, py + 284), "CONFIRM & LAUNCH INTO VISOR", fill=(15, 15, 15), font=f_h2)
    draw.rectangle([px + 380, py + 270, px + pw - 20, py + 315], fill=(35, 35, 42), outline=(80, 80, 90), width=1)
    draw.text((px + 440, py + 284), "TRY WITHOUT HEADSET (2D WEB)", fill=(200, 200, 210), font=f_body)

    # -------------------------------------------------------------
    # FRAME 04: 6-DoF SPATIAL ROOM SCANNER (Middle Right)
    # -------------------------------------------------------------
    rx, ry, rw, rh = 1605, 490, 755, 355
    draw.rectangle([rx, ry, rx + rw, ry + rh], fill=(20, 20, 24), outline=(90, 90, 100), width=2)
    # Title Tag
    draw.rectangle([rx, ry - 22, rx + 360, ry], fill=(36, 36, 42), outline=(90, 90, 100), width=1)
    draw.text((rx + 14, ry - 18), "FRAME 04 — 6-DoF MIXED REALITY ROOM SCANNER", fill=(240, 240, 240), font=f_micro)

    # Modal Header
    draw.rectangle([rx, ry, rx + rw, ry + 45], fill=(32, 32, 38), outline=(70, 70, 80), width=1)
    draw.text((rx + 20, ry + 15), "SPATIAL BOUNDARY CALIBRATION // 6 DEGREES OF FREEDOM", fill=(255, 255, 255), font=f_h2)
    draw.rectangle([rx + rw - 38, ry + 12, rx + rw - 14, ry + 34], fill=(50, 50, 60))
    draw.text((rx + rw - 30, ry + 15), "X", fill=(220, 220, 220), font=f_micro)

    # Scanner Viewport Box
    draw_placeholder_box(draw, [rx + 20, ry + 60, rx + 340, ry + 270], label="[3D ROOM SCANNER HUD]", font=f_micro)
    # Grid lines inside scanner
    draw.rectangle([rx + 40, ry + 80, rx + 320, ry + 240], fill=None, outline=(110, 110, 120), width=1)
    draw.line([rx + 40, ry + 160, rx + 320, ry + 160], fill=(70, 70, 80), width=1)
    draw.line([rx + 180, ry + 80, rx + 180, ry + 240], fill=(70, 70, 80), width=1)
    draw.text((rx + 90, ry + 246), "SURFACE MESH: 4 PLANES LOCKED", fill=(200, 200, 210), font=f_micro)

    # Right side diagnostics
    diag_x = rx + 360
    draw.text((diag_x, ry + 65), "CALIBRATION DIAGNOSTICS", fill=(255, 255, 255), font=f_h2)
    draw.text((diag_x, ry + 90), "A world inside yours. Scan room surfaces to anchor virtual objects.", fill=(160, 160, 170), font=f_body)

    metrics_list = [
        ("SURFACE DETECTION", "4 Planes recognized (Floor, Desk, 2 Walls)"),
        ("AMBIENT LIGHTING", "Optimal (250 Lux measured)"),
        ("SPATIAL CLEARANCE", "2.4m x 2.1m safe play zone"),
        ("OCCLUSION MESH", "Active WebXR Meshing API enabled"),
    ]
    my_d = ry + 120
    for label, val in metrics_list:
        draw.rectangle([diag_x, my_d, rx + rw - 20, my_d + 32], fill=(26, 26, 32), outline=(65, 65, 75), width=1)
        draw.text((diag_x + 10, my_d + 4), label, fill=(200, 200, 210), font=f_micro)
        draw.text((diag_x + 10, my_d + 17), val, fill=(150, 150, 160), font=f_micro)
        my_d += 36

    # Action Buttons
    draw.rectangle([rx + 20, ry + 290, rx + 370, ry + 335], fill=(245, 245, 245))
    draw.text((rx + 90, ry + 304), "CALIBRATE & LOCK ROOM BOUNDARY", fill=(15, 15, 15), font=f_h2)
    draw.rectangle([rx + 390, ry + 290, rx + rw - 20, ry + 335], fill=(35, 35, 42), outline=(80, 80, 90), width=1)
    draw.text((rx + 460, ry + 304), "RESET BOUNDARIES", fill=(200, 200, 210), font=f_body)

    # -------------------------------------------------------------
    # FRAME 05: REUSABLE COMPONENT SYSTEM & INTERACTION STATES (Bottom Strip)
    # -------------------------------------------------------------
    cx, cy, cw, ch = 40, 875, W - 80, 485
    draw.rectangle([cx, cy, cx + cw, cy + ch], fill=(20, 20, 24), outline=(90, 90, 100), width=2)
    # Title Tag
    draw.rectangle([cx, cy - 22, cx + 480, cy], fill=(36, 36, 42), outline=(90, 90, 100), width=1)
    draw.text((cx + 14, cy - 18), "FRAME 05 — REUSABLE WIREFRAME COMPONENT LIBRARY & INTERACTION STATES", fill=(240, 240, 240), font=f_micro)

    # 4 Sub-Columns of Components
    sub_col_w = (cw - 60) // 4
    
    # Sub-col 1: Buttons & Inputs
    c1_x = cx + 20
    draw.text((c1_x, cy + 20), "01 / BUTTONS & INPUTS", fill=(255, 255, 255), font=f_h2)
    draw.text((c1_x, cy + 42), "Standardized rectangular tokens with state variants", fill=(150, 150, 160), font=f_micro)

    btn_states = [
        ("PRIMARY (DEFAULT)", (240, 240, 240), (15, 15, 15), 1),
        ("PRIMARY (HOVER)", (255, 255, 255), (0, 0, 0), 2),
        ("SECONDARY (OUTLINE)", (30, 30, 36), (220, 220, 220), 1),
        ("DISABLED STATE", (40, 40, 46), (110, 110, 120), 1),
    ]
    b_y = cy + 65
    for b_label, b_bg, b_fg, b_w in btn_states:
        draw.rectangle([c1_x, b_y, c1_x + sub_col_w - 20, b_y + 36], fill=b_bg, outline=(120, 120, 130), width=b_w)
        draw.text((c1_x + 20, b_y + 10), f"BUTTON: {b_label}", fill=b_fg, font=f_micro)
        b_y += 44

    # Search Input Field
    draw.rectangle([c1_x, b_y + 10, c1_x + sub_col_w - 20, b_y + 46], fill=(28, 28, 34), outline=(80, 80, 90), width=1)
    draw.text((c1_x + 14, b_y + 20), "[ Q  SEARCH EXPERIENCES OR SQUADS... ]", fill=(160, 160, 170), font=f_micro)

    # Sub-col 2: Cards & Media Anatomy
    c2_x = c1_x + sub_col_w + 20
    draw.text((c2_x, cy + 20), "02 / CARD & MEDIA ANATOMY", fill=(255, 255, 255), font=f_h2)
    draw.text((c2_x, cy + 42), "Structural container with standardized metadata", fill=(150, 150, 160), font=f_micro)

    draw.rectangle([c2_x, cy + 65, c2_x + sub_col_w - 20, cy + 325], fill=(24, 24, 30), outline=(80, 80, 90), width=1)
    draw_placeholder_box(draw, [c2_x + 10, cy + 75, c2_x + sub_col_w - 30, cy + 185], label="[MEDIA RECTANGLE + 'X']", font=f_micro)
    draw.rectangle([c2_x + 15, cy + 85, c2_x + 95, cy + 105], fill=(15, 15, 15), outline=(70, 70, 70), width=1)
    draw.text((c2_x + 20, cy + 90), "[GENRE TAG]", fill=(200, 200, 200), font=f_micro)
    draw.text((c2_x + 15, cy + 200), "[HEADLINE: EXPERIENCE NAME]", fill=(255, 255, 255), font=f_h2)
    draw.text((c2_x + 15, cy + 225), "[BODY TEXT: 2 LINES OF DESCRIPTIVE COPY]", fill=(160, 160, 170), font=f_micro)
    draw.text((c2_x + 15, cy + 245), "[TELEMETRY: RATING | PLAYERS | COMFORT]", fill=(140, 140, 150), font=f_micro)
    draw.rectangle([c2_x + 15, cy + 275, c2_x + sub_col_w - 35, cy + 310], fill=(235, 235, 235))
    draw.text((c2_x + 60, cy + 287), "[PRIMARY ACTION BUTTON]", fill=(15, 15, 15), font=f_micro)

    # Sub-col 3: Status, Feedback & Dialogs
    c3_x = c2_x + sub_col_w + 20
    draw.text((c3_x, cy + 20), "03 / STATUS, FEEDBACK & DIALOGS", fill=(255, 255, 255), font=f_h2)
    draw.text((c3_x, cy + 42), "State communication without reliance on color alone", fill=(150, 150, 160), font=f_micro)

    feedback_boxes = [
        ("ALL SYSTEMS GO (ACTIVE)", "Solid dot [●] + High-contrast text label", (220, 220, 220)),
        ("CONNECTING / LOADING", "3-dot progress indicator [...] + 60s timeout", (180, 180, 180)),
        ("EMPTY STATE", "Icon rectangle + 'No friends currently online'", (150, 150, 160)),
        ("ERROR / DEVICE UNSUPPORTED", "Exclamation [!] + Web fallback instructions", (230, 230, 230)),
    ]
    fb_y = cy + 65
    for fb_title, fb_sub, fb_c in feedback_boxes:
        draw.rectangle([c3_x, fb_y, c3_x + sub_col_w - 20, fb_y + 48], fill=(26, 26, 32), outline=(75, 75, 85), width=1)
        draw.text((c3_x + 12, fb_y + 8), fb_title, fill=fb_c, font=f_h2)
        draw.text((c3_x + 12, fb_y + 28), fb_sub, fill=(140, 140, 150), font=f_micro)
        fb_y += 56

    # Sub-col 4: User Flow & State Transitions
    c4_x = c3_x + sub_col_w + 20
    draw.text((c4_x, cy + 20), "04 / INTERACTION USER FLOW PIPELINE", fill=(255, 255, 255), font=f_h2)
    draw.text((c4_x, cy + 42), "Deterministic transitions from landing to spatial presence", fill=(150, 150, 160), font=f_micro)

    pipeline_steps = [
        ("01 / ENTRY", "Landing Hero / Device Readiness Check"),
        ("02 / DISCOVERY", "Catalog browse / Comfort tier inspection"),
        ("03 / CALIBRATION", "6-DoF Room Scan / Mesh plane lock"),
        ("04 / SQUAD UP", "Multiplayer invite / Loadout equip"),
        ("05 / IMMERSION", "WebXR Handshake / Runtime launch"),
    ]
    p_y = cy + 65
    for p_num, p_desc in pipeline_steps:
        draw.rectangle([c4_x, p_y, c4_x + sub_col_w - 20, p_y + 36], fill=(30, 30, 38), outline=(70, 70, 80), width=1)
        draw.text((c4_x + 12, p_y + 10), p_num, fill=(255, 255, 255), font=f_h2)
        draw.text((c4_x + 130, p_y + 11), p_desc, fill=(170, 170, 180), font=f_micro)
        p_y += 44

    # Bottom Technical Metadata Footer
    draw.rectangle([cx, cy + ch - 50, cx + cw, cy + ch], fill=(16, 16, 20), outline=(60, 60, 70), width=1)
    draw.text((cx + 20, cy + ch - 34), "NEXUS // ICY AR/VR FRAMES — LOW-FIDELITY WIREFRAME SPECIFICATION", fill=(200, 200, 210), font=f_micro)
    draw.text((cx + cw - 780, cy + ch - 34), "COMPLIANCE: WCAG 2.1 AA • 12-COLUMN DESKTOP (1440x900) • MOBILE (390x844) • WEBXR STANDARD", fill=(150, 150, 160), font=f_micro)

    # Clean Callout Badges with clear margin/no overlap
    callouts = [
        (fx + 30, fy + 58, "1"),  # Nav
        (sx + 20, sy + 48, "2"),  # Sidebar
        (hx + 25, hy + 30, "3"),  # Hero
        (mx + 20, card_y + 20, "4"),  # Cards
        (sx + 20, sy + sh - 85, "5"), # Headset dock
        (mox + 25, moy + moh - 70, "6"), # Mobile nav
        (px + pw - 65, py + 22, "7"), # Pairing modal
        (rx + rw - 65, ry + 22, "8"), # Scanner modal
    ]
    for bx, by, num in callouts:
        draw.ellipse([bx - 10, by - 10, bx + 10, by + 10], fill=(255, 255, 255), outline=(0, 0, 0), width=2)
        draw.text((bx - 4, by - 6), num, fill=(0, 0, 0), font=f_badge)

    # Save images
    out_dir = "public/case-studies/nexus"
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "nexus-wireframe.png")
    img.save(out_path, quality=95)
    print(f"Wireframe saved to {out_path}")

    jpg_path = os.path.join(out_dir, "nexus-wireframe.jpg")
    img.save(jpg_path, quality=95)
    print(f"Wireframe saved to {jpg_path}")

if __name__ == "__main__":
    create_wireframe_sheet()

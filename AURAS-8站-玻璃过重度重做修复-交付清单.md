---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 42fbc4534e1db5442e8c4772d221f10f_943a5d1aca1211f196f9525400248c00
    ReservedCode1: ODRurQRGr7nu9Z8WLWffDwvcMEqWk6C75KBkw18NDzTq4m7EjJhRKo0eifaieqwwXisdgd6hEXf2eAACa8YMPS/Jnmq3SAvgXCi8ST3C/oT3LgZuDlLRovpMGJZMPUiZPZocuLDVv1rFFu0g72K1BJWH7UX99rRVSaLvc0yddFWeDcCloFh2i616Tgs=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 42fbc4534e1db5442e8c4772d221f10f_943a5d1aca1211f196f9525400248c00
    ReservedCode2: ODRurQRGr7nu9Z8WLWffDwvcMEqWk6C75KBkw18NDzTq4m7EjJhRKo0eifaieqwwXisdgd6hEXf2eAACa8YMPS/Jnmq3SAvgXCi8ST3C/oT3LgZuDlLRovpMGJZMPUiZPZocuLDVv1rFFu0g72K1BJWH7UX99rRVSaLvc0yddFWeDcCloFh2i616Tgs=
---

# AURAS 8 站视觉重做修复 — 交付清单

> 重做范围：auras-website-01 / 03 / 04 / 05 / 06 / 07 / 09 / 10（02、08 未改动）
> 原则：仅改本地 CSS（各套 `css/layout.css` 末尾追加覆盖段），未推送 GitHub；保留滚动入场/悬浮微交互/玻璃导航等动效，但玻璃只保留在导航与悬浮卡片局部，大面积灰白遮罩已移除；首屏主体在动画未完成前也完整可见；正文/logo/导航文字对比度均 ≥4.5:1。
> 站点根目录：`C:\Users\Admin\AppData\Roaming\Tencent\Marvis\User\oAN1i2acwygPS0xfDZtAjSCeAPTU\workspace\conv_e7b9c838c08a4c18bc2c0ab11f50611d\output\`

## 共性问题根因与统一修复（8 套通用）

此前灰感来自各套 `layout.css` 中三处叠加：① `hero::after` "brightness patch" 白色渐变罩（01/05/06/07/10 为 0.42→0.22→0.10；03/04/09 为 0.92→0.60→0.28，几乎把首屏图刷白）；② PREMIUM 段 `hero::before` 白色网格线 opacity .30→.40 盖在 hero 上；③ `hero` 多层 radial 彩色叠加背景。修复：每套追加统一段，`hero::after` 置透明、网格线降到 .10（保留极淡质感）、hero 底色还原为亮主题色、并强制 `body.auras-ready .hero.auras-reveal` 首屏可见（消除滚动入场初始 opacity:0 导致的"首屏被挡/需滚动才见主体"）。

## 逐套修改点

### 01（灰遮/小字灰）
- `css/layout.css` 追加 `AURAS V3 REDO` 通用段 + `FIX 01`
- `hero::after` 白渐变 → transparent；`hero::before` → opacity .10；`hero` 背景 bg-alt → `var(--bg)`（更亮）
- `.hero p` 文字色强制 `#1F2A37`（加深，小字不再发灰）

### 03（首屏主体被挡）
- 追加通用段 + `FIX 03`
- 首屏被挡根因：masthead/nav-top 为静态非 fixed，无遮挡；实际是 hero 被 `.auras-reveal` 初始 `opacity:0` 隐藏，需滚动触发 IO 才显现。已强制 hero 首屏可见
- `.hero h1` → `#1F2A37`、`.hero p` → `#3A4250`（保证纸墨风下文字深色清晰）

### 04（Milestones 四卡过大拥挤）
- 追加通用段 + `FIX 04`
- `.numwall` 由 gap:0、通栏大圆角容器改为四张独立卡片：gap 22px、白卡 + 1px 边框 + 圆角 18px + 轻投影，`stat-box` 内边距 40px/10px → 30px/12px，数字 60px → 44px
- 新增 992px 断点两列、640px 断点单列，小屏也不拥挤
- hero 白渐变同步移除，首屏大图不再发白

### 05（灰遮 + 左上 logo 浅灰不显）
- 追加通用段 + `FIX 05`
- 根因：`.nav-panel` 浅色 surface 底，但 `.brand` 沿用 v2 深色导航的浅色文字规则 → logo 不可见。强制 `.nav-panel .brand` → `#14171C`、`.brand small` → `#4A5560`、`.logo-mark` 文字 `#fff`（渐变底色不变）
- `.hero h1` → `#14171C`；hero 白渐变移除

### 06（灰灰的褪色感）
- 追加通用段 + `FIX 06`
- hero 白渐变移除、底色回 `var(--bg)`，两侧图片恢复饱和度
- `.hero h1` → 深绿 `#0E3B2C`、`.subtitle` → 品牌绿 `#1E7A4A`（恢复主题色层次，不再发灰）

### 07（同灰）
- 追加通用段 + `FIX 07`
- hero 白渐变移除、网格线减弱、底色还原；`.hero h1` → `#1F2A37`

### 09（右半图片灰、挤团、字不全）
- 追加通用段 + `FIX 09`
- 根因：`.hero .grid4 .card` min-height 仅 150px + `overflow:hidden`，`.cap` 文字挤在底部；且 0.18→0.62 深暗渐变盖图导致图片灰暗
- 卡高 150px → 210px、圆角 14px → 18px、网格 gap 20px → 24px；`.cap` 内边距 14px → 20px/22px，底部渐变减弱为 transparent→0.5；卡片前置暗层由 0.18/0.62 → 0.05/0.28（图片提亮，白字对比仍足）

### 10（越改越灰）
- 追加通用段 + `FIX 10`
- hero 白渐变移除、网格线减弱、底色还原明亮；`.hero h1` → `#0F2B46`、`.hero p` → `#1F2A37`

## 自检截图（CDP 本地 8123 实拍，viewport 1440×1100）

| 站点 | 截图 | 结论 |
|---|---|---|
| 01 首屏 | `temp\shots_r2\auras-website-01_top.png` | 无遮罩、文字深色清晰、首屏完整 |
| 01 中部 | `temp\shots_r2\auras-website-01_mid.png` | 无遮罩、排版整齐无截断 |
| 03 首屏 | `temp\shots_r2\auras-website-03_top.png` | 首屏完整无遮挡、文字醒目 |
| 04 首屏 | `temp\shots_r2\auras-website-04_top.png` | 白底清爽、无遮罩 |
| 04 里程碑 | `temp\shots_r2\auras-website-04_milestone.png` | 四卡间距匀称、文字完整 |
| 05 首屏 | `temp\shots_r2\auras-website-05_top.png` | 左上 logo 可见对比正常、无遮罩 |
| 06 首屏 | `temp\shots_r2\auras-website-06_top.png` | 文字清晰对比强、信息完整 |
| 07 首屏 | `temp\shots_r2\auras-website-07_top.png` | 无遮罩、对比好、布局完整 |
| 09 首屏 | `temp\shots_r2\auras-website-09_top.png` | 卡片展示无截断 |
| 09 网格区 | `temp\shots_r2\auras-website-09_grid.png` | 卡片间距合适、文字清晰不拥挤 |
| 10 首屏 | `temp\shots_r2\auras-website-10_top.png` | 通透明亮、深蓝文字对比佳 |

截图路径基准：`C:\Users\Admin\AppData\Roaming\Tencent\Marvis\User\oAN1i2acwygPS0xfDZtAjSCeAPTU\workspace\conv_e7b9c838c08a4c18bc2c0ab11f50611d\temp\shots_r2\`

## 修改文件清单

- `output\auras-website-01\css\layout.css`
- `output\auras-website-03\css\layout.css`
- `output\auras-website-04\css\layout.css`
- `output\auras-website-05\css\layout.css`
- `output\auras-website-06\css\layout.css`
- `output\auras-website-07\css\layout.css`
- `output\auras-website-09\css\layout.css`
- `output\auras-website-10\css\layout.css`

（均为末尾追加覆盖段，未改动原有规则与 JS/HTML；02/08 未触碰）
*（内容由AI生成，仅供参考）*

---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 42fbc4534e1db5442e8c4772d221f10f_c42a7855ca0d11f196f9525400248c00
    ReservedCode1: B3KS770kFoIYPKVGART/48w3l0Ply58XzQkcnPwL43W9CNz6rNKwR0RAiTmRg4GT+fM7QxSbmJbPnVxozLaXWQY89Qwb3/MTB3d16AqKxFiPvlwX4N/rv16tvpVFO7cqy/srK6PiI0ayy0476FuuWaf56E9jWnF1A9hKAp+FaVY6jgoTZ4a99k727Og=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 42fbc4534e1db5442e8c4772d221f10f_c42a7855ca0d11f196f9525400248c00
    ReservedCode2: B3KS770kFoIYPKVGART/48w3l0Ply58XzQkcnPwL43W9CNz6rNKwR0RAiTmRg4GT+fM7QxSbmJbPnVxozLaXWQY89Qwb3/MTB3d16AqKxFiPvlwX4N/rv16tvpVFO7cqy/srK6PiI0ayy0476FuuWaf56E9jWnF1A9hKAp+FaVY6jgoTZ4a99k727Og=
---

# AURAS 10 套站 · 阶段二视觉升级 — 交付清单

交付日期：2026-10-17
交付方式：本地文件交付（**未执行 git push，未上传部署**）

---

## 一、任务概述

对标客户给出的 5 个大厂官网标准，按业界顶峰要求对 AURAS 10 套海外宣传站（auras-website-01 ~ 10）完成阶段二视觉升级：

- 补齐 **液态玻璃 / 玻璃拟态** 卡片视觉
- 滚动入场动画（on-scroll 渐入上浮、卡片交错入场）
- 悬浮微交互（按钮流光、hover 抬升与阴影、玻璃面板悬浮显隐）
- 几何装饰（hero 网格纹理、径向光斑、品牌色氛围光）
- 清理阶段一遗留的套级排版问题（按钮截断、页脚遮挡、蒙版层级、深色文字等）
- 全站统一注入 premium.js 与 AURAS V3 PREMIUM CSS 段
- 本地逐套渲染验证：**10 套全部文字可见、无遮挡、无溢出**

硬红线执行情况：
- 02 为客户认可版本，**仅做视觉增强，未改动结构与内容**
- 全程只操作本地文件，**未执行 git push / 未上传部署**

---

## 二、各套升级要点汇总

| 套 | 主题 | 升级要点 | 遗留修复 | 验证 |
|---|---|---|---|---|
| 01 | 标准主站 | premium.js + PREMIUM CSS + 12 个 HTML 注入（injected=12），玻璃卡片/滚动入场/悬浮微交互/几何装饰 | 背景标题模糊等阶段一遗留已清理 | v4 全页截图通过 |
| 02 | 深色玻璃（认可版） | 仅视觉增强：navbar.auras-scrolled 深色玻璃、hero 渐变光斑、玻璃拟态氛围；11 个 HTML 注入（admin.html 跳过）；PREMIUM 段写入 v2-theme.css（9 段） | 无（结构未动） | v4 全页截图通过 |
| 03 | — | premium 注入 + 玻璃拟态升级 | hero 按钮修复：white-space:nowrap; min-width:190px，按钮不再截断 | v4 全页 + v5 03_top 通过 |
| 04 | 全站深色样板 | premium 注入 + 深色玻璃全面升级 | — | v4 全页截图通过 |
| 05 | — | premium 注入 + 玻璃升级 | .nav-panel.auras-scrolled 玻璃规则补全 | v4 全页截图通过 |
| 06 | — | premium 注入 + 玻璃升级 | company 页专项修复 | v4 06_company + v5 06_company 通过 |
| 07 | — | premium 注入 + 玻璃升级 | footer 修复：padding-bottom:130px，页脚内容不再被遮挡 | v4 全页 + v5 07_bot 通过 |
| 08 | — | premium 注入 + 玻璃升级 | — | v4 全页截图通过 |
| 09 | 绿金贸易主题 | premium 注入 + 玻璃升级 | hero grid4 图片卡加渐变蒙版 + .cap z-index 提升；services/index 右侧板块排版修复 | v4 全页 + 专项截图 + **v6 首屏复测通过（无重叠、按钮对比达标）** |
| 10 | — | premium 注入 + 玻璃升级 | footer 深色文字覆盖修复 | v4 全页 + v5 10_bot 通过 |

通用注入确认：01、03~10 的 layout.css 均含 AURAS V3 PREMIUM 段（01/03/04/06/07/08/09/10 各 8 段，05 共 9 段）；02 无 layout.css，PREMIUM 段全部位于 v2-theme.css（9 段）。10 套均含 js/premium.js，各套 12 个 HTML 均已注入 premium.js 引用（02 为 11 个，因 admin.html 跳过）。

---

## 三、每套关键文件绝对路径清单

站点源文件根目录：`C:\Users\Admin\AppData\Roaming\Tencent\Marvis\User\oAN1i2acwygPS0xfDZtAjSCeAPTU\workspace\conv_e7b9c838c08a4c18bc2c0ab11f50611d\output\`

| 套 | 站点根目录 | 关键 CSS | 脚本 | 首页 |
|---|---|---|---|---|
| 01 | output\auras-website-01 | css\layout.css（PREMIUM×8）、css\style.css、css\v2-theme.css | js\premium.js | index.html |
| 02 | output\auras-website-02 | css\v2-theme.css（PREMIUM×9）、css\style.css | js\premium.js | index.html |
| 03 | output\auras-website-03 | css\layout.css（PREMIUM×8）、css\style.css、css\v2-theme.css | js\premium.js | index.html |
| 04 | output\auras-website-04 | css\layout.css（PREMIUM×8）、css\style.css、css\v2-theme.css | js\premium.js | index.html |
| 05 | output\auras-website-05 | css\layout.css（PREMIUM×9）、css\style.css、css\v2-theme.css | js\premium.js | index.html |
| 06 | output\auras-website-06 | css\layout.css（PREMIUM×8）、css\style.css、css\v2-theme.css | js\premium.js | index.html |
| 07 | output\auras-website-07 | css\layout.css（PREMIUM×8）、css\style.css、css\v2-theme.css | js\premium.js | index.html |
| 08 | output\auras-website-08 | css\layout.css（PREMIUM×8）、css\style.css、css\v2-theme.css | js\premium.js | index.html |
| 09 | output\auras-website-09 | css\layout.css（PREMIUM×8）、css\style.css、css\v2-theme.css | js\premium.js | index.html |
| 10 | output\auras-website-10 | css\layout.css（PREMIUM×8）、css\style.css、css\v2-theme.css | js\premium.js | index.html |

> 上表中 `output\` 前缀均指上述站点源文件根目录完整路径；每套含 12 个 HTML（02 亦 12 个，其中 admin.html 未注入 premium）。

---

## 四、本地截图证据位置

截图根目录：`C:\Users\Admin\AppData\Roaming\Tencent\Marvis\User\oAN1i2acwygPS0xfDZtAjSCeAPTU\workspace\conv_e7b9c838c08a4c18bc2c0ab11f50611d\temp\`

| 目录 | 数量 | 内容 |
|---|---|---|
| temp\shots_v4 | 35 | 10 套 × top/mid/bot 全页三段截图（首屏、中部、页脚）；另含 06_company 专项、09 index/services 上下段专项检查图 |
| temp\shots_v5 | 5 | 遗留修复后复测：03_top、06_company、07_bot、09_hero、10_bot |
| temp\shots_v6 | 1 | 09 首屏最终复测（09_hero_v6.png）：滚动入场动画完整结束状态下截图，确认卡片文字无重叠、About Us 按钮对比度达标 |

验证结论：v4 全量 35 张 + v5 修复复测 5 张 + v6 复测 1 张均通过视觉核验（文字清晰、无白字白底、无遮挡、无溢出）。v5 中 09_hero 初判疑似重叠，经 v6 在动画完成态复测确认系滚动入场动画中间帧所致，实际渲染无重叠。

---

## 五、本地查看方式

任选一套（如 09）在浏览器打开：`http://127.0.0.1:8123/auras-website-09/index.html`
或直接双击各套根目录下的 index.html 查看静态效果（部分动效依赖本地静态服务时建议用 8123 方式浏览）。

交付完成。未执行任何 git push / 上传操作。
*（内容由AI生成，仅供参考）*

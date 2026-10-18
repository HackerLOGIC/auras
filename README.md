---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 42fbc4534e1db5442e8c4772d221f10f_1827adcdc8f911f18b7f525400393706
    ReservedCode1: J+ITnK0AG+9cCku13sOlFk8mi8twZc3GarZQggBo8gfjkgGOf3i15TaRBHgXpZ02vx2JC5RWLHyxUbqL48vVkh6169yTSPqbj7IdKo/+tLNSdabSxuyz7D5tWJdOme9BxlvSZjC1hVlPTx928qBlfUy/cRY9NfZVqq2HH4R51/qeqJa9X43JchjRbDA=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 42fbc4534e1db5442e8c4772d221f10f_1827adcdc8f911f18b7f525400393706
    ReservedCode2: J+ITnK0AG+9cCku13sOlFk8mi8twZc3GarZQggBo8gfjkgGOf3i15TaRBHgXpZ02vx2JC5RWLHyxUbqL48vVkh6169yTSPqbj7IdKo/+tLNSdabSxuyz7D5tWJdOme9BxlvSZjC1hVlPTx928qBlfUy/cRY9NfZVqq2HH4R51/qeqJa9X43JchjRbDA=
---






# AURAS 寰途贸易 — 海外宣传网站 10 套模板（专业一体化设计语言 · 对标顶级外网官网）

面向海外市场的企业宣传网站模板集，基于 52 页画册 PDF（转曲版）内容与 449 张提取图片构建。10 套站点共用同一内容体系与后台逻辑，每套对标一个知名海外官网风格，采用统一的专业设计语言（色彩系统 / 字体系统 / 8pt 间距 / 组件一致性 / 克制高级动效），全部支持 5 国语言切换。

## 一、10 套模板总览（对标风格）

| 目录 | 对标参考 | 风格定位 | 视觉关键词 |
| --- | --- | --- | --- |
| auras-website-01-corporate | Stripe / McKinsey | 商务稳重 | 深蓝 + 暖灰 + 金色点缀，Inter/Playfair 衬线混排，细线分隔 |
| auras-website-02-tech | Linear / Vercel | 现代科技 | 深色底 + 紫蓝渐变，克制玻璃拟态，Inter 几何无衬线 |
| auras-website-03-magazine | Aesop / Kinfolk | 简约杂志 | 米白 + 墨黑，衬线编辑感，超大留白，极细分隔线 |
| auras-website-04-immersive | Apple 产品页 | 大图沉浸 | 全屏大图 + 暗角，SF 风格无衬线，文字高可读 |
| auras-website-05-industrial | Siemens / ABB | 工业制造 | 炭黑 + 信号橙，粗重大字号，硬朗直角卡片 |
| auras-website-06-greenenergy | Tesla Energy / Ørsted | 新能源 | 深绿 + 白 + 青，光效克制，圆角柔弧卡片 |
| auras-website-07-global | 联合国 / 国际组织 | 国际化多语言 | 蓝白 + 清晰栅格，多语种排版规范，稳重可靠 |
| auras-website-08-video | 电影 / 发布会官网 | 视频驱动 | 暗调 + 金色点缀，克制时间码元素，电影画幅 |
| auras-website-09-ecommerce | Shopify / Farfetch | 电商导流 | 白底 + 品牌绿 CTA，商品卡片规范，强转化 |
| auras-website-10-minimal | Apple / Google | 极简留白 | 白底黑字 + 超大留白 + 单一蓝色强调 |

> 每套 `css/v2-theme.css` 文件头均有注释块，写明参考风格与设计决策。

## 二、统一设计规范（10 套共同遵守）

### 1. 色彩系统
- 每套定义完整色板：主色 / 辅色 / 中性色阶（浅至深）/ 功能色（链接、警示、成功）/ 深色区块专用文字色
- **WCAG 对比度全量达标（脚本验证）**：正文与背景 ≥ 4.5:1、大标题 ≥ 3:1、按钮 / 眉标 / 深色区正文与辅助文字均 ≥ 4.5:1（AA 级）
- 禁止荧光高饱和色铺底；禁止灰底浅灰字、深底深蓝字等低对比组合
- 深色背景套配足量浅色留白与高对比正文

### 2. 字体系统（Google Fonts 引入，10 套均注入）
- 每套标题字体与正文字体明确搭配，示例：
  - 01 商务：标题 Playfair Display（衬线），正文 Inter
  - 02 科技：标题/正文 Inter（几何无衬线），等宽 IBM Plex Mono 点缀
  - 03 杂志：标题 Cormorant Garamond（衬线编辑感），正文 Source Sans 3
  - 05 工业：标题 Archivo Black / Archivo（粗壮有力），正文 IBM Plex Sans
  - 08 视频：标题 Manrope，正文 Inter，等宽点缀
  - 10 极简：标题 Inter 600/700，正文 Inter 400，超大行距
- 字号梯度：Hero 48–72px / 章节标题 28–40px / 正文 16–18px / 辅助 12–14px；行高 1.5–1.65；字重梯度 400/500/600/700
- 中英文混排协调（标题衬线时英文衬线、中文系统黑体回退）

### 3. 间距与版式
- 8pt 网格：8 / 16 / 24 / 32 / 48 / 64 / 96 / 128px 节奏统一
- 卡片、区块间距同节奏；页面层级清晰（Hero → 眉标 → 标题 → 正文 → CTA）

### 4. 组件一致性
- 每套内部导航、按钮（主 / 次 / 幽灵）、卡片、标签、表单、页脚统一设计语言
- 同圆角体系 8–16px（各套固定一种）、同阴影层级（`--shadow` / `--shadow-lg`）、同描边粗细（1px 细线）
- 按钮体系：`.btn-gold`（主 CTA，高对比前景色）、`.btn-outline`（幽灵）、`.btn-navy`（次按钮）语义一致

### 5. 动效（克制高级，200–500ms）
- 保留：滚动 reveal（交错延迟）、导航吸顶、Hero 缓慢缩放、数字滚动（count-up）、卡片 hover 上浮、按钮微交互、回到顶部
- 统一 200–500ms 缓动（实测 CSS 时长 200–480ms）
- **彻底移除**：花哨光晕、炫彩渐变、过度玻璃拟态、tilt 3D、粒子、彩带等廉价元素
- 全部动效支持 `prefers-reduced-motion` 降级

## 三、功能与内容（10 套一致，全量保留）

- **页面结构**：每套 12 个 HTML（11 前台 + admin.html），画册 7 大板块内容完整
- **图片资产**：每套 449 张，`assets/images/page_XX/img_N.jpg`，与原始站逐文件比对零丢失、零破链
- **新闻板块**：news.html 列表 + news-detail.html 详情，数据来自 localStorage（`auras_news`）
- **员工后台**：admin.html，账号 `admin` / 密码 `auras2026`
- **新闻 CRUD**：js/admin.js 完整增删改查（renderNewsTable / saveJSON / deleteNews / editingNewsId），发布后前台即时读取
- **重大喜讯弹窗**：基于「版本号 + 已读标记」的持久化逻辑（js/site.js `initAnnouncement`）。前台仅在 localStorage 记录版本与当前喜讯版本不一致且未标记已读时弹出；点击 Close / Read News 后写回版本号 + 已读标记，刷新、返回首页、从新闻页返回均不再弹；后台保存 / 修改喜讯（js/admin.js）自动递增版本号，内容更新后用户会再次看到（合理提醒）。localStorage 键：`auras_announce_seen`（版本 + 已读状态）
- **导航栏**：桌面端（≥993px）所有导航项单行完整显示，超长项已改短标签（`Business & Pleasure` → `Leisure`），自动压缩字号 / 间距保证 1280px / 1440px 单行不换行；≤992px 自动折叠为汉堡菜单，移动端无双行导航
- **5 语言切换**：EN / ZH / FR / ES / DE，`js/i18n.js`（234 键词典）自动注入 `#langSelect` 下拉，localStorage 记忆键 `auras_lang`；中文界面完整无英文残留（导航 / 按钮 / 标题 / 页脚 / 弹窗 / 表单 / 提示语均已覆盖，公司名 / 地址 / 域名 / 产品与项目正文按画册保留英文），admin 后台不注入
- **内容可持续更新（CMS）**：后台编辑 → localStorage 持久化 → 前台渲染

## 四、文件结构（以任意一套为例）

```
auras-website-XX/
├── index.html              # 首页（含喜讯弹窗、Hero、统计数字、新闻卡片）
├── about.html              # 公司概况
├── milestones.html         # 发展历程
├── services.html           # 服务
├── products.html           # 产品
├── new-energy.html         # 新能源 / 新业务
├── projects.html           # 项目案例
├── news.html               # 新闻列表
├── news-detail.html        # 新闻详情
├── leisure.html            # 商务与生活
├── contact.html            # 联系与询盘
├── admin.html              # 员工后台（新闻 CRUD）
├── css/
│   ├── style.css           # 基础布局
│   └── v2-theme.css        # 设计语言层（每套独立，含参考风格注释 + WCAG 覆盖层）
├── js/
│   ├── data.js             # 静态数据
│   ├── site.js             # 站点交互 / 喜讯弹窗
│   ├── admin.js            # 后台 CRUD + localStorage
│   ├── ui.js               # 动效引擎（共用，克制 200–500ms）
│   └── i18n.js             # 多语言框架（共用）
└── assets/images/page_XX/  # 449 张画册提取图
```

## 五、打开方式

直接双击各套的 `index.html` 即可在浏览器打开（纯静态站点，无需服务器）。建议使用 Chrome / Edge 最新版。后台入口：各套 `admin.html`，账号 `admin` / 密码 `auras2026`。

## 六、验收清单（本轮重做校验结果）

- 10 套根目录：`auras-website-01-corporate` ~ `auras-website-10-minimal`（另含 `auras-website-11-premium`）
- 页面结构：每套 12 个 HTML，全部在位
- 图片资产：每套 449 张，与原站逐文件一致，HTML/JS 引用 0 破链
- WCAG 对比度：每套 11 组关键色对（正文/辅助/深色区/按钮/眉标/副标题）全部 ≥ 4.5:1
- 字体：每套 Google Fonts 链接注入 index 及全部页面，admin 亦引用主题
- 动效：200–480ms，无光晕 / 炫彩 / tilt 等廉价效果
- 核心功能：新闻 CRUD、喜讯弹窗、5 语言、localStorage 全部保留

## 七、本轮修复校验结果（2026-10-16）

- **弹窗逻辑**：11 套 site.js 一致（MD5 唯一），版本号 + 已读标记逻辑就位；admin.js 保存 / 修改喜讯自动递增版本号
- **导航单行**：11 套 CSS 追加桌面单行保护（≥993px 单行、≤992px 汉堡折叠），`Business & Pleasure` 长标签全部替换为 `Leisure`（每套 11 页，无残留）；1280px / 1440px 静态校验通过
- **翻译覆盖**：i18n.js 词典 253 键（11 套 MD5 一致），中文界面无英文残留；剩余未覆盖文本仅为公司名 / 地址 / 域名 / 数字统计 / 产品与项目正文（画册内容，保留英文合理）
- **内容校对**：公司名 / 官网 / 邮箱 / 地址 11 套全部一致；7 大板块导航覆盖；15 条产品线覆盖（products 9 条 + new-energy 6 类）；projects 页补齐画册遗漏产线 2 项（铝合金注塑机、开关与小家电组装），分类产线条目达 26 项（对应画册 40+ 生产线主题）；新闻种子 17 条（含 Canton Fair / Yiwu Fair / Algeria Fair / Annual Meeting / New Energy）
*（内容由AI生成，仅供参考）*
*（内容由AI生成，仅供参考）*
*（内容由AI生成，仅供参考）*

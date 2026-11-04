/* ============================================================
   AURAS Website - Seed Data & localStorage helpers
   Data keys:
     auras_news        -> [{id,title,category,date,summary,content,cover}]
     auras_announce    -> {id,title,content,date,enabled,version}
     auras_announce_viewed -> {version,read} (frontend read tracking)
     auras_milestones  -> [{id,year,title,description}]
     auras_products    -> [{id,name,category,description,image}]  (admin editable)
     auras_auth        -> "1" (admin login flag)
   ============================================================ */

const IMG = 'assets/images/';

/* localStorage key for announcement read-tracking (used by site.js) */
const ANN_VIEW_KEY = 'auras_announce_viewed';

const AURAS_NEWS_SEED = [
  {
    id: 1,
    title: "AURAS Wins Major Overseas Charging Station Tender",
    category: "Announcement",
    date: "2026-09-28",
    summary: "AURAS successfully secured a multi-standard DC fast charging station project overseas, marking a new milestone in the new energy business.",
    content: "AURAS INTERNATIONAL LIMITED is pleased to announce that our group has successfully won a major overseas tender for multi-standard DC fast charging stations (60KW-180KW-300KW). The project covers equipment supply, installation guidance and after-sales service. This achievement highlights our growing capability in the new energy sector and our commitment to delivering reliable, future-ready solutions to international partners.",
    cover: IMG + 'page_24/img_1.jpg'
  },
  {
    id: 2,
    title: "AURAS Debuts at Canton Fair",
    category: "Exhibition",
    date: "2007-10-15",
    summary: "AURAS attended the Canton Fair for the first time, opening the door to international trade.",
    content: "In October 2007, AURAS attended the Canton Fair for the first time, presenting our trade services and product sourcing capabilities to buyers from around the world. The exhibition was a valuable starting point that helped the company build its first overseas business relationships.",
    cover: IMG + 'page_10/img_1.jpg'
  },
  {
    id: 3,
    title: "AURAS at Yiwu Fair",
    category: "Exhibition",
    date: "2008-04-22",
    summary: "AURAS exhibited at the Yiwu International Commodities Fair, expanding its product network.",
    content: "AURAS joined the Yiwu Fair to explore broader commodity sourcing channels. Through the fair, we strengthened cooperation with manufacturers across stationery, homeware and industrial products, and expanded our overseas buyer network.",
    cover: IMG + 'page_11/img_1.jpg'
  },
  {
    id: 4,
    title: "AURAS at Algeria Fair",
    category: "Exhibition",
    date: "2010-06-08",
    summary: "AURAS attended the Algeria International Fair, deepening cooperation in North Africa.",
    content: "AURAS participated in the Algeria Fair, meeting partners and buyers from North Africa. The visit reinforced our service coverage in the region and led to long-term cooperation on trade and industrial projects.",
    cover: IMG + 'page_12/img_1.jpg'
  },
  {
    id: 5,
    title: "Annual Meeting & Supplier Recognition Ceremony",
    category: "Corporate",
    date: "2012-01-08",
    summary: "AURAS held its annual meeting and recognized outstanding suppliers with awards.",
    content: "AURAS held its annual meeting, gathering partners and team members to review the year's achievements. Outstanding suppliers were recognized with awards, strengthening the AURAS supply chain family.",
    cover: IMG + 'page_05/img_1.jpg'
  },
  {
    id: 6,
    title: "AURAS Group Annual Meeting",
    category: "Corporate",
    date: "2017-02-20",
    summary: "The AURAS Group annual meeting celebrated growth and set the strategy for the coming year.",
    content: "The AURAS Group annual meeting brought together all business units. The team reviewed strong performance across trade services and new business lines, and set the strategic direction for continued international expansion.",
    cover: IMG + 'page_13/img_1.jpg'
  },
  {
    id: 7,
    title: "Return to Algeria Fair with New Business Lines",
    category: "Exhibition",
    date: "2021-10-12",
    summary: "AURAS returned to the Algeria Fair, now presenting new energy and project solutions.",
    content: "AURAS returned to the Algeria Fair with an expanded portfolio: trade services, production line projects and the latest new energy solutions including solar, hydrogen and EV charging. The fair marked the launch of our integrated 'trade + project + new energy' offering.",
    cover: IMG + 'page_12/img_2.jpg'
  },
  {
    id: 8,
    title: "New Energy Business Line Officially Launched",
    category: "New Business",
    date: "2024-05-16",
    summary: "AURAS officially launched its new energy business: EV charging, solar and green hydrogen.",
    content: "AURAS officially launched its new energy business line, covering multi-standard DC fast charging stations (60KW-180KW-300KW), solar energy systems, green hydrogen (H2), crude oil and natural gas trade. The new business line creates a complete energy ecosystem for overseas customers.",
    cover: IMG + 'page_24/img_1.jpg'
  }
];

const AURAS_ANNOUNCE_DEFAULT = {
  id: 'announce-1',
  title: "Major Tender Win - New Energy Project",
  content: "AURAS INTERNATIONAL LIMITED proudly announces that we have won a major overseas tender for multi-standard DC fast charging stations (60KW-180KW-300KW). This success opens a new chapter for our new energy business. Contact us to discuss partnership opportunities!",
  date: "2026-10-01",
  enabled: true,
  version: 1
};

const AURAS_MILESTONES_SEED = [
  { id: 1, year: "2007", title: "Company Founded & First Canton Fair", description: "AURAS was established and attended the Canton Fair for the first time, entering international trade." },
  { id: 2, year: "2008", title: "Yiwu Fair Participation", description: "Expanded commodity sourcing channels and overseas buyer network at Yiwu Fair." },
  { id: 3, year: "2010", title: "Algeria Fair Debut", description: "Entered the North Africa market through the Algeria International Fair." },
  { id: 4, year: "2012", title: "Annual Meeting & Supplier Awards", description: "Held annual meeting and recognized outstanding suppliers, strengthening the supply chain." },
  { id: 5, year: "2017", title: "AURAS Group Annual Meeting", description: "Group-wide annual meeting set the strategy for international expansion." },
  { id: 6, year: "2021", title: "Return to Algeria Fair", description: "Returned to the Algeria Fair presenting new energy solutions and production line projects." },
  { id: 7, year: "2024", title: "New Energy Business Launch", description: "Launched EV charging, solar and green hydrogen business lines." },
  { id: 8, year: "2026", title: "Major Tender Win", description: "Won a major overseas tender for multi-standard DC fast charging stations." }
];

/* ---------- Storage helpers ---------- */
function loadJSON(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch (e) { return fallback; }
}
function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable (e.g. file://) - keep in-memory only */ }
}

function ensureSeed() {
  // News: re-seed when missing or empty (regression: stale empty array hides example news)
  const news = loadJSON('auras_news', null);
  if (!news || !news.length) saveJSON('auras_news', AURAS_NEWS_SEED);

  // Announcement: re-seed when missing; upgrade legacy rows that lack version/enabled
  const ann = loadJSON('auras_announce', null);
  if (!ann) {
    saveJSON('auras_announce', AURAS_ANNOUNCE_DEFAULT);
  } else if (ann.version == null || ann.enabled == null) {
    // legacy row from pre-versioned build: keep user content, bump version so
    // the modal shows once more instead of being skipped by read-tracking
    ann.enabled = ann.enabled !== false;
    ann.version = Math.max(parseInt(ann.version, 10) || 1, 1) + 1;
    if (!ann.id) ann.id = 'announce-1';
    saveJSON('auras_announce', ann);
  }

  try {
    if (!localStorage.getItem('auras_milestones')) saveJSON('auras_milestones', AURAS_MILESTONES_SEED);
  } catch (e) { /* storage unavailable */ }
}

/* Shared helpers */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function formatDate(d) {
  if (!d) return '';
  const dt = new Date(d);
  if (isNaN(dt)) return d;
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months[dt.getMonth()] + ' ' + dt.getDate() + ', ' + dt.getFullYear();
}
function getNews() { return loadJSON('auras_news', AURAS_NEWS_SEED); }
function getMilestones() { return loadJSON('auras_milestones', AURAS_MILESTONES_SEED); }
function getAnnounce() { return loadJSON('auras_announce', AURAS_ANNOUNCE_DEFAULT); }

/* ============================================================
   AURAS Website - Frontend shared logic
   Navbar, news list/detail rendering, announcement modal
   ============================================================ */
(function () {
  /* i18n helper: prefer AURAS_I18N.t once loaded; fall back to raw string */
  var t = function (s) {
    return (window.AURAS_I18N && window.AURAS_I18N.t) ? window.AURAS_I18N.t(s) : s;
  };
  ensureSeed();

  /* Navbar mobile toggle */
  document.addEventListener('DOMContentLoaded', function () {
    const tg = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (tg && links) tg.addEventListener('click', function () { links.classList.toggle('open'); });

    /* Active nav highlight */
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#navLinks a').forEach(function (a) {
      const href = a.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
    });
  });

  window.AURAS = {
    esc, formatDate, getNews, getMilestones, getAnnounce,

    /* Render news cards into a container */
    renderNewsCards(containerId, list, limit) {
      const c = document.getElementById(containerId);
      if (!c) return;
      const items = (list || getNews()).slice(0, limit || 1000);
      if (!items.length) {
        c.innerHTML = '<div class="empty-state">No news published yet. Check back soon.</div>';
        return;
      }
      c.innerHTML = items.map(function (n) {
        const cover = n.cover || IMG + 'page_02/img_1.jpg';
        return '<article class="card news-item">' +
          '<a class="card-img" style="background-image:url(\'' + cover + '\')" href="news-detail.html?id=' + n.id + '"></a>' +
          '<div class="card-body">' +
          '<div class="news-meta"><span class="cat">' + esc(n.category) + '</span><span>' + formatDate(n.date) + '</span></div>' +
          '<h3><a href="news-detail.html?id=' + n.id + '">' + esc(n.title) + '</a></h3>' +
          '<p>' + esc(n.summary) + '</p>' +
          '<a class="tag" href="news-detail.html?id=' + n.id + '">' + t('Read More →') + '</a>' +
          '</div></article>';
      }).join('');
    },

    /* Render full news detail */
    renderNewsDetail(containerId) {
      const c = document.getElementById(containerId);
      if (!c) return;
      const params = new URLSearchParams(location.search);
      const id = parseInt(params.get('id'), 10);
      const news = getNews().find(function (n) { return n.id === id; });
      if (!news) {
        c.innerHTML = '<div class="empty-state">' + t('News not found.') + ' <a href="news.html">' + t('Back to News') + '</a></div>';
        return;
      }
      const cover = news.cover || IMG + 'page_02/img_1.jpg';
      c.innerHTML =
        '<div class="news-detail">' +
        '<div class="news-meta"><span class="cat">' + esc(news.category) + '</span><span>' + formatDate(news.date) + '</span></div>' +
        '<h1>' + esc(news.title) + '</h1>' +
        '<img src="' + cover + '" alt="' + esc(news.title) + '">' +
        '<div class="news-content"><p>' + esc(news.content).replace(/\n/g, '<br>') + '</p></div>' +
        '<a class="btn btn-navy" href="news.html">' + t('← Back to News') + '</a>' +
        '</div>';
    },

    /* Timeline renderer */
    renderTimeline(containerId, items) {
      const c = document.getElementById(containerId);
      if (!c) return;
      const list = items || getMilestones();
      if (!list.length) {
        c.innerHTML = '<div class="empty-state">' + t('No milestones yet.') + '</div>';
        return;
      }
      c.innerHTML = list.map(function (m) {
        return '<div class="tl-item">' +
          '<div class="tl-year">' + esc(m.year) + '</div>' +
          '<h3 class="tl-title">' + esc(m.title) + '</h3>' +
          '<p class="tl-desc">' + esc(m.description) + '</p>' +
          '</div>';
      }).join('');
    },

    /* Announcement modal - versioned read-tracking:
       - shows only when the stored version differs from current AND not marked read
       - closing (Close / Read News / backdrop) records version + read flag
       - refreshing / returning home / coming back from news page: no repeat popup
       - admin saving a new content bumps version -> users see it again once */
    initAnnouncement() {
      const a = getAnnounce();
      if (!a || !a.enabled || !a.title) return;
      const mask = document.getElementById('announceModal');
      if (!mask) return;
      const ver = a.version || 1;
      let viewed = null;
      try { viewed = JSON.parse(localStorage.getItem(ANN_VIEW_KEY) || 'null'); } catch (e) {}
      if (viewed && viewed.version === ver && viewed.read) return; // already seen this version
      document.getElementById('annTitle').textContent = a.title;
      document.getElementById('annDate').textContent = t('Announced: ') + formatDate(a.date);
      document.getElementById('annContent').innerHTML = esc(a.content).replace(/\n/g, '<br>');
      const markRead = function () {
        try { localStorage.setItem(ANN_VIEW_KEY, JSON.stringify({ version: ver, read: true })); } catch (e) {}
        mask.classList.remove('show');
      };
      setTimeout(function () { mask.classList.add('show'); }, 900);
      const closeBtns = mask.querySelectorAll('[data-close]');
      closeBtns.forEach(function (b) { b.addEventListener('click', markRead); });
      mask.addEventListener('click', function (e) { if (e.target === mask) markRead(); });
    }
  };
})();

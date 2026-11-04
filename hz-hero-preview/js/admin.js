/* ============================================================
   AURAS Website - Admin Panel (admin.html)
   Login / News CRUD / Announcement / Milestones
   Matches admin.html DOM ids.
   ============================================================ */
(function () {
  'use strict';
  var ADMIN_USER = 'admin';
  var ADMIN_PASS = 'auras2026';
  var editingNewsId = null;
  var editingMsId = null;

  function $(id) { return document.getElementById(id); }

  document.addEventListener('DOMContentLoaded', function () {
    ensureSeed();

    var loginBtn = $('btnLogin');
    var logoutBtn = $('logoutBtn');
    var panel = $('panel');

    /* ---------- Login ---------- */
    if (loginBtn) {
      loginBtn.addEventListener('click', doLogin);
      ['inUser', 'inPass'].forEach(function (id) {
        var el = $(id);
        if (el) el.addEventListener('keydown', function (e) { if (e.key === 'Enter') doLogin(); });
      });
    }

    function doLogin() {
      var u = $('inUser').value.trim();
      var p = $('inPass').value;
      if (u === ADMIN_USER && p === ADMIN_PASS) {
        localStorage.setItem('auras_auth', '1');
        showAdmin();
      } else {
        $('loginMsg').textContent = '账号或密码错误，请重试（admin / auras2026）';
        $('loginMsg').style.display = 'block';
      }
    }

    function showAdmin() {
      $('loginWrap').style.display = 'none';
      panel.style.display = 'block';
      $('who').textContent = '当前登录：' + ADMIN_USER + '（管理员）';
      bindTabs();
      renderNewsTable();
      renderAnnounce();
      renderMsTable();
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('auras_auth');
        location.reload();
      });
    }

    /* ---------- Tabs ---------- */
    function bindTabs() {
      document.querySelectorAll('.admin-tabs .tab').forEach(function (btn) {
        btn.addEventListener('click', function () {
          document.querySelectorAll('.admin-tabs .tab').forEach(function (b) { b.classList.remove('active'); });
          document.querySelectorAll('.tab-pane').forEach(function (p) { p.style.display = 'none'; });
          btn.classList.add('active');
          $('tab-' + btn.dataset.tab).style.display = 'block';
        });
      });
    }

    /* ---------- News CRUD ---------- */
    window.openNewsForm = function (id) {
      editingNewsId = id || null;
      var news = getNews();
      var item = id ? news.filter(function (n) { return n.id === id; })[0] : null;
      $('newsFormTitle').textContent = item ? '编辑新闻 #' + item.id : '新增新闻';
      $('fTitle').value = item ? item.title : '';
      $('fCat').value = item ? item.category : 'Exhibition';
      $('fDate').value = item ? item.date : new Date().toISOString().slice(0, 10);
      $('fSummary').value = item ? item.summary : '';
      $('fBody').value = item ? item.content : '';
      $('fImage').value = item ? (item.cover || '') : 'assets/images/page_24/img_1.jpg';
      $('newsFormBox').style.display = 'block';
      $('newsMsg').style.display = 'none';
      $('newsFormBox').scrollIntoView({ behavior: 'smooth' });
    };
    window.closeNewsForm = function () { $('newsFormBox').style.display = 'none'; };

    $('btnSaveNews').addEventListener('click', function () {
      var title = $('fTitle').value.trim();
      var content = $('fBody').value.trim();
      if (!title || !content) { showMsg('newsMsg', '标题和正文为必填项', true); return; }
      var news = getNews();
      var rec = {
        id: editingNewsId || (news.length ? Math.max.apply(null, news.map(function (x) { return x.id; })) + 1 : 1),
        title: title,
        category: $('fCat').value || 'General',
        date: $('fDate').value || new Date().toISOString().slice(0, 10),
        summary: $('fSummary').value.trim(),
        content: content,
        cover: $('fImage').value.trim() || 'assets/images/page_24/img_1.jpg'
      };
      if (editingNewsId) {
        var i = news.findIndex(function (x) { return x.id === editingNewsId; });
        if (i >= 0) news[i] = rec;
      } else {
        news.unshift(rec);
      }
      saveJSON('auras_news', news);
      renderNewsTable();
      $('newsFormBox').style.display = 'none';
      showMsg('newsMsg', '新闻已保存（标题：' + rec.title + '）', false);
    });

    window.deleteNews = function (id) {
      if (!confirm('确定永久删除该新闻吗？该操作不可恢复。')) return;
      saveJSON('auras_news', getNews().filter(function (n) { return n.id !== id; }));
      renderNewsTable();
      showMsg('newsMsg', '新闻 #' + id + ' 已删除', false);
    };

    function renderNewsTable() {
      var tb = document.querySelector('#newsTable tbody');
      if (!tb) return;
      var news = getNews();
      tb.innerHTML = news.length ? news.map(function (n) {
        return '<tr>' +
          '<td><strong>' + esc(n.title) + '</strong></td>' +
          '<td>' + esc(n.category) + '</td>' +
          '<td>' + esc(n.date) + '</td>' +
          '<td style="max-width:220px">' + esc((n.summary || '').slice(0, 60)) + '</td>' +
          '<td>' + esc(n.cover || '') + '</td>' +
          '<td><span class="row-actions">' +
          '<button class="btn-sm btn-edit" onclick="openNewsForm(' + n.id + ')">编辑</button>' +
          '<button class="btn-sm btn-del" onclick="deleteNews(' + n.id + ')">删除</button>' +
          '</span></td></tr>';
      }).join('') : '<tr><td colspan="6" style="text-align:center;color:#6b7a8d">暂无新闻，点击「+ 新增新闻」创建。</td></tr>';
      var cnt = $('newsCount');
      if (cnt) cnt.textContent = '共 ' + news.length + ' 条新闻（前台 News 页与首页同步展示）';
    }

    $('btnNewNews').addEventListener('click', function () { openNewsForm(null); });
    $('btnCancelNews').addEventListener('click', closeNewsForm);

    /* ---------- Announcement ---------- */
    function renderAnnounce() {
      var a = getAnnounce();
      $('aTitle').value = a.title || '';
      $('aDate').value = a.date || '';
      $('aBody').value = a.content || '';
      $('aEnabled').checked = !!a.enabled;
    }
    $('btnSaveAnn').addEventListener('click', function () {
      var title = $('aTitle').value.trim();
      var body = $('aBody').value.trim();
      if (!title || !body) { showMsg('annMsg', '标题和内容为必填项', true); return; }
      var prev = getAnnounce();
      saveJSON('auras_announce', {
        id: 'announce-1',
        title: title,
        date: $('aDate').value || new Date().toISOString().slice(0, 10),
        content: body,
        enabled: $('aEnabled').checked,
        version: (prev && prev.version ? prev.version : 1) + 1
      });
      // bump version -> frontend will show the updated announcement again (once per version)
      showMsg('annMsg', '重大喜讯已保存，版本 v' + ((prev && prev.version ? prev.version : 1) + 1) + '。启用时首页将展示一次；前台已读记录会随版本变化重新提醒。', false);
    });

    /* ---------- Milestones ---------- */
    window.openMsForm = function (id) {
      editingMsId = id || null;
      var list = getMilestones();
      var item = id ? list.filter(function (x) { return x.id === id; })[0] : null;
      $('msFormTitle').textContent = item ? '编辑历程 #' + item.id : '新增历程';
      $('mYear').value = item ? item.year : String(new Date().getFullYear());
      $('mTitle').value = item ? item.title : '';
      $('mDesc').value = item ? item.description : '';
      $('msFormBox').style.display = 'block';
      $('msMsg').style.display = 'none';
      $('msFormBox').scrollIntoView({ behavior: 'smooth' });
    };
    window.closeMsForm = function () { $('msFormBox').style.display = 'none'; };

    $('btnNewMs').addEventListener('click', function () { openMsForm(null); });
    $('btnCancelMs').addEventListener('click', closeMsForm);
    $('btnSaveMs').addEventListener('click', function () {
      var title = $('mTitle').value.trim();
      if (!title) { showMsg('msMsg', '标题为必填项', true); return; }
      var list = getMilestones();
      var rec = {
        id: editingMsId || (list.length ? Math.max.apply(null, list.map(function (x) { return x.id; })) + 1 : 1),
        year: $('mYear').value.trim(),
        title: title,
        description: $('mDesc').value.trim()
      };
      if (editingMsId) {
        var i = list.findIndex(function (x) { return x.id === editingMsId; });
        if (i >= 0) list[i] = rec;
      } else {
        list.push(rec);
      }
      saveJSON('auras_milestones', list);
      renderMsTable();
      $('msFormBox').style.display = 'none';
      showMsg('msMsg', '历程已保存（' + rec.year + ' - ' + rec.title + '）', false);
    });

    window.deleteMs = function (id) {
      if (!confirm('确定删除该历程吗？')) return;
      saveJSON('auras_milestones', getMilestones().filter(function (m) { return m.id !== id; }));
      renderMsTable();
      showMsg('msMsg', '历程 #' + id + ' 已删除', false);
    };

    function renderMsTable() {
      var tb = document.querySelector('#msTable tbody');
      if (!tb) return;
      var list = getMilestones();
      tb.innerHTML = list.length ? list.map(function (m) {
        return '<tr>' +
          '<td><strong>' + esc(m.year) + '</strong></td>' +
          '<td>' + esc(m.title) + '</td>' +
          '<td style="max-width:320px">' + esc(m.description) + '</td>' +
          '<td>' +
          '<button class="btn-sm btn-edit" onclick="openMsForm(' + m.id + ')">编辑</button> ' +
          '<button class="btn-sm btn-del" onclick="deleteMs(' + m.id + ')">删除</button>' +
          '</td></tr>';
      }).join('') : '<tr><td colspan="4" style="text-align:center;color:#6b7a8d">暂无历程记录</td></tr>';
    }

    /* ---------- helpers ---------- */
    function showMsg(id, text, isErr) {
      var el = $(id);
      if (!el) return;
      el.textContent = text;
      el.style.display = 'block';
      el.style.color = isErr ? '#c0392b' : '#1e7a4a';
    }

    /* Auto-login if session exists */
    if (localStorage.getItem('auras_auth') === '1') showAdmin();
  });
})();

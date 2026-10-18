/* =========================================================
   AURAS Premium — 发布会级动效引擎
   与 ui.js 共存：tilt 3D / 滚动驱动图片缩放错落 /
   鼠标光晕跟随 / 卡片光晕 / 页面过渡 / hero 视差
   所有动效使用 transform+opacity，尊重 prefers-reduced-motion
   ========================================================= */
(function () {
  'use strict';
  var REDUCED = false;
  try { REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  var FINE = window.matchMedia('(pointer: fine)').matches;

  /* ---------- 1) Tilt 3D 卡片 + 光晕跟随 ---------- */
  if (!REDUCED && FINE && !('ontouchstart' in window)) {
    var TILT_MAX = 7; // 最大倾斜角度
    var tiltEls = document.querySelectorAll('.card, .news-card, .service-card, .product-card, .value-card, .img-frame');
    tiltEls.forEach(function (el) {
      el.addEventListener('mouseenter', function () { el.style.willChange = 'transform'; });
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        var rx = (0.5 - py) * TILT_MAX;
        var ry = (px - 0.5) * TILT_MAX;
        el.style.transform = 'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-4px)';
        el.style.setProperty('--cx', (px * 100).toFixed(1) + '%');
        el.style.setProperty('--cy', (py * 100).toFixed(1) + '%');
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
        el.style.setProperty('--cx', '50%');
        el.style.setProperty('--cy', '0%');
      });
    });
  }

  /* ---------- 2) 鼠标光晕跟随整页 ---------- */
  if (!REDUCED && FINE) {
    var glowTimer = null;
    window.addEventListener('mousemove', function (e) {
      document.documentElement.style.setProperty('--mx', e.clientX + 'px');
      document.documentElement.style.setProperty('--my', e.clientY + 'px');
      if (!document.body.classList.contains('glow-on')) document.body.classList.add('glow-on');
      clearTimeout(glowTimer);
      glowTimer = setTimeout(function () { document.body.classList.remove('glow-on'); }, 2200);
    }, { passive: true });
  }

  /* ---------- 3) 滚动驱动：图片缩放错落 ---------- */
  /* 内容图（产品/项目/画廊/新闻）在滚动进入视口过程中
     由 scale 1.22 平滑收至 1，按位置交错错落，发布会式运镜 */
  var zoomImgs = [];
  if (!REDUCED) {
    document.querySelectorAll('.card-img img, .img-frame img, .img-row img, .gallery-item img, .news-card img, .product-card img').forEach(function (img) {
      if (!img.closest('.hero')) {
        img.classList.add('pr-zoom');
        zoomImgs.push(img);
      }
    });
  }
  function updateZooms() {
    var vh = window.innerHeight;
    for (var i = 0; i < zoomImgs.length; i++) {
      var r = zoomImgs[i].getBoundingClientRect();
      if (r.bottom <= 0 || r.top >= vh) continue;
      /* 进度：0=进入视口底，1=到达视口中部 */
      var prog = Math.min(Math.max((vh - r.top) / (vh * 0.62), 0), 1);
      var scale = 1.22 - prog * 0.22;
      var ty = (1 - prog) * 14; /* 轻微上浮错落 */
      zoomImgs[i].style.transform = 'scale(' + scale.toFixed(3) + ') translateY(' + ty.toFixed(1) + 'px)';
    }
  }

  /* ---------- 4) Hero 视差放大（发布会开场运镜） ---------- */
  var heroBg = document.querySelector('.hero .hero-bg');
  function updateHero() {
    if (!heroBg) return;
    var sy = window.scrollY;
    if (sy < window.innerHeight) {
      heroBg.style.transform = 'translateY(' + (sy * 0.28).toFixed(1) + 'px) scale(' + (1.06 + sy * 0.00025).toFixed(3) + ')';
    }
  }

  /* ---------- 滚动帧调度（rAF 节流，避免 layout 抖动） ---------- */
  var ticking = false;
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function () {
        if (!REDUCED) { updateZooms(); updateHero(); }
        ticking = false;
      });
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* ---------- 5) 页面过渡（站内导航淡出淡入） ---------- */
  if (!REDUCED) {
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href$=".html"]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href.indexOf('http') === 0 || href.charAt(0) === '#') return;
      if (a.target === '_blank') return;
      if (window.location.pathname.split('/').pop() === href) return;
      e.preventDefault();
      document.body.classList.add('pr-leave');
      setTimeout(function () { window.location.href = href; }, 260);
    });
  }

  /* ---------- 6) 初始入场：body 轻上浮（CSS 过渡） ---------- */
  if (!REDUCED) {
    window.addEventListener('load', function () {
      document.body.style.opacity = '1';
    });
    if (document.readyState === 'complete') document.body.style.opacity = '1';
    document.body.style.opacity = '0';
  }
})();

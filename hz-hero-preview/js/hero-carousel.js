/*!
 * AURAS · Hangzhou Landmark Hero Carousel
 * 首页 Hero 背景轮播：自动播放 + 淡入淡出 + 指示点
 * 不依赖任何第三方库，失败时静默降级为静态首图。
 */
(function () {
  'use strict';

  var root = document.getElementById('heroCarousel');
  var dotsWrap = document.getElementById('heroDots');
  if (!root) return;

  var slides = Array.prototype.slice.call(root.querySelectorAll('.hero-slide'));
  if (slides.length < 2) return;

  var dots = dotsWrap ? Array.prototype.slice.call(dotsWrap.querySelectorAll('.hero-dot')) : [];
  var current = 0;
  var timer = null;
  var INTERVAL = 5500;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function show(index) {
    index = ((index % slides.length) + slides.length) % slides.length;
    if (index === current) return;
    slides[current].classList.remove('is-active');
    slides[index].classList.add('is-active');
    if (dots.length) {
      dots[current].classList.remove('is-active');
      dots[current].setAttribute('aria-selected', 'false');
      dots[index].classList.add('is-active');
      dots[index].setAttribute('aria-selected', 'true');
    }
    current = index;
  }

  function start() {
    if (reduceMotion || timer) return;
    timer = window.setInterval(function () { show(current + 1); }, INTERVAL);
  }

  function stop() {
    if (timer) { window.clearInterval(timer); timer = null; }
  }

  // 指示点交互
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      show(i);
      stop();
      start();
    });
  });

  // 悬停暂停，避免用户浏览时图片跳动
  var hero = root.closest('.hero') || root.parentNode;
  if (hero) {
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
  }

  // 页面隐藏时暂停，回到前台继续
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { stop(); } else { start(); }
  });

  // 预热后续图片，避免首轮切换出现空白
  function preload() {
    slides.slice(1).forEach(function (s) {
      var bg = s.style.backgroundImage || '';
      var m = bg.match(/url\(['"]?([^'")]+)['"]?\)/);
      if (!m) return;
      var img = new Image();
      img.src = m[1];
    });
  }
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(preload, { timeout: 2500 });
  } else {
    window.setTimeout(preload, 1200);
  }

  start();
})();

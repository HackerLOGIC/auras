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

  // 图片加载优化：首图由 <link rel="preload"> 高优先级加载；
  // 第二张在首屏稳定后立即预热，其余按 700ms 间隔错峰预热，避免 8 张原图同时抢带宽造成白屏。
  function bgUrl(slide) {
    var bg = (slide && slide.style.backgroundImage) || '';
    var m = bg.match(/url\(['"]?([^'")]+)['"]?\)/);
    return m ? m[1] : '';
  }
  function preloadImage(src) {
    if (!src) return;
    var img = new Image();
    img.decoding = 'async';
    img.src = src;
  }
  function preload() {
    preloadImage(bgUrl(slides[1]));
    slides.slice(2).forEach(function (s, i) {
      window.setTimeout(function () { preloadImage(bgUrl(s)); }, 700 * (i + 1));
    });
  }
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(preload, { timeout: 2000 });
  } else {
    window.setTimeout(preload, 900);
  }

  start();
})();

/* AURAS UI motion engine v2 - shared by all 10 websites */
/* Provides 8+ animation types: reveal on scroll, navbar scroll state, */
/* hero Ken Burns, count-up numbers, card hover, button micro-interaction, */
/* staggered list entrance, back-to-top. Motion tuned per theme via CSS. */
(function () {
  'use strict';
  var REDUCED = false;
  try { REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  // ---------- 1) Reveal on scroll (IntersectionObserver) ----------
  var REVEAL_SELECTORS = '.card, .row, .stat-box, .section-title, .section-sub, .eyebrow, .tl-item, .img-frame, .img-row img, .check-list li, .form-grid, .news-item, .gallery-item, .tag, .badge, .subtitle';

  function tagReveal() {
    var els = document.querySelectorAll(REVEAL_SELECTORS);
    for (var i = 0; i < els.length; i++) {
      if (!els[i].classList.contains('reveal')) els[i].classList.add('reveal');
    }
    // staggered entrance for grid / rows / lists
    var lists = document.querySelectorAll('.grid, .stat-row, .timeline, .img-row, .check-list, .footer-grid');
    for (i = 0; i < lists.length; i++) {
      var kids = lists[i].children;
      for (var k = 0; k < kids.length; k++) {
        if (kids[k].classList && !kids[k].classList.contains('reveal')) {
          kids[k].classList.add('reveal');
          kids[k].style.transitionDelay = Math.min(k * 70, 420) + 'ms';
        }
      }
    }
  }
  tagReveal();

  if (!REDUCED && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('in');
          io.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // ---------- 2) Navbar state on scroll ----------
  var nav = document.querySelector('.navbar');
  function onScrollNav() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  // ---------- 3) Count-up animation ----------
  function animateCount(el) {
    var raw = (el.getAttribute('data-count') || el.textContent).replace(/[^0-9.]/g, '');
    var target = parseFloat(raw);
    if (isNaN(target)) return;
    var suffix = el.textContent.replace(/[\d.,\s]/g, '');
    var dur = 1500;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + suffix;
    }
    requestAnimationFrame(step);
  }
  if (!REDUCED) {
    var countEls = document.querySelectorAll('.stat-box .num, .count-up');
    if (countEls.length && 'IntersectionObserver' in window) {
      var cio = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            animateCount(entries[i].target);
            cio.unobserve(entries[i].target);
          }
        }
      }, { threshold: 0.6 });
      countEls.forEach(function (el) { cio.observe(el); });
    } else if (countEls.length) {
      countEls.forEach(function (el) { el.textContent = (parseFloat(el.textContent.replace(/[^0-9.]/g, '')) || 0).toLocaleString() + el.textContent.replace(/[\d.,\s]/g, ''); });
    }
  }

  // ---------- 4) Back to top ----------
  var btn = document.createElement('button');
  btn.id = 'backTop';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '&#8593;';
  btn.style.cssText = 'position:fixed;right:26px;bottom:26px;z-index:420;width:46px;height:46px;border-radius:50%;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .3s ease, transform .3s ease, box-shadow .3s ease;display:flex;align-items:center;justify-content:center;font-size:20px;line-height:1;border:none;';
  document.body.appendChild(btn);
  function onScrollBtn() {
    var show = window.scrollY > 300;
    btn.style.opacity = show ? '1' : '0';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }
  window.addEventListener('scroll', onScrollBtn, { passive: true });
  onScrollBtn();
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
  });

  // ---------- 5) Subtle parallax for elements marked with data-parallax ----------
  if (!REDUCED) {
    var par = document.querySelectorAll('[data-parallax]');
    if (par.length) {
      var ticking = false;
      function updatePar() {
        var sy = window.scrollY;
        for (var i = 0; i < par.length; i++) {
          var speed = parseFloat(par[i].getAttribute('data-parallax')) || 0.25;
          var rect = par[i].getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            par[i].style.transform = 'translateY(' + (sy * speed) + 'px)';
          }
        }
        ticking = false;
      }
      window.addEventListener('scroll', function () {
        if (!ticking) { ticking = true; requestAnimationFrame(updatePar); }
      }, { passive: true });
      updatePar();
    }
  }
})();

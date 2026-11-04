/* ============================================================
   AURAS Website - Faux Page Loader (index/404)
   White splash, centered logo, short grey loading bar, fade out.
   SEO-safe: loader markup carries no page content; aria-hidden.
   ============================================================ */
(function () {
  'use strict';
  var loader = document.getElementById('aurasLoader');
  if (!loader) return;
  if (window.AURAS_LOADER_DONE) return; // re-entry guard
  window.AURAS_LOADER_DONE = true;

  var MIN_SHOW_MS = 900;   // keep splash visible briefly for effect
  var FADE_MS = 380;

  function hideLoader() {
    if (loader.dataset.done) return;
    loader.dataset.done = '1';
    loader.classList.add('auras-loader-done');
    document.body.classList.remove('auras-lock');
    window.setTimeout(function () {
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    }, FADE_MS + 50);
  }

  function finish() {
    var t0 = Date.now();
    var wait = Math.max(0, MIN_SHOW_MS - (Date.now() - (loader.dataset.start || Date.now())));
    window.setTimeout(hideLoader, wait);
  }

  // Respect reduced motion: skip animation entirely.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    loader.style.display = 'none';
    return;
  }

  loader.dataset.start = Date.now();
  document.body.classList.add('auras-lock'); // prevent scroll behind splash

  // Fade out once the page is fully loaded (or after a hard cap).
  var capped = false;
  var capTimer = window.setTimeout(function () { capped = true; finish(); }, 2500);
  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', function () {
      if (!capped) finish();
    });
  }
})();

(function(){
  if (window.AURAS_PREMIUM) return; window.AURAS_PREMIUM = true;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) document.documentElement.classList.add('auras-no-motion');
  function onReady(fn){ if(document.readyState!=='loading'){fn();} else {document.addEventListener('DOMContentLoaded', fn);} }
  onReady(function(){
    var body = document.body;
    if (/admin/i.test(location.pathname || '')) return;
    body.classList.add('auras-ready');
    var navs = document.querySelectorAll('.side,.masthead,.nav-top,.nav-float,.nav-in,.nav-radial,.nav-mini,.nav-split,.nav-market,.topline,.fullmenu,.navbar,nav');
    var ticking = false;
    function onScroll(){
      if (ticking) return; ticking = true;
      requestAnimationFrame(function(){
        ticking = false;
        var s = window.scrollY || document.documentElement.scrollTop || 0;
        for (var i=0;i<navs.length;i++) navs[i].classList.toggle('auras-scrolled', s > 30);
      });
    }
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
    var targets = document.querySelectorAll('main section, main .section, main article, .hero, .page-banner, [class*="banner"]');
    function revealAll(){ for (var i=0;i<targets.length;i++){ targets[i].classList.add('in'); } }
    if ('IntersectionObserver' in window && !reduce){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if (!en.isIntersecting) return;
          var el = en.target; el.classList.add('in');
          var kids = el.querySelectorAll('.card, article, .grid-4 > *, .alt-row > *, .news-grid > *, .grid > *');
          for (var i=0;i<kids.length;i++) kids[i].style.setProperty('--d', Math.min(i*55, 380)+'ms');
          io.unobserve(el);
        });
      }, {threshold:.10, rootMargin:'0px 0px -36px 0px'});
      for (var i=0;i<targets.length;i++){ targets[i].classList.add('auras-reveal'); io.observe(targets[i]); }
    } else { revealAll(); }
    var hero = document.querySelector('.hero, [class*="hero"]');
    if (hero && window.matchMedia && matchMedia('(pointer:fine)').matches && !reduce){
      var spot = document.createElement('span');
      spot.className = 'auras-spot';
      hero.appendChild(spot);
      var raf = null;
      hero.addEventListener('mousemove', function(e){
        if (raf) return; raf = requestAnimationFrame(function(){
          raf = null;
          var r = hero.getBoundingClientRect();
          hero.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
          hero.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
        });
      });
    }
  });
})();

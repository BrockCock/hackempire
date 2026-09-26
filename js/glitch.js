/* ============================================================
   hack.empire — glitch.js
   ============================================================ */
(function () {
  "use strict";

  var els = document.querySelectorAll(".glitch");
  if (!els.length) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  function tick() {
    els.forEach(function (el) {
      var x = (Math.random() * 4 - 2).toFixed(2);
      var y = (Math.random() * 2 - 1).toFixed(2);
      el.style.setProperty("--gx", x + "px");
      el.style.setProperty("--gy", y + "px");
    });
    window.setTimeout(tick, 1800 + Math.random() * 2600);
  }
  tick();
})();
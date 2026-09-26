/* ============================================================
   hack.empire — faq.js
   ============================================================ */
(function () {
  "use strict";

  var items = document.querySelectorAll(".faq__item");
  if (!items.length) return;

  items.forEach(function (item) {
    var q = item.querySelector(".faq__q");
    if (!q) return;
    q.setAttribute("aria-expanded", "false");

    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      items.forEach(function (other) {
        other.classList.remove("is-open");
        var oq = other.querySelector(".faq__q");
        if (oq) oq.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        q.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
!function(){var e,t,o,n;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelectorAll(".js-close-menu"),n=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",n),o.forEach((function(e){return e.addEventListener("click",n)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),function(){var e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.forEach((function(e){return e.addEventListener("click",t)})),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openAboutBtn:document.querySelector("[data-about-open]"),closeAboutBtn:document.querySelector("[data-about-close]"),about:document.querySelector("[data-about]"),body:document.querySelector("body")};function t(){e.about.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openAboutBtn.addEventListener("click",t),e.closeAboutBtn.addEventListener("click",t)}(),function(){var e={openMapBtn:document.querySelector("[data-map-open]"),closeMapBtn:document.querySelector("[data-map-close]"),map:document.querySelector("[data-map]"),body:document.querySelector("body")};function t(){e.map.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMapBtn.addEventListener("click",t),e.closeMapBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=index.88faa33f.js.map
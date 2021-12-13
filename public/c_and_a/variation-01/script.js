// load core and global js
// @prepros-prepend "../global/global.js";
// @codekit-prepend "../global/global.js";

/**
 * WATO.elem             ==> Polling auf ein Element
 * WATO.initObserver     ==> Initialisierung des MutationObservers
 * WATO.observer         ==> DOM Element dem Observer hinzufügen
 * WATO.qs                 ==> Kurzform für document.querySelector
 * WATO.qsa             ==> Kurzform für document.querySelectorAll
 * WATO.ready             ==> Wartet auf document.ready
 * WATO.classlist         ==> Fügt mehrere Klassen einem Element hinzu oder entfernt sie
 * WATO.ajax             ==> Überprüfung auf Ajax-Aktivitäten auf der Seite ?
 * WATO.getCookie         ==> Ließt einen Cookie aus
 * WATO.setCookie         ==> Fügt einen Cookie hinzu
 * WATO.removeCookie     ==> Entfernt einen Cookie
 * WATO.exclude         ==> Punchout-Funktion
 * WATO.storageAvailable ==> Überprüft ob der LocalStorage verfügbar ist
 * WATO.reload           ==> Führt einen Reload aus (löscht dabei den #hash, als Workaround für manche Browser)
 * WATO.offsetY          ==> Gibt die Y-Position eines Elements zurück
 * WATO.scrollTo         ==> Scrollt bis zum Übergebenen Pixel (von oben)
 * WATO.event            ==> EventListener setzen
 * WATO.xhr_get          ==> Ajax GET Request
 * WATO.xhr_post          ==> Ajax POST Request
 */

/**
 * @function
 * @author Ahmed Makni
 * @namespace V1
 * @name Variation 01
 * @description
 */
(function (WATO) {
  "use strict";
  // -------------------------FUNCTIONS-------------------

  if (window.location.search.substring(1, 11) === "categoryId") {
    WATO.elem(".product-stage", (parentNode) => {
      document.querySelector("main section .container").insertAdjacentHTML(
        "beforeend",
        `<div class='d-flex product-stage mz-is-initialized'>
          ${parentNode[0].innerHTML}
         </div>`
      );
    });
  }
})(new window.WATO());

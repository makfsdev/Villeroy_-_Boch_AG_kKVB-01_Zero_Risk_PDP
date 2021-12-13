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

  console.log(WATO);

  // WATO.qs(".km-header__bar").style["background-color"] = "black";

  // const phoneList = WATO.qsa(".site-km__start-offer-box .row .small-12");
  // console.log(phoneList);

  // const testElem = (res) => {
  //   console.log(res);
  // };
  // const testReady = (res) => {
  //   console.log(res.target);
  // };

  // WATO.elem(".km-header__bar", testElem);

  // WATO.ready(WATO.elem(".km-header__bar", testElem));

  // WATO.ajax("https://www.klarmobil.de/shop/cart/minicart/link", testElem);??????????????????????????????

  // WATO.qs(".km-header__bar").style["background-color"] =
  //   "#e42b29";
  // // -------------------------------------
  // const promo = document
  //   .querySelector(".site-km__start-section-offer .row")
  //   .cloneNode("true");

  // document
  //   .querySelector(".site-km__start-social-box")
  //   .insertAdjacentElement("afterend", promo);
  // WATO.qs(".site-km__start-section-offer .row").remove();
  // // ------------------------------------
  // WATO.qs(".km-stage-campaign__image-wrapper").remove();
  // // ------------------------------------
  // const rowImg = document
  //   .querySelector(".site-km__start-section-teaser")
  //   .children[1].cloneNode("true");
  // console.log(rowImg);
  // WATO.qs(".site-km__start-section-teaser").append(rowImg);
  /* 
  1-change fontsize ,color of banner info.
  2-add icon and text for kk-uvps.
  3-change logo position to the right
  4-add login item for nav menu
  5-add hover effect for box2 ,all boxes
  */

  // 1
  // WATO.qs(".info-banner span").style["font-size"] = "1.5rem";
  // WATO.qs(".info-banner span").style["color"] = "#64a70b";
  // WATO.qs(".info-banner span span").style["font-size"] =
  //   "1.5rem";
  // WATO.qs(".info-banner span span").style["color"] = "#f67d17";

  // 2
  // const ico = WATO.qs("body .pushmenu-wrapper .kk-uvps .row");
  // console.log(ico);
  // const newIcon = icon.cloneNode("true");
  // console.log(newIcon);

  // 3
  // WATO.qs(".km-header__topmenu-wrapper").style["position"] =
  //   "relative";
  // WATO.qs(".km-header__inner-content").style["flex-direction"] =
  //   "row-reverse";

  // 4
  // const login = document
  //   .querySelector(".js-kmheader-business")
  //   .cloneNode("true");
  // login.querySelector("a").textContent = "Login";
  // // console.log(login.textContent);
  // WATO.qs(".km-header__primary-nav").append(login);
  // WATO.qs(".js-kmheader-business a").style["font-size"] =
  //   "1.2rem";

  // 5
  // WATO.event(WATO.qs(".js-offer-box2"), "mouseover", () => {
  //   WATO.qs(".js-offer-box2").style["transform"] = "scale(1.1)";
  //   WATO.qs(".js-offer-box2").style["z-index"] = "1";
  // });
  // WATO.event(WATO.qs(".js-offer-box2"), "mouseout", () => {
  //   WATO.qs(".js-offer-box2").style["transform"] = "none";
  // });

  const boxes = Array.from(
    WATO.qsa(".site-km__start-offer-box .row .site-km__offer-box-item")
  );
  boxes.forEach((box) => {
    WATO.event(box, "mouseover", () => {
      box.style["transform"] = "scale(1.05)";
      box.style["z-index"] = "1";
    });
  });
  boxes.forEach((box) => {
    WATO.event(box, "mouseout", () => {
      box.style["transform"] = "none";
    });
  });

  //--------------------------------------------------------
  //fetch data

  // https://www.klarmobil.de/handys-tablets/handys-mit-vertrag/

  // WATO.xhr_get(
  //   "https://www.klarmobil.de/handys-tablets/handys-mit-vertrag/",
  //   function (res) {
  //     console.log(typeof res);
  //   }
  // );
  // WATO.ajax("minicart/rollover", function () {
  //   console.log("ajax");
  // });

  // fetch("https://www.klarmobil.de/handys-tablets/handys-mit-vertrag/")
  //   .then(function (response) {
  //     // When the page is loaded convert it to text
  //     return response.text();
  //   })

  //   .then(function (html) {
  //     // Initialize the DOM parser
  //     let parser = new DOMParser();

  //     // Parse the text
  //     let doc = parser.parseFromString(html, "text/html");

  //     // You can now even select part of that html as you would in the regular DOM

  //     const menu = doc.querySelector(".pushmenu-wrapper .main-content");
  //     const phoneList = menu.querySelectorAll(".wrapper-content .row .large-6");
  //     console.log(Array.from(phoneList));

  //     // const newContainer = document.createElement("div");
  //     // newContainer.className = "row";
  //     // newContainer.insertAdjacentHTML(
  //     //   "afterbegin",
  //     //   `
  //     // <div class="container">
  //     //   <div class="flex-wrapper">
  //     //     <div class="pic">
  //     //       <a>
  //     //         <img />
  //     //       </a>
  //     //     </div>
  //     //     <div class="infos"><p>hello</p></div>
  //     //   </div>
  //     // </div>`
  //     // );
  //     // console.log(newContainer);
  //     // document
  //     //   .querySelector(".main-content .wrapper-content")
  //     //   .insertAdjacentElement("afterbegin", newContainer);

  //     const newContainer = document.createElement("div");
  //     newContainer.className = "row";
  //     Array.from(phoneList).forEach((phone) => {
  //       newContainer.insertAdjacentHTML(
  //         "afterbegin",
  //         `
  //       <div class="flex-container">
  //         <div class="flex-wrapper">
  //           <div class="pic">
  //             <a>
  //               <img />
  //             </a>
  //           </div>
  //           <div class="infos"><p></p></div>
  //         </div>
  //       </div>`
  //       );

  //       // console.log(newContainer);

  //       const fetchedImg = phone.querySelector("a img");
  //       newContainer.querySelector(".pic a img").src = fetchedImg.src;
  //       document
  //         .querySelector(".main-content .wrapper-content")
  //         .insertAdjacentElement("afterbegin", newContainer);

  //       // const newImg = document.createElement("a");
  //       // const container = document.createElement("div");
  //       // container.className = "container";
  //       // newImg.appendChild(fetchedImg);
  //       // container.appendChild(newImg);
  //       // document
  //       //   .querySelector(".main-content .wrapper-content")
  //       //   .insertAdjacentElement("afterbegin", phone);
  //     });

  //     // -----------------------------------------------------------
  //   })
  //   .catch(function (err) {
  //     console.log("Failed to fetch page: ", err);
  //   });
})(new window.WATO());

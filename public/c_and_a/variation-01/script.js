// load core and global js
// @prepros-prepend "../global/global.js";
// @codekit-prepend "../global/global.js";

/**
 * @function
 * @author Ahmed Makni
 * @namespace V1
 * @name Variation 01
 * @description
 */
(function (WATO) {
  "use strict";
  // -----------------------Vars--------------------------------------
  const slider = (hrefs, imgs, prices) => {
    return `<div class="col-xs-12 col-lg-8">
        <div>
            <div>
                <div>
                    <span class="util-h3 util-block reco-heading recommendation-all-link">
                        <span>Noch etwas aus deiner Wunschliste?</span>
                    </span>
                    <div class="row util-reset-margin-bottom">
                        <div class="col-xs-12">
                            <div class="swiper-slider util-reset-margin-top">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                    ${imgs
                                      .map((url, i) => {
                                        return `
                                        <div class="swiper-slide">
                                            <div class="product-tile product-tile--minimal">
                                                <a href="${hrefs[i]}">
                                                    <div class="product-tile__img-wrapper">
                                                        <div class="product-tile__img-overlay"></div>
                                                        <picture>
                                                            <img class="lazyload lazyload--fade product-tile__base-image lazyloaded" src="${url}" srcset="${url}"/>
                                                        </picture>
                                                        <span class="product-tile__quickwish is-active"></span>
                                                    </div>
                                                    <div class="product-tile__price">
                                                        <span> ${prices[i]} </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>`;
                                      })
                                      .join(" ")}
                                    </div>
                                    <div class="swiper-scrollbar"></div>
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class='util-block recommendation-all-link' href="https://www.c-and-a.com/de/de/shop/wishlist">Zu allen Artikeln auf der Wunschliste</a>
    </div>    
    `;
  };
  // -----------------------Code------------------------------------
  if (location.pathname === "/de/de/shop/basket") {
    fetch("https://www.c-and-a.com/de/de/shop/wishlist")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");

        // ----------------------------vars-----------------------------//
        if (doc.body) {
          const wishListItems = WATO.qsa(".wishlist__list .col-xs-12", doc);
          const availableProducts = [];
          const imgs = [];
          const hrefs = [];
          const prices = [];
          wishListItems.forEach((product) => {
            const checkProduct = WATO.qs(".product-tile__add-to-cart span", product);
            if (checkProduct.textContent === "In den Warenkorb") {
              availableProducts.push(product);
            }
          });
          if (availableProducts.length) {
            WATO.elem(".recommendation", (section) => {
              section[0].style.display = "none";
            });
            WATO.elem(".basket__minibasket-wrapper", (parent) => {
              if (parent) {
                availableProducts.forEach((product) => {
                  imgs.push(WATO.qs(".product-tile__img-wrapper picture img", product).dataset["src"]);
                  hrefs.push(WATO.qs(".product-tile a", product).href);
                  prices.push(WATO.qs(".product-tile__price span", product).textContent);
                });
                parent[0].insertAdjacentHTML("afterend", slider(hrefs, imgs, prices));
              }
            });
          }
        }
        // ----------------------------vars-----------------------------//
      })
      .catch(function (err) {
        console.log("Failed to fetch page: ", err);
      });
  }
})(new window.WATO());

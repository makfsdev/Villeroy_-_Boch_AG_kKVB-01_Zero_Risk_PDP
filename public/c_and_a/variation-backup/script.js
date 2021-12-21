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
    //---------------------------VAR-------------------
    const wishListItem = (containerAttributes, srcImg, title, price, selectOpt) => {
        return `
    <div class='kk-wish-list-item-container' ${containerAttributes.join(" ")}>
    <div class='kk-wish-list-img'>
    <img src=${srcImg} alt="product-img"/>
    <span></span>
    </div>
    <div class='kk-wish-list-info'>
    <p>${title}</br>
    <b>${price}</b></p>
    <select>
    <option value="" selected data-dy-size="">Größe wählen</option>
        ${selectOpt}
    </select>
    <div class='kk-btn'>
    <button>In den Warenkorb</button>
     </div>
    </div>
    </div>
    `;
    };
    // // -------------------------FUNCTIONS-------------------
    // //----------------------------------------------------
    // WATO.elem(".recommendation", (res) => {
    //     if ((res[0].attributes["data-module"] = "basketpage")) {
    //         res[0].style.display = "none";
    //     }
    // });
    if (window.location.pathname.match("/shop/basket")) {
        fetch("https://www.c-and-a.com/de/de/shop/wishlist")
            .then(function (response) {
                return response.text();
            })
            .then(function (html) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, "text/html");
                // ----------------------------Mobile---------------------------------
                if (window.screen.width < 640) {
                    WATO.elem(
                        function () {
                            return typeof WATO.qs(".product-tile", doc) !== "undefined";
                        },
                        (loaded) => {
                            if (loaded) {
                                const wishListProducts = WATO.qsa(".product-tile", doc);
                                const availabeProducts = [];
                                const checkAvailable = WATO.qsa(".product-tile button span", doc);
                                wishListProducts.forEach((product, index) => {
                                    if (checkAvailable[index].textContent === "In den Warenkorb") {
                                        availabeProducts.push(product);
                                    } else {
                                        WATO.elem(".swiper-slide", (products) => {
                                            if (products.length > availabeProducts.length) {
                                                products[products.length - 1].remove();
                                            }
                                        });
                                    }
                                });
                                // ---------------------------------------------------------//
                                if (availabeProducts.length === 0) {
                                    WATO.elem(".recommendation", (products) => {
                                        products[0].style.display = "none";
                                    });
                                } else {
                                    const srcImgs = WATO.qsa(".product-tile__img-wrapper picture img", doc);
                                    WATO.elem(".product-tile__img-wrapper picture img", (imgs) => {
                                        imgs.forEach((img, index) => {
                                            img.attributes["data-srcset"].value = srcImgs[index].attributes["data-srcset"].value;
                                        });
                                    });
                                    const sourceImgs = WATO.qsa(".product-tile__img-wrapper picture source", doc);
                                    WATO.elem(".product-tile__img-wrapper picture source", (sources) => {
                                        sources.forEach((source, index) => {
                                            source.attributes["data-srcset"].value = sourceImgs[index].attributes["data-srcset"].value;
                                        });
                                    });
                                    const hrefImgs = WATO.qsa(".product-tile a", doc);
                                    WATO.elem(".product-tile a", (links) => {
                                        links.forEach((link, index) => {
                                            link.href = hrefImgs[index].href;
                                        });
                                    });
                                    WATO.elem(".product-tile__price--old", (prices) => {
                                        prices.forEach((price) => {
                                            price.style.display = "none";
                                        });
                                    });
                                    // -----------------------------------------------------------------
                                    WATO.elem(".product-tile__img-wrapper", (imgs) => {
                                        imgs.forEach((img) => {
                                            img.insertAdjacentHTML("beforeend", `<span class="product-tile__quickwish is-active"></span>`);
                                        });
                                    });
                                    WATO.elem(".util-h3 span", (spans) => {
                                        spans[0].textContent = "Noch etwas aus deiner Wunschliste?";
                                    });
                                    WATO.elem(".util-reset-margin-top", (swiper) => {
                                        swiper[0].insertAdjacentHTML(
                                            "beforeend",
                                            `<a href='https://www.c-and-a.com/de/de/shop/wishlist' class="util-icon">
                                  <span>
                                  Zu allen Artikeln auf der Wunschliste
                                  </span>
                                </a>`
                                        );
                                    });
                                }

                                // const wishListProducts = WATO.qsa(".product-tile", doc);
                                // const availabeProducts = [];
                                // const checkAvailable = WATO.qsa(".product-tile button span", doc);

                                // wishListProducts.forEach((product, index) => {
                                //     if (checkAvailable[index].textContent === "In den Warenkorb") {
                                //         availabeProducts.push(product);
                                //     } else {
                                //         WATO.elem(".swiper-slide", (products) => {
                                //             if (products.length > availabeProducts.length) {
                                //                 products[products.length - 1].remove();
                                //             }
                                //         });
                                //     }
                                // });
                                // console.log(availabeProducts);
                                // // ---------------------------------------------------------
                                // if (availabeProducts.length === 0) {
                                //     WATO.elem(".recommendation", (products) => {
                                //         products[0].style.display = "none";
                                //     });
                                // } else {
                                //     const srcImgs = WATO.qsa(".product-tile__img-wrapper picture img", doc);
                                //     srcImgs.forEach((img, index) => {
                                //         img.attributes["data-srcset"].value = srcImgs[index].attributes["data-srcset"].value;
                                //     });

                                //     // WATO.elem(
                                //     //     function () {
                                //     //         return typeof WATO.qsa(".product-tile__img-wrapper picture img", doc) !== "undefined";
                                //     //     },
                                //     //     (loaded) => {
                                //     //         if (loaded) {
                                //     //             const srcImgs = WATO.qsa(".product-tile__img-wrapper picture img", doc);
                                //     //             srcImgs.forEach((img, index) => {
                                //     //                 img.attributes["data-srcset"].value = srcImgs[index].attributes["data-srcset"].value;
                                //     //             });
                                //     //         }
                                //     //     }
                                //     // );
                                //     const sourceImgs = WATO.qsa(".product-tile__img-wrapper picture source", doc);

                                //     sourceImgs.forEach((source, index) => {
                                //         source.attributes["data-srcset"].value = sourceImgs[index].attributes["data-srcset"].value;
                                //     });

                                //     // WATO.elem(
                                //     //     function () {
                                //     //         return typeof WATO.qsa(".product-tile__img-wrapper picture source", doc) !== "undefined";
                                //     //     },
                                //     //     (loaded) => {
                                //     //         if (loaded) {
                                //     //             const sourceImgs = WATO.qsa(".product-tile__img-wrapper picture source", doc);

                                //     //             sourceImgs.forEach((source, index) => {
                                //     //                 source.attributes["data-srcset"].value = sourceImgs[index].attributes["data-srcset"].value;
                                //     //             });
                                //     //         }
                                //     //     }
                                //     // );
                                //     const hrefImgs = WATO.qsa(".product-tile a", doc);
                                //     hrefImgs.forEach((link, index) => {
                                //         link.href = hrefImgs[index].href;
                                //     });

                                //     // WATO.elem(
                                //     //     function () {
                                //     //         return typeof WATO.qsa(".product-tile__img-wrapper picture source", doc) !== "undefined";
                                //     //     },
                                //     //     (loaded) => {
                                //     //         if (loaded) {
                                //     //             const hrefImgs = WATO.qsa(".product-tile a", doc);
                                //     //             hrefImgs.forEach((link, index) => {
                                //     //                 link.href = hrefImgs[index].href;
                                //     //             });
                                //     //         }
                                //     //     }
                                //     // );
                                //     WATO.elem(".product-tile__price--old", (prices) => {
                                //         prices.forEach((price) => {
                                //             price.style.display = "none";
                                //         });
                                //     });
                                //     // -----------------------------------------------------------------
                                //     WATO.elem(".product-tile__img-wrapper", (imgs) => {
                                //         imgs.forEach((img) => {
                                //             img.insertAdjacentHTML("beforeend", `<span class="product-tile__quickwish is-active"></span>`);
                                //         });
                                //     });
                                //     WATO.elem(".util-h3 span", (spans) => {
                                //         spans[0].textContent = "Noch etwas aus deiner Wunschliste?";
                                //     });
                                //     WATO.elem(".util-reset-margin-top", (swiper) => {
                                //         swiper[0].insertAdjacentHTML(
                                //             "beforeend",
                                //             `<a href='https://www.c-and-a.com/de/de/shop/wishlist' class="util-icon">
                                //                 <span>
                                //                 Zu allen Artikeln auf der Wunschliste
                                //                 </span>
                                //                 </a>`
                                //         );
                                //     });
                                // }
                            }
                        }
                    );
                } else {
                    // --------------------------------------Desktop-------------------------
                    WATO.elem("section", (res) => {
                        const container = res[0].lastElementChild;
                        container.style.display = "none";
                        const oldWishList = WATO.qsa(".wishlist__list .col-xs-12", doc);
                        const newWishList = [];
                        Array.from(oldWishList).map((product) => {
                            if (product.querySelector(".product-tile__add-to-cart span").textContent !== "Ausverkauft" && newWishList.length < 2) {
                                newWishList.push(product);
                            }
                        });
                        document.querySelector(".container").insertAdjacentHTML(
                            "beforeend",
                            `<h3>Noch etwas aus deiner Wunschliste?</h3>
                                <div class='kk-wish-list-item-wrapper row'>
                                </div>
                            <a href="https://www.c-and-a.com/de/de/shop/wishlist">
                            Zu allen Artikeln auf der Wunschliste</a>`
                        );
                        newWishList.map((el) => {
                            const attributes = WATO.qs(".product-tile", el).attributes;
                            const dataAttr = [];
                            for (var i = 0; i < attributes.length; i++) {
                                dataAttr.push(`${attributes[i].name}=${attributes[i].nodeValue}`);
                            }
                            const img = WATO.qs(".product-tile__img-wrapper picture img", el);
                            const title = WATO.qs(".product-tile a p", el);
                            const price = WATO.qs(".product-tile__price span", el);
                            const select = WATO.qs(".product-tile__size-option", el);
                            WATO.qs(".container .kk-wish-list-item-wrapper").insertAdjacentHTML(
                                "beforeend",
                                wishListItem(dataAttr, img.attributes["data-src"].nodeValue, title.textContent, price.textContent, select.innerHTML.replace('selected="" ', ""))
                            );
                        });
                    });
                    var btnSize = WATO.qsa(".kk-wish-list-info select");
                    var size;
                    btnSize.forEach((btn) => {
                        btn.addEventListener("change", (e) => {
                            size = e.target.value;
                        });
                    });

                    const btnAddToCart = WATO.qsa(".kk-btn button");
                    const color = WATO.qsa(".color-list li", doc);
                    btnAddToCart.forEach((btn, index) => {
                        btn.setAttribute("data-color", color[index].attributes["data-color"].nodeValue);
                        btn.addEventListener("click", () => {
                            if (!size) {
                                btn.style.color = "red";
                            } else {
                                fetch("https://www.c-and-a.com/webapp/wcs/stores/servlet/ajax/wishlist/addToBasket?storeId=10154&langId=-3", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                    body: `pageType=Wishlist&wishlistItemId=131689901&colorId=${btn.attributes["data-color"].nodeValue}&productSize=${size}`,
                                }).then(function (res) {
                                    console.log(res.json());
                                });
                                location.reload();
                            }
                        });
                    });
                }
            })
            .catch(function (err) {
                console.log("Failed to fetch page: ", err);
            });
    }
})(new window.WATO());

// Capitan.Component.wishlist.methods.delete(jQuery($0)),

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

    // --------------FUNCTIONS---------------
    const blueInfoBox = (classeContainer, classContent, img, title, lightText, boldText) => {
        return (
          "<div class='" + classeContainer + "'> <div class=' " + (classContent ? classContent : "kk-blue-info-box-content") +
          "'> <img src=\"//localhost:9001/Villeroy_&_Boch_AG_kKVB-01_Zero_Risk_PDP/assets/" + img + '.png" alt=""> <p><b>' +
          title + "</b></br> " + lightText + " <b>" + boldText + "</b>.</p> </div> </div>"
        );
    };
    const insertBlueInfoBox = (selector) => {
        WATO.elem(selector, (parentNode) =>
            parentNode[0].insertAdjacentHTML(
                "beforeend",
                blueInfoBox(
                    "kk-blue-info-box",
                    "",
                    "Colis",
                    "Noch unsicher?",
                    `Bei uns können Sie entspannt zuhause entscheiden. Und falls mal etwas nicht gefällt:</br>
           Nutzen Sie einfach unseren `,
                    "kostenlosen Rücksendeservice"
                )
            )
        );
    };
    const checkActiveUrl = (isUrl) => {
        if (isUrl) {
            WATO.elem(".row .checkout-steps", (parentNode) =>
                parentNode[0].insertAdjacentHTML(
                    "beforeend",
                    blueInfoBox(
                        "kk-blue-info-box",
                        "",
                        "Colis",
                        "Bei uns kaufen Sie ohne Risiko",
                        "Bei uns können Sie entspannt zuhause entscheiden. Und falls mal etwas nicht gefällt:</br> Nutzen Sie einfach unseren",
                        "kostenlosen Rücksendeservice"
                    )
                )
            );
            const blueBoxInfo = WATO.qs(".kk-blue-info-box");
            const btnEditPayment = WATO.qs(".checkout-stage-holder .js-edit-payment");
            if (blueBoxInfo && btnEditPayment) {
                WATO.event(
                    WATO.qs(".checkout-stage-holder .js-edit-shipping-address"),
                    "click",
                    () => {
                        if (window.location.hash !== "#placeOrder" && blueBoxInfo) {
                            blueBoxInfo.remove();
                        }
                    }
                );
            }
            if (blueBoxInfo) {
                WATO.event(window, "popstate", function () {
                    blueBoxInfo.remove();
                });

                WATO.event(btnEditPayment, "click", () => {
                    if (window.location.hash !== "#placeOrder" && blueBoxInfo) {
                        blueBoxInfo.remove();
                    }
                });
            }
        }
    }
    // -----------------------------SENARIO------------------------------
    // -----------------blueInfoBox+triangle @ p-pdp-------------------
    if (document.body && document.body.classList.contains("p-pdp")) {
        WATO.elem(".js-add-to-cart-container", (parentNode) =>
            parentNode[0].insertAdjacentHTML(
                "beforeend",
                blueInfoBox(
                    "col-12 kk-blue-tool-box-container",
                    "kk-blue-tool-box",
                    "Colis",
                    "Entspannt zuhause entscheiden.",
                    "Bei uns kaufen Sie ohne Risiko. Falls mal etwas nicht gefällt:</br>\
                    Nutzen Sie einfach unseren",
                    "kostenlosen Rücksendeservice"
                )
            )
        );

        // --------------------whiteInfoBox @ p-pdp-------------------
        WATO.elem(".vb-brand .row .pdp-table-details", (parentNode) => {
            parentNode[0].firstElementChild.insertAdjacentHTML(
                "beforebegin",
                "<div class='kk-white-info-box-container'>\
          <div class='kk-white-info-box'>\
            <img src='//localhost:9001/Villeroy_&_Boch_AG_kKVB-01_Zero_Risk_PDP/assets/Gift.png'>\
            <p> <b>Sicher & mit Sorgfalt verpackt</b></br>\
              Jedes Stück wird von unseren geschulten Verpackungsexperten für Sie von Hand verpackt,\
              damit Ihre Bestellung sicher und unbeschadet bei Ihnen ankommt.</p>\
          </div>\
        </div>"
            );
        });
    }

    // -----------------blueInfoBox @ /shop/cart-------------------
    else if (window.location.pathname === "/shop/cart") {
        if (screen.width > 640) {
            insertBlueInfoBox(".js-cart-page .cart-section-footer");
        } else {
            insertBlueInfoBox(".js-gift-card-redemption-container");
        }
        // ----------------------blueInfoBox @ checkout-------------------
    } else {
        WATO.ajax("CheckoutServices-SubmitPayment", checkActiveUrl);
    }
})(new window.WATO());

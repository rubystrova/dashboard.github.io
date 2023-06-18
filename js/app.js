(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
    const tabsItem = document.querySelectorAll(".tabs__item");
    tabsBtn.forEach((function(item) {
        item.addEventListener("click", (function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);
            if (!currentBtn.classList.contains("active")) {
                tabsBtn.forEach((function(item) {
                    item.classList.remove("active");
                }));
                tabsItem.forEach((function(item) {
                    item.classList.remove("active");
                }));
                currentBtn.classList.add("active");
                currentTab.classList.add("active");
            }
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();
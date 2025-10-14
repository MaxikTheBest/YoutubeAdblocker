// ==UserScript==
// @name         GoldenAdblocker
// @namespace    https://ilomero.com/
// @version      5
// @description  Removes 99% of ads from Youtube! Completely free!
// @author       Ilomero.com
// @updateURL    https://ilomero.com/goldenadblocker/download.user.js
// @downloadURL  https://ilomero.com/goldenadblocker/download.user.js
// @match        *://m.youtube.com/*
// @match        *://www.youtube.com/*
// @match        *://youtube.com/*
// @match        *://*.wikipedia.org/*
// @icon         https://ilomero.com/goldenadblocker/favicon.ico
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    if (window.trustedTypes && window.trustedTypes.createPolicy && !window.trustedTypes.defaultPolicy) {
        window.trustedTypes.createPolicy('default', {
            createHTML: string => string,
            createScriptURL: string => string,
            createScript: string => string
        });
    }

    function GoldenAdblocker_Loading_Try(LoadingTry) {
        if (LoadingTry >= 4) {
            alert('Can’t load GoldenAdblocker! Try refreshing the page or waiting a while and then try again!');
            return;
        }

        LoadingTry++;

        fetch('https://ilomero.com/goldenadblocker/main.js')
            .then(response => response.text())
            .then(data => {
                const element = document.createElement('script');
                element.innerHTML = data;
                document.head.appendChild(element);
            })
            .catch(() => {
                setTimeout(() => {
                    GoldenAdblocker_Loading_Try(LoadingTry);
                }, 500);
            });
    }

    GoldenAdblocker_Loading_Try(0);
})();

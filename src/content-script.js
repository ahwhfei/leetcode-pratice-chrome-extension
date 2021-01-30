(function () {
    var loadExternalScript = function (scriptName) {
        var s = document.createElement('script');
        s.src = chrome.extension.getURL(scriptName);
        (document.head || document.documentElement).appendChild(s);

        // After script executed success, remove it again
        s.onload = function () {
            s.parentNode.removeChild(s);
        };
    };

    loadExternalScript('hide-element.js');
})();

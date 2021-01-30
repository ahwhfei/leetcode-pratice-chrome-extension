(function () {
    var str = 
        'div[class="^finished-container"] > :last-child {' +
        '  display: none;' +
        '}';
    var el = document.createElement('style');
    el.innerText = str;
    document.head.appendChild(el);
})();

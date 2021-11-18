document.documentElement.className = "script";

var menu = document.querySelector('.menu'),
    button = document.querySelector('.nav-toggle'),
    dropdown = document.querySelector('.dropdown');

button.onclick = function () {
    classie.toggle(menu, 'menu-active');
};


document.addEventListener('click', function (event) {
    if (event.target !== dropdown && !dropdown.contains(event.target)) {

        classie.removeClass(menu, "menu-active");
    }
});


(function (window) {

    'use strict';

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    }
    else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {

        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,

        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };


    if (typeof define === 'function' && define.amd) {

        define(classie);
    } else if (typeof exports === 'object') {

        module.exports = classie;
    } else {

        window.classie = classie;
    }

    function changebackColor() {
        document.body.style.backgroundColor = "black";
        document.getElementByID("divID").style.backgroundColor = "black";
    }


})(window);
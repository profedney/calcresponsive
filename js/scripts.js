/*!
* Start Bootstrap - Scrolling Nav v5.0.5 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts

// funcionalidade calculadora

function calcSum() {
    let num1 = document.getElementsByName("n1")[0].value;
    let number2 = document.getElementsByName("n2")[0].value;
    let sum = Number(num1) + Number(number2);
    document.getElementsByName("somado")[0].value = sum;
}

function calcSub() {
    let num1 = document.getElementsByName("n1")[0].value;
    let number2 = document.getElementsByName("n2")[0].value;
    let sum = Number(num1) - Number(number2);
    document.getElementsByName("somado")[0].value = sum;
}
function calcMul() {
    let num1 = document.getElementsByName("n1")[0].value;
    let number2 = document.getElementsByName("n2")[0].value;
    let sum = Number(num1) * Number(number2);
    document.getElementsByName("somado")[0].value = sum;
}

function calcDiv() {
    let num1 = document.getElementsByName("n1")[0].value;
    let number2 = document.getElementsByName("n2")[0].value;
    let sum = Number(num1) / Number(number2);
    document.getElementsByName("somado")[0].value = sum;
}
                        




window.addEventListener('DOMContentLoaded', event => {
    
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



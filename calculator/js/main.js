/**
 * Template.js
 * Nick Lediet
 * Jan 6th, 2017
 */
(function() { // SELF EXECUTING FUNCTION for security.

    "use strict";
    console.log('SEAF fired');

    /* Variables */
    var first = document.querySelector('#first');
    var second = document.querySelector('#second');

    var equal = document.querySelector('#equal');
    var sum = document.querySelector('#total');
    sum.innerHTML = '1232';
    /* Functios */
    function addSum(){
        var total = 0;
        total = (Number(first.value) + Number(second.value));    
        sum.innerHTML = total;
}

    /* Listener */
    equal.addEventListener('click', addSum, false);

})();
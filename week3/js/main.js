/**
 * Template.js
 * Nick Lediet
 * Jan 6th, 2017
 */
(function() { // SELF EXECUTING FUNCTION for security.

    "use strict";
    console.log('SEAF fired');

    /* Variables */
    var box1 = document.querySelector('#box1');
    var box2 = document.querySelector('#box2');
    var box3 = document.querySelector('#box3');

    var box2Size = 50;
    /* Functions */
    function changeSize(){
        checkIfSet(this);
        if(this.isSet){
            box1.style.height = 100 + 'px';
            box1.style.width = 100 + 'px';
            this.isSet = false;
        } else {
            box1.style.height = 50 + 'px';
            box1.style.width = 50 + 'px';
            this.isSet = true;
        }
    };

    function changeColor(){
        checkIfSet(this);
        if(this.isSet){
            this.style.background = "red"; // this, referes to the object that the listener is tied to
            this.isSet = false;
        } else {
            this.style.background = "#333";
            this.isSet = true;
        }
        console.dir(this);
    }
    function checkIfSet(box){
        if(!box.hasOwnProperty('isSet')){
            Object.defineProperty(box, "key", {
                isSet : true
            });
        }
        return null;
    }
    /* Listeners */
    /* var.addEventListener("event", function, capture(keep it false)) */
    box1.addEventListener("click", changeSize, false);
   /* box2.addEventListener("click", function(){
         changeColor(box2);
         return null;    
    }, false); */
    box2.addEventListener("click", changeColor, false);
    
})();
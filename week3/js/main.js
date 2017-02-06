/**
 * Template.js
 * Nick Lediet
 * Jan 6th, 2017
 */
(function() { // SELF EXECUTING FUNCTION for security.

    "use strict";
    console.log('SEAF fired');

    /* Variables */
    var marieCurie = document.querySelector('#1'); 
    var georgeMendel = document.querySelector('#2');   
    var michealFararday = document.querySelector('#3');
    var napoleonBonaparte = document.querySelector('#4');
    var alexanderGrahamBell = document.querySelector('#5');
    var abrahamLincoln = document.querySelector('#6');
    var karlMarx = document.querySelector('#7');
    var thomasEdison = document.querySelector('#8');
    var louisPasteur = document.querySelector('#9');
    var charlesDarwin = document.querySelector('#10');
    var elizabethFry = document.querySelector('#11');
    var maryKies = document.querySelector('#12');
    var maryShelly = document.querySelector('#13');
    var graceDarling = document.querySelector('#14');
    var queenVictoria = document.querySelector('#15');
    var JosephineCochrane = document.querySelector('#16');
    var gertrudeJekyl = document.querySelector('#17');
    var edmoniaLewis = document.querySelector('#18');
    var susannaSalter = document.querySelector('#19');
    var maryKingsley = document.querySelector('#20');

    /* Functions */
<<<<<<< HEAD
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
    

    function grow(){
        checkIfSet();
        console.log(this.size);
        this.size += this.size;
        this.style.height = this.size+'px';
        this.style.width = this.size+'px';
    }

    function checkIfSet(box){
        if(!box.hasOwnProperty('isSet')){
            Object.defineProperty(box, "key", {
                isSet : true,
                size : 50
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
    box3.addEventListener("click", grow, false);
=======
    
    /* Listeners */
    
>>>>>>> 673e5aefcb2d227ace196a4cd0f955a69968d878
})();
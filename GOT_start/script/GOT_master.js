// JavaScript Document
(function() {
	"use strict";
//variables
	var imgBanner = document.querySelector('#houseImages');
	var listItems = document.querySelectorAll('.sigilContainer');
	var imgOffSet = 600;

//functions
	function moveBanner() {
		console.log('fired from moveBanner()');
	}
//listeners 
	for(var i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener("click", moveBanner, false);
	}	
})();
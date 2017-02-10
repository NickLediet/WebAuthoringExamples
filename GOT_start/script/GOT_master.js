// JavaScript Document
(function() {
	"use strict";
//variables
	var imgBanner = document.querySelector('#houseImages');
	var listItems = document.querySelectorAll('.sigilContainer');
	var imgOffSet = 600;

//functions
	function moveBanner(e) {
		imgBanner.style.right = (imgOffSet * e.currentTarget.dataset.offset) + 'px';
	}
//listeners 
	for(var i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener("click", moveBanner, false);
	}	
})();
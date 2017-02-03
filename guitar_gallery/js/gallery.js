// JavaScript Document
(function() {
	"use strict";
	//Variables
	var caption = document.querySelector('#caption');
	var guitar = document.querySelector('#guitar');
	var el = document.querySelector('#galleryList');
	var links = el.querySelectorAll('a');

	console.log(links);


	//linkPop(links);

	//functions
	/* function linkPop(links){
		for(var i =0; i < (guitarList.children.length + 1); i++){
			links[i] = document.querySelector('#a'+i);
			links[i].src = "images/img"+(i+1)+'.png';
			console.log(links[i]);
		}	
} */

	//Listeners
	for(var i = 0; i < (links.length + 1 ); i++){
		links[i].src = "images/img"+(i+1)+'.png';
		links[i].addEventListener('click', function(e){
			e.preventDefault();
			guitar.src = this.src;
		}, false);
	}
})();

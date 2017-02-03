// JavaScript Document
(function() {
	"use strict";
	//Variables
	var caption = document.querySelector('#caption');
	var guitar = document.querySelector('#guitar');
	var guiatarList = document.querySelector('#gallerylist');
	var links = [];
	linkPop(links);

	//functions
	function linkPop(links){
		for(var i =0; i < 6; i++){
			links[i] = document.querySelector('#a'+i);
			links[i].src = "images/img"+(i+1)+'.png';
			console.log(links[i]);
		}	
	}

	//Listeners
	links.forEach(function(i){
		i.addEventListener('click', function(e){
			e.preventDefault();
			guitar.src = this.src;
		}, false);
	});

})();

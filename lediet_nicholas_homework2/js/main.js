// JavaScript Document
(function() {
	"use strict";
	console.log('Script fired at SEAF');

	/** TODO:
	 *  - Set ul to var and nav items to HTMLCollections
	 *  - write listeners that log out some stuff 
	 *  - function to log to console
	 */

	/* VARIABLES */
	
	var body = document.querySelector('.bg');
	var panHeight = document.querySelector('.panHeight');
	var nav = document.querySelector('.nav');
	var navEls = nav.querySelectorAll('li');

	/* FUNCTIONS */
	function logTime(e) {
		e.preventDefault();
		console.log(e.target.id);
	}

	/* LISTENERS */
	// log on loads
	body.addEventListener('load', logTime, false);
	panHeight.addEventListener('load', logTime, false);
	nav.addEventListener('load', logTime, false);

	// Listen for clicks on the nav
	for (var i = 0; i < (nav.children.length+1); i++) { 
		console.log('stuff');
		navEls[i].addEventListener('click', logTime, false);	
	}

	

})();

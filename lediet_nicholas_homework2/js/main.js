// JavaScript Document
(function() {
	
	console.log('Script fired at SEAF');

	/** TODO:
	 *  - Set ul to var and nav items to HTMLCollections
	 *  - write listeners that log out some stuff 
	 *  - function to log to console
	 */

	/* VARIABLES */
	
	var body = document.querySelector('.bg');
	var nav = document.querySelector('.nav');
	var navEls = nav.querySelectorAll('li');
	var panHeight = document.querySelectorAll('.panHeight');

	/* FUNCTIONS */

	/* LISTENERS */
	// Listen for clicks on the nav
	for (var i = 0; i < (nav.children.length+1); i++) { 
		console.log('stuff');
		navEls[i].addEventListener('click', function(e){
			e.preventDefault();	
			console.log('I am element number: ' + i);
		}, false);	
	}


})();

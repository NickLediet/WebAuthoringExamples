    var body = document.querySelector('.bg');
	var nav = document.querySelector('.nav');
	var navEls = nav.querySelectorAll('li');
	var panHeight = document.querySelectorAll('.panHeight');

    for (var i = 0; i < (nav.children.length+1); i++) { 
		console.log('stuff');
        console.log(navEls[i]);
		navEls[i].addEventListener('click', function(e){ 
        /* Honestly no idea what is going on here.  Function call
           back is firing but iterator is only showing 5.  Seems to
           be a scoping issue.  

           On top of that console is returning navEls is undefined,
           even though I have put listener on the elements and I can
           print the contents.  WTF JavScript    
        */
			e.preventDefault();	
			console.log('I am element number: ' + i);
		}, false);	
	}
    
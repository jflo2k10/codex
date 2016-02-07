/*(function($, root, undefined) {
	$(function() {
		'use strict';
				
		
		//jQuery
		//$('.menu-toggle').click(function() {
  	//	$(this).toggleClass('x');
		//});
		
		
	});

})(jQuery, this);*/

//( function() {
	var container, button;

	container = document.getElementById( 'site-navigation' );
//	if ( ! container ) {
//		return;
//	}

	button = document.getElementsByClassName( 'menu-toggle' );
//	if ( 'undefined' === typeof button ) {
//		return;
//	}
  
  console.log(button.length);
  
	button.onclick = function() {
  	console.log('clicked');
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
  		container.className = container.className.replace( ' toggled', '' );
			button.className = button.className.replace( /(?:^|\s)x(?!\S)/g , '' );
		} else {
			container.className += ' toggled';
			button.className += " x";
		}
  };
//} )();

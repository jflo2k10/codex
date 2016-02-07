(function($, root, undefined) {
	$(function() {
		'use strict';
				
		
		//jQuery
		//$('.menu-toggle').click(function() {
  	//	$(this).toggleClass('x');
		//});
		
		
	});

})(jQuery, this);

var container = document.getElementById( 'main-navigation' ),
button = container.getElementsByClassName( 'menu-toggle' )[0];

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.className = button.className.replace( /(?:^|\s)x(?!\S)/g , '' );
		} else {
			container.className += ' toggled';
			button.className += " x";
		}
  };

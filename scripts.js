(function($, root, undefined) {
	$(function() {
		'use strict';
				
		
		//jQuery
		//$('.menu-toggle').click(function() {
  	//	$(this).toggleClass('x');
		//});
		
		
	});

})(jQuery, this);

var container = document.getElementById( 'site-navigation' );

console.log(container.length);

var button = container.getElementsByClassName( 'menu-toggle' );

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
  		container.className = container.className.replace( ' toggled', '' );
			button.className = button.className.replace( /(?:^|\s)x(?!\S)/g , '' );
		} else {
			container.className += ' toggled';
			button.className += " x";
		}
  };

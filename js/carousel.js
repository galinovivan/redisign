(function( $ ) {
	$(document).ready(function() {
		var carousel = $('.item_carousel');
		
		
		carousel.itemslide();

		$(window).resize(function() {
			carousel.reload();
		});
	});
})(jQuery);
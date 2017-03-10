(function( $ ) {
	$(document).ready(function() {
		var mobileCarousel = $('.mobile_item_carousel');
		
		mobileCarousel.itemslide({
			'one_item': true,
			'parent_width': true
		});
		
		$(window).resize(function() {
			mobileCarousel.reload();
		});
		
		
	});
	
})(jQuery);
(function( $ ) {

	$(document).ready(function() {
		





		var toggle = $('#navToggle'),
			nav = $('#mobileNav');
		initMobileNav(toggle, nav);
		
		
		var selectToggle = $('#selectCategory');
		
		selectToggle.on('click', function() {
			selectToggle.find('.select_content').slideToggle();
		});

		/**
		 *
		 * @param toggle
		 * @param nav
		 */
		function initMobileNav(toggle, nav) {
			toggle.on('click', function() {
				nav.slideToggle();
				makeCloseToggle($(this));
			});
		}

		function makeCloseToggle(toggle) {
			if (toggle.hasClass('close')) {
				toggle.removeClass('close');
				return true;
			}
			toggle.addClass('close');
		}
	});
})(jQuery);
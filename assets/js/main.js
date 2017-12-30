/*
<<<<<<< HEAD
	Read Only by HTML5 UP
=======
	Striped by HTML5 UP
>>>>>>> parent of 34e9465... tiral4
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
<<<<<<< HEAD
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 1024px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
=======
		desktop: '(min-width: 737px)',
		wide: '(min-width: 1201px)',
		narrow: '(min-width: 737px) and (max-width: 1200px)',
		narrower: '(min-width: 737px) and (max-width: 1000px)',
		mobile: '(max-width: 736px)'
>>>>>>> parent of 34e9465... tiral4
	});

	$(function() {

<<<<<<< HEAD
		var $body = $('body'),
			$header = $('#header'),
			$nav = $('#nav'), $nav_a = $nav.find('a'),
			$wrapper = $('#wrapper');
=======
		var	$window = $(window),
			$body = $('body'),
			$document = $(document);

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});
>>>>>>> parent of 34e9465... tiral4

		// Fix: Placeholder polyfill.
			$('form').placeholder();

<<<<<<< HEAD
		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			var ids = [];

			// Set up nav items.
				$nav_a
					.scrolly({ offset: 44 })
					.on('click', function(event) {

						var $this = $(this),
							href = $this.attr('href');

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Prevent default behavior.
							event.preventDefault();

						// Remove active class from all links and mark them as locked (so scrollzer leaves them alone).
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set active class on this link.
							$this.addClass('active');

					})
					.each(function() {

						var $this = $(this),
							href = $this.attr('href'),
							id;

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Add to scrollzer ID list.
							id = href.substring(1);
							$this.attr('id', id + '-link');
							ids.push(id);

					});

			// Initialize scrollzer.
				$.scrollzer(ids, { pad: 300, lastHack: true });

		// Off-Canvas Navigation.
=======
		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Off-Canvas Sidebar.

			// Height hack.
				var $sc = $('#sidebar, #content'), tid;

				$window
					.on('resize', function() {
						window.clearTimeout(tid);
						tid = window.setTimeout(function() {
							$sc.css('min-height', $document.height());
						}, 100);
					})
					.on('load', function() {
						$window.trigger('resize');
					})
					.trigger('resize');
>>>>>>> parent of 34e9465... tiral4

			// Title Bar.
				$(
					'<div id="titleBar">' +
<<<<<<< HEAD
						'<a href="#header" class="toggle"></a>' +
=======
						'<a href="#sidebar" class="toggle"></a>' +
>>>>>>> parent of 34e9465... tiral4
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

<<<<<<< HEAD
			// Header.
				$('#header')
=======
			// Sidebar
				$('#sidebar')
>>>>>>> parent of 34e9465... tiral4
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
<<<<<<< HEAD
						side: 'right',
						target: $body,
						visibleClass: 'header-visible'
=======
						side: 'left',
						target: $body,
						visibleClass: 'sidebar-visible'
>>>>>>> parent of 34e9465... tiral4
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
<<<<<<< HEAD
					$('#titleBar, #header, #wrapper')
=======
					$('#titleBar, #sidebar, #main')
>>>>>>> parent of 34e9465... tiral4
						.css('transition', 'none');

	});

})(jQuery);
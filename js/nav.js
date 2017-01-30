//COLLAPSE

/**
 * JS based on Munsa JS file found here https://github.com/samikeijonen/munsa-lite/blob/master/js/settings.js
 *
 * Set up the navigation
 */
jQuery(function($) {

	// Set up vars.
	var mainNav            = $( 'nav' ).find( '.js-collapse--nav' ),
	    menuToggle         = $( 'nav' ).find( '.js-collapse--button' );

	/**
	 * Set up the main navigation toggle. This sets
	 * up a toggle for navigation to overlay the window.
	 */
	( function() {

		// Return early if menuToggle is missing.
		if ( ! menuToggle.length ) {
			return;
		}

		// Add an initial values for the attribute.
		menuToggle.attr( 'aria-expanded', 'false' );
		mainNav.attr( 'aria-expanded', 'false' );

		menuToggle.on( 'click', function( event ) {

      console.log("Hi!");

			// Toggle classes.
			$( 'html' ).toggleClass( 'disable-scroll' );
			$( 'body' ).toggleClass( 'main-navigation-open' );
			mainNav.toggleClass( 'open' );

			// Hide or show element after animation.
			if ( mainNav.hasClass( 'open' ) ) {

				$( mainNav ).css( 'display', 'flex' );

				$( mainNav ).addClass( 'fadeIn' );
				$( mainNav ).removeClass( 'fadeOut' );

				/**
				 * Handles keyboard navigation.
				 * We don't want to get lost inside menu unless we close the menu.
				 */

				// Set up focusable vars for menu.
				var focusableMainNav, firstFocusableMainNav, lastFocusableMainNav;

				// Get all, first and last focusable elements from the Menu.
				focusableMainNav      = mainNav.find( 'select, input, textarea, button, a' ).filter( ':visible' );
				firstFocusableMainNav = focusableMainNav.first();
				lastFocusableMainNav  = focusableMainNav.last();

				// Redirect last tab to first input.
				lastFocusableMainNav.on( 'keydown', function ( e ) {
					if ( ( e.keyCode === 9 && !e.shiftKey ) ) {
						e.preventDefault();
						firstFocusableMainNav.focus(); // Set focus on first element - that's actually close menu button.
					}
				});

				// Redirect first shift+tab to last input.
				firstFocusableMainNav.on( 'keydown', function ( e ) {
					if ( ( e.keyCode === 9 && e.shiftKey ) ) {
						e.preventDefault();
						lastFocusableMainNav.focus(); // Set focus on last element.
					}
				});

			} else {

				setTimeout( function() {
					$( mainNav ).css( 'display', 'none' );
				}, 550 );

				$( mainNav ).addClass( 'fadeOut' );
				$( mainNav ).removeClass( 'fadeIn' );

				// Enable focus on toggle button.
				menuButton.focus();

			}

			// If aria-expanded is false, set it to true. And vica versa.
			$( menuToggle ).attr( 'aria-expanded', $( menuToggle ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
			$( mainNav ).attr( 'aria-expanded', $( mainNav ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );

		});

	} )();

	/**
	 * Closes the main navigation or sidebar when
	 * the esc key is pressed.
	*/
	$( document ).keyup( function( event ) {
		if ( event.keyCode == 27 ) {
			if ( $( 'body' ).hasClass( 'main-navigation-open' ) ) {

				$( 'html' ).removeClass( 'disable-scroll' );
				$( 'body' ).removeClass( 'main-navigation-open' );
				mainNav.removeClass( 'open' );

				setTimeout( function() {
					$( mainNav ).css( 'display', 'none' );
				}, 550 );

				$( mainNav ).addClass( 'fadeOut' );
				$( mainNav ).removeClass( 'fadeIn' );

				// Enable focus on toggle button.
				menuButton.focus();

				// If aria-expanded is false, set it to true. And vica versa.
				$( menuToggle ).attr( 'aria-expanded', $( menuToggle ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
				$( mainNav ).attr( 'aria-expanded', $( mainNav ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );

			}
		}
	});

});

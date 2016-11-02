//PILLS

jQuery(function($) {
    // this will get the full URL at the address bar
    var url = window.location.href;

    // passes on every "a" tag
    $('.nav_link').each(function() {
        // checks if its the same on the address bar
        if (url == (this.href)) {
            $(this).closest('li').addClass('active');
        }
    });
});

//COLLAPSE

jQuery(document).ready(function($){

  var collapseButtons = document.getElementsByClassName('js-collapse_button'),
  numCollapseButtons = collapseButtons.length,
  navs = document.getElementsByClassName('js-collapse_nav'),
  navLists = document.getElementsByClassName('js-collapse_menu');

  console.log(collapseButtons.length);

  for ( var i = 0; i < numCollapseButtons; i++ ){
    collapseButtons[i].addEventListener('click', function() {

      if ($(collapseButtons[i-1]).next().hasClass('show-nav')) {
        $(collapseButtons[i-1]).next().removeClass('show-nav').addClass('hide-nav');

        $(document.body).removeClass('no-scroll');

        setTimeout(function() {
          $(collapseButtons[i-1]).next().removeClass('hide-nav');
        }, 500);

      } else {
        $(collapseButtons[i-1]).next().removeClass('hide-nav').addClass('show-nav');

        $(document.body).addClass('no-scroll');
      }

      return false;
    });
  }

});

// Initialize AOS
AOS.init({
  duration: 1200, // Animation duration in milliseconds
  once: true,     // Animation should happen only once
  mobile: false,  // Disable animations on mobile devices
});

// Wrap jQuery code
(function ($) {
  $(document).ready(function () {
    // Toggle visibility of sibling 'ul' when a .toggle__arrow is clicked
    $('.toggle__arrow').on('click', function () {
      $(this).siblings('ul').slideToggle();
      $(this).toggleClass('active'); // Toggle the 'active' class for the arrow icon (up/down)
    });

    // Toggle visibility of .menu__column inside the same .row when a .toggle__button is clicked
    $('.toggle__button').on('click', function () {
      $(this).closest('.row').find('.menu__column').slideToggle();
      $(this).toggleClass('active'); // Toggle the 'active' class for the button
      $(this).find('i').toggleClass('fa-bars-staggered fa-times');
    });
  });

  $(window).scroll(function () {
    // Calculate the scroll position and the height of the document
    var scrollTop = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();

    // Check if the scroll position is at least 50% of the document height
    if (scrollTop >= (documentHeight / 2) - windowHeight) {
      // Add 'z-up' class to the footer
      $('.footer__section').addClass('z-footer');
    } else {
      // Remove 'z-footer' class if scroll position is less than 50%
      $('.footer__section').removeClass('z-footer');
    }
    if (scrollTop >= windowHeight - 100) {
      // Add 'z-up' class to the footer
      $('.sticky__navbar').addClass('sticky');
    } else {
      // Remove 'sticky' class if scroll position is less than 50%
      $('.sticky__navbar').removeClass('sticky');
    }
  });
})(jQuery);
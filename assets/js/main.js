// Initialize AOS
AOS.init({
  duration: 1200, // Animation duration in milliseconds
  once: true,     // Animation should happen only once
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
    $(document).ready(function () {
      // Initialize the modal markup as an empty string
      let modalMarkup = '';
      modalMarkup += '<div class="modal">';
      modalMarkup += '    <div class="modal__body">';
      modalMarkup += '        <div class="modal__header">';
      modalMarkup += '            <h6 class="fw-medium mb-0">Bandar Imam Petrochemical Company</h6>';
      modalMarkup += '        </div>';
      modalMarkup += '        <div class="modal__content">';
      modalMarkup += '            <table class="offer__modal__table">';
      modalMarkup += '                <tbody>';
      modalMarkup += '                    <tr>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Release date & time</div>';
      modalMarkup += '                            <div class="row align-items-center text">';
      modalMarkup += '                                <div class="col">17/12/2024</div>';
      modalMarkup += '                                <div class="col"><span class="line-x"></span></div>';
      modalMarkup += '                                <div class="col">10:41 AM</div>';
      modalMarkup += '                            </div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Product brand name</div>';
      modalMarkup += '                            <div class="text">Basra Oil Company (BOC)</div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                    </tr>';
      modalMarkup += '                    <tr>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Product Symbol</div>';
      modalMarkup += '                            <div class="text">ALPGEGW018765</div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Supplier broker</div>';
      modalMarkup += '                            <div class="text">Al-Iraqia Petroleum Trading</div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                    </tr>';
      modalMarkup += '                    <tr>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Supplier</div>';
      modalMarkup += '                            <div class="text">Basra Oil Company (BOC)</div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Manufacturer</div>';
      modalMarkup += '                            <div class="text">Basra Oil Company (BOC)</div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                    </tr>';
      modalMarkup += '                    <tr>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="row">';
      modalMarkup += '                                <div class="col-8">';
      modalMarkup += '                                    <div class="label">Maximum increase in supply volume</div>';
      modalMarkup += '                                    <div class="text">A person</div>';
      modalMarkup += '                                </div>';
      modalMarkup += '                                <div class="col-4">';
      modalMarkup += '                                    <div class="label">Display size</div>';
      modalMarkup += '                                    <div class="text">12, 000 tons</div>';
      modalMarkup += '                                </div>';
      modalMarkup += '                            </div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Product Specification</div>';
      modalMarkup += '                            <div class="text">According to the prospectus & offer notice</div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                    </tr>';
      modalMarkup += '                    <tr>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Maximum order price change</div>';
      modalMarkup += '                            <div class="text">$0.01 <small>(According to the mechanism approved by the Board of Directors of Iraq Energy Exchange)</small></div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Base price</div>';
      modalMarkup += '                            <div class="text">$5200.00 <small>(According to the mechanism approved by the Board of Directors of Iraq Energy Exchange)</small></div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                    </tr>';
      modalMarkup += '                    <tr>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Transaction type</div>';
      modalMarkup += '                            <div class="text">Salaf</div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Minimum purchase to find out the price</div>';
      modalMarkup += '                            <div class="text">1500 tons</div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                    </tr>';
      modalMarkup += '                    <tr>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="row">';
      modalMarkup += '                                <div class="col">';
      modalMarkup += '                                    <div class="label">Minimum purchase ton</div>';
      modalMarkup += '                                    <div class="text">5,000 tons</div>';
      modalMarkup += '                                </div>';
      modalMarkup += '                                <div class="col">';
      modalMarkup += '                                    <div class="label">Maximum purchase ton</div>';
      modalMarkup += '                                    <div class="text">15, 000 tons</div>';
      modalMarkup += '                                </div>';
      modalMarkup += '                            </div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                        <td>';
      modalMarkup += '                            <div class="label">Allocation base unit</div>';
      modalMarkup += '                            <div class="text">Tone</div>';
      modalMarkup += '                        </td>';
      modalMarkup += '                    </tr>';
      modalMarkup += '                </tbody>';
      modalMarkup += '            </table>';
      modalMarkup += '        </div>';
      modalMarkup += '        <div class="modal__footer">';
      modalMarkup += '                <a href="/" class="primary__button size__lg">';
      modalMarkup += '                    Report Creation';
      modalMarkup += '                </a>';
      modalMarkup += '                <a href="/" class="link__button modal__close">';
      modalMarkup += '                    Cancel';
      modalMarkup += '                </a>';
      modalMarkup += '        </div>';
      modalMarkup += '    </div>';
      modalMarkup += '</div>';
      

      
      // Add click event listener to rows in the .offer__table
      $('.offer__table tr').on('click', function () {
          // Check if the modal already exists
          if ($('.modal').length === 0) {
              // Append the modal to the body
              $('body').append(modalMarkup);
          }
      });

      // Add click event listener to close the modal
      $('body').on('click', '.modal__close', function () {
          // Remove the modal
          $('.modal').remove();

          return false;
      });
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
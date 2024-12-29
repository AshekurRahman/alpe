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

            let offerModal = `
          <div class="modal">
              <div class="modal__body">
                  <div class="modal__header">
                      <h6 class="fw-medium mb-0">Bandar Imam Petrochemical Company</h6>
                  </div>
                  <div class="modal__content">
                      <table class="offer__modal__table">
                          <tbody>
                              <tr>
                                  <td>
                                      <div class="label">Release date & time</div>
                                      <div class="row align-items-center text">
                                          <div class="col">17/12/2024</div>
                                          <div class="col"><span class="line-x"></span></div>
                                          <div class="col">10:41 AM</div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="label">Product brand name</div>
                                      <div class="text">Basra Oil Company (BOC)</div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div class="label">Product Symbol</div>
                                      <div class="text">ALPGEGW018765</div>
                                  </td>
                                  <td>
                                      <div class="label">Supplier broker</div>
                                      <div class="text">Al-Iraqia Petroleum Trading</div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div class="label">Supplier</div>
                                      <div class="text">Basra Oil Company (BOC)</div>
                                  </td>
                                  <td>
                                      <div class="label">Manufacturer</div>
                                      <div class="text">Basra Oil Company (BOC)</div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div class="row">
                                          <div class="col-8">
                                              <div class="label">Maximum increase in supply volume</div>
                                              <div class="text">A person</div>
                                          </div>
                                          <div class="col-4">
                                              <div class="label">Display size</div>
                                              <div class="text">12,000 tons</div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="label">Product Specification</div>
                                      <div class="text">According to the prospectus & offer notice</div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div class="label">Maximum order price change</div>
                                      <div class="text">$0.01 <small>(According to the mechanism approved by the Board of Directors of Iraq Energy Exchange)</small></div>
                                  </td>
                                  <td>
                                      <div class="label">Base price</div>
                                      <div class="text">$5200.00 <small>(According to the mechanism approved by the Board of Directors of Iraq Energy Exchange)</small></div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div class="label">Transaction type</div>
                                      <div class="text">Salaf</div>
                                  </td>
                                  <td>
                                      <div class="label">Minimum purchase to find out the price</div>
                                      <div class="text">1500 tons</div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div class="row">
                                          <div class="col">
                                              <div class="label">Minimum purchase ton</div>
                                              <div class="text">5,000 tons</div>
                                          </div>
                                          <div class="col">
                                              <div class="label">Maximum purchase ton</div>
                                              <div class="text">15,000 tons</div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="label">Allocation base unit</div>
                                      <div class="text">Tone</div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div class="modal__footer">
                      <a href="/" class="primary__button size__lg">
                          Report Creation
                      </a>
                      <a href="/" class="link__button modal__close">
                          Cancel
                      </a>
                  </div>
              </div>
          </div>
      `;




            // Add click event listener to rows in the .offer__table
            $('.offer__table tr').on('click', function () {
                // Check if the modal already exists
                if ($('.modal').length === 0) {
                    // Append the modal to the body
                    $('body').append(offerModal);
                }
            });


            let requirementModal = `
          <div class="modal">
              <form class="modal__body modal__small requirement-form">
                  <div class="modal__content">
                      <input type="text" class="input__control mb-2" placeholder="Name" required>
                      <input type="text" class="input__control mb-2" placeholder="Company Name" required>
                      <input type="email" class="input__control mb-2" placeholder="Email Address" required>
                      <select class="select__control mb-2" required>
                          <option value="" disabled selected>Select country</option>
                          <option value="usa">United States</option>
                          <option value="canada">Canada</option>
                          <option value="uk">United Kingdom</option>
                          <!-- Add more country options as needed -->
                      </select>

                      <input type="tel" class="input__control mb-2" placeholder="(+964)" pattern="^\+964\d{9,10}$" required>

                      <label class="checkbox__label mt-4">
                          <input type="checkbox" class="checkbox__control" required>
                          I agree with <a href="/terms" target="_blank">Terms & Conditions</a>
                      </label>
                  </div>

                  <div class="modal__footer">
                      <button type="submit" class="primary__button size__lg">Submit Details</button>
                      <a href="/" class="link__button modal__close">Cancel</a>
                  </div>
              </form>
          </div>
      `;

            $('.post-requirements-from').on('submit', function () {
                // Check if the modal already exists
                if ($('.modal').length === 0) {
                    // Append the modal to the body
                    $('body').append(requirementModal);
                }

                return false;
            });



            // Add click event listener to close the modal
            $('body').on('click', '.modal__close', function () {
                // Remove the modal
                $('.modal').remove();
                return false;
            });

            $('.country-select').each(function () {
                var $select = $(this); // Reference to the original select element
                var $input = $select.siblings('input[type="tel"]'); // Reference to the phone input field
            
                // Create custom dropdown elements
                var $customDropdown = $('<div class="select-dropdown">');
                var $selected = $('<div class="selected-option">');
                var $ul = $('<ul class="country-list">');
            
                // Hide the original select
                $select.hide();
            
                // Loop through options and create custom list items
                $select.find('option').each(function (index) {
                    var $option = $(this);
                    var countryCode = $option.data('phone-code'); // Get phone code from data attribute
                    var $li = $(
                        `<li class="country-option" 
                            data-value="${$option.val()}" 
                            data-flag="${$option.data('flag')}" 
                            data-phone-code="${countryCode}">
                            <span class="flag ${$option.data('flag')}"></span>${$option.text()}
                        </li>`
                    );
            
                    // Mark the first option as selected by default
                    if (index === 0) {
                        $selected.html(
                            `<span class="flag ${$option.data('flag')}"></span>
                             <span class="name">${$option.text()}</span>`
                        );
                        $select.val($option.val());
                        if (countryCode) {
                            $input.attr('placeholder', `${countryCode}`); // Set initial placeholder
                        }
                    }
            
                    $ul.append($li);
                });
            
                // Append selected option and options list to the custom dropdown
                $customDropdown.append($selected).append($ul);
                $select.siblings('.country-select-dropdown').append($customDropdown);
            
                // Toggle the options list when the selected option is clicked
                $selected.on('click', function () {
                    $ul.toggle();
                });
            
                // Handle country selection
                $ul.on('click', '.country-option', function () {
                    var selectedValue = $(this).data('value');
                    var selectedText = $(this).text();
                    var selectedFlag = $(this).data('flag');
                    var countryCode = $(this).data('phone-code');
            
                    // Update original select value
                    $select.val(selectedValue);
            
                    // Update selected option display
                    $selected.html(
                        `<span class="flag ${selectedFlag}"></span>
                         <span class="name">${selectedText}</span>`
                    );
            
                    // Update phone input placeholder
                    if (countryCode) {
                        $input.attr('placeholder', `${countryCode}`);
                    }
            
                    // Hide the options list
                    $ul.hide();
                });
            
                // Close the dropdown if clicked outside
                $(document).on('click', function (e) {
                    if (!$(e.target).closest('.select-dropdown').length) {
                        $ul.hide();
                    }
                });
            });

            $('.input__control[type="tel"]').on('input', function () {
                // Allow only numbers, spaces, and symbols (+, -, (), whitespace)
                $(this).val($(this).val().replace(/[^0-9+\-()\s]/g, ''));
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
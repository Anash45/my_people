$(document).ready(function () {
    // Check if user cliced outside of .sidebar then remove the .menu-opened class
    $(document).click(function (e) {
        if (!$(e.target).closest('.sidebar').length && $('body').hasClass('menu-opened') && !$(e.target).closest('.menu-btn').length) {
            $('body').removeClass('menu-opened');
        }
    });
});
function toggleMenu() {
    $('body').toggleClass('menu-opened');
}

$(document).ready(function () {
    $('.show-passowrd-icon').each(function () {
        $(this).click(function () {
            var $input = $(this).prev('input');
            if ($input.attr('type') === 'password') {
                $input.attr('type', 'text');
            } else {
                $input.attr('type', 'password');
            }
        });
    });
    $('[data-bs-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
    if ($('.fp-cards-cont').length) { // Check if the element exists
        console.log($(window).width());
        if ($(window).width() > 992) { // If viewport height is greater than 992
            $('.fp-cards-cont').animate(
                { scrollTop: $('.fp-cards-cont')[0].scrollHeight }, // Scroll vertically
                15000 // 8 seconds
            );
        } else {
            $('.fp-cards-cont').animate(
                { scrollLeft: $('.fp-cards-cont')[0].scrollWidth }, // Scroll horizontally
                15000 // 8 seconds
            );
        }
    }
    $('.header-search').click(function () {
        $('header .search-form').slideToggle();
    });

    $(window).on('click', function (e) {
        if (!$(e.target).closest('header .search-form').length && !$(e.target).closest('.header-search').length) {
            hideSearchForm();
        }
    });
    if ($('.f-currency-flex .currency-inp').length) {
        $('.f-currency-flex .currency-inp').select2({
            containerCssClass: 'curr-container',
            dropdownCssClass: 'curr-dropdown', // Custom class for the dropdown container
            minimumResultsForSearch: Infinity // Hides the search input
        });
    }
    if ($('.dash-currency-flex .currency-inp').length) {
        $('.dash-currency-flex .currency-inp').select2({
            containerCssClass: 'curr-container',
            dropdownCssClass: 'curr-dropdown', // Custom class for the dropdown container
            minimumResultsForSearch: Infinity, // Hides the search input
            templateResult: function (data) {
                // Customize dropdown items
                if (!data.id) {
                    return data.text; // Return placeholder text if no id
                }
                return `${data.text}`;
            },
            templateSelection: function (data) {
                // Customize the selected item
                if (!data.id) {
                    return data.text; // Return placeholder text if no id
                }
                return `Currency: ${data.text}`;
            }
        });
    }
    
    if ($('.dash-duration-flex .currency-inp').length) {
        $('.dash-duration-flex .currency-inp').select2({
            containerCssClass: 'curr-container',
            dropdownCssClass: 'curr-dropdown', // Custom class for the dropdown container
            minimumResultsForSearch: Infinity, // Hides the search input
            templateResult: function (data) {
                // Customize dropdown items
                if (!data.id) {
                    return data.text; // Return placeholder text if no id
                }
                return `${data.text}`;
            },
            templateSelection: function (data) {
                // Customize the selected item
                let svgIcon =  `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1667 1.6V2.1H11.6667H12.4444C13.0107 2.1 13.5 2.58277 13.5 3.2V14.4C13.5 15.0172 13.0107 15.5 12.4444 15.5H1.55556C0.989326 15.5 0.5 15.0172 0.5 14.4V3.2C0.5 2.58277 0.989327 2.1 1.55556 2.1H2.33333H2.83333V1.6V0.5H3.38889V1.6V2.1H3.88889H10.1111H10.6111V1.6V0.5H11.1667V1.6ZM12.9444 3.2V2.7H12.4444H1.55556H1.05556V3.2V4.8V5.3H1.55556H12.4444H12.9444V4.8V3.2ZM1.05556 14.4V14.9H1.55556H12.4444H12.9444V14.4V6.4V5.9H12.4444H1.55556H1.05556V6.4V14.4ZM7.5 9.3H10.3889V12.3H7.5V9.3Z" stroke="#150F36"/>
</svg>
`;
                if (!data.id) {
                    return data.text; // Return placeholder text if no id
                }
                return $(`
                    <span class="d-flex align-items-center">
                        ${svgIcon}
                        <span class="ms-2">${data.text}</span>
                    </span>
                `);
            }
        });
    }

    // Dashboard carousel

    if ($('.new-drops-slider').length) {
        $('.new-drops-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: `<span class="slick-arrow slick-prev"><svg width="72" height="34" viewBox="0 0 72 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="70" height="32" rx="1" fill="#150F36"/>
<rect x="1" y="1" width="70" height="32" rx="1" stroke="white" stroke-linecap="square"/>
<path d="M35.2812 13.9702L32.2188 17.0327L35.2812 20.0952L34.3438 21.0327L30.3438 17.0327L34.3438 13.0327L35.2812 13.9702Z" fill="white"/>
</svg>
`,
            nextArrow: `<span class="slick-arrow slick-next"><svg width="72" height="34" viewBox="0 0 72 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="70" height="32" rx="1" fill="#150F36"/>
<rect x="1" y="1" width="70" height="32" rx="1" stroke="white" stroke-linecap="square"/>
<path d="M30.7188 13.9702L33.7812 17.0327L30.7188 20.0952L31.6562 21.0327L35.6562 17.0327L31.6562 13.0327L30.7188 13.9702Z" fill="white"/>
</svg>
`,
            draggable: true,
            responsive: [
                {
                    breakpoint: 992, // lg breakpoint
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768, // md breakpoint
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    if ($('.main-table').length) {
        $('.main-table').DataTable({
            paging: false,           // Disable pagination
            searching: false,        // Disable search box
            info: false,             // Disable info text ("Showing X of Y entries")
            ordering: true,          // Enable column sorting
            lengthChange: false,     // Disable min/max results dropdown
            language: {
                emptyTable: "No data available in table" // Optional: Custom empty table message
            }
        });
    }

    $('.view-more').click(function () {
        $(this).prev('.mdb-textarea').toggleClass('expanded');
        $(this).text($(this).text() === 'View more' ? 'View less' : 'View more');
    });

    setTimeout(function () {
        $('.loader-outer').fadeOut();
    }, 1000);

    if($('.cwr-chat').length) {
        $('.cwr-chat').animate({ scrollTop: $('.cwr-chat')[0].scrollHeight }, 'slow');
    }

    $('.minting-row .mint-card .form-check-input').change(function () {
        checkMintSelections();
    });
});

function showSearchForm() {
    $('header .search-form').slideDown();
}

function hideSearchForm() {
    $('header .search-form').slideUp();
}

function openModal(modalId) {
    $('.modal').modal('hide');
    $(`#${modalId}`).modal('show');
}

function checkMintSelections() {
    $('.minting-row .mint-card').each(function () {
        let check = $(this).find('.form-check-input');
        let card = $(this);
        if (check.is(':checked')) {
            card.addClass('selected');
        } else {
            card.removeClass('selected');
        }
    });
}


$(document).ready(function () {
    if($('.mf-date-time').length){
        $(".mf-date-time").on("click", function () {
            flatpickr(".mf-date-time", {
                enableTime: true,
                dateFormat: "F j, Y h:i K", // November 21, 2024 8:00 AM
                onClose: function (selectedDates, dateStr, instance) {
                    if (selectedDates.length > 0) {
                        // Extract the date and time separately
                        const date = flatpickr.formatDate(selectedDates[0], "F j, Y");
                        const time = flatpickr.formatDate(selectedDates[0], "h:i K");
                        
                        // Fill the respective elements
                        $(".mf-date").text(date);
                        $("#mf-date").val(date);
                        $(".mf-time").text(time);
                        $("#mf-time").val(time);
                    }
                },
            }).open();
        });
    }

    $('[data-dismiss="modal"]').on('click', function () {
        $(this).closest('.modal').modal('hide');
    })
});

$(document).ready(function () {
    let previousOfferPrice = null; // To store the initial offer price

    // When #receivedOfferModal is opened
    $("#receivedOfferModal").on("show.bs.modal", function () {
        // Save the current offer price
        previousOfferPrice = $("#receivedOfferModal .offer-price").val(); // Assuming price is stored in data-price attribute
        console.log("Previous offer price saved:", previousOfferPrice);
    });

    // When #offerSuccessModal is attempted to open
    $("#offerAcceptedSuccessModal").on("show.bs.modal", function (e) {
        const currentOfferPrice = $(".offer-price").val(); // Get the current offer price
        console.log("Current offer price:", currentOfferPrice);

        if (previousOfferPrice !== currentOfferPrice) {
            e.preventDefault(); // Prevent the opening of #offerAcceptedSuccessModal
            $("#negotiateOfferModal").find('.offer-price').val(currentOfferPrice);
            $("#negotiateOfferModal").modal("show"); // Show #negotiateOfferModal
        } else {
            console.log("Prices match. Opening #offerAcceptedSuccessModal.");
        }
    });
});

function connectWallet(walletName) {
    window.location = "dashboard-nothing-with-balance.html";
}
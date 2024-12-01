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
});

$(document).ready(function () {
    if ($('.fp-cards-cont').length) { // Check if the element exists
        console.log($(window).width());
        if ($(window).width() > 992) { // If viewport height is greater than 992
            $('.fp-cards-cont').animate(
                { scrollTop: $('.fp-cards-cont')[0].scrollHeight }, // Scroll vertically
                8000 // 8 seconds
            );
        } else {
            $('.fp-cards-cont').animate(
                { scrollLeft: $('.fp-cards-cont')[0].scrollWidth }, // Scroll horizontally
                8000 // 8 seconds
            );
        }
    }
    $('.header-search').click(function () {
        $('.search-form').slideToggle();
    });

    $(window).on('click', function (e) {
        if (!$(e.target).closest('.search-form').length && !$(e.target).closest('.header-search').length) {
            hideSearchForm();
        }
    });
    if ($('.currency-inp')) {
        $('.currency-inp').select2({
            containerCssClass: 'curr-container',
            dropdownCssClass: 'curr-dropdown', // Custom class for the dropdown container
            minimumResultsForSearch: Infinity // Hides the search input
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
});

function showSearchForm() {
    $('.search-form').slideDown();
}

function hideSearchForm() {
    $('.search-form').slideUp();
}
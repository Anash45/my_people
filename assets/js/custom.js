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
    if($('.currency-inp')){
        $('.currency-inp').select2({
            containerCssClass: 'curr-container',
            dropdownCssClass: 'curr-dropdown', // Custom class for the dropdown container
            minimumResultsForSearch: Infinity // Hides the search input
        });
    }
});

function showSearchForm() {
    $('.search-form').slideDown();
}

function hideSearchForm() {
    $('.search-form').slideUp();
}
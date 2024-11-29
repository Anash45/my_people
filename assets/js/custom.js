$(document).ready(function() {
    // Check if user cliced outside of .sidebar then remove the .menu-opened class
    $(document).click(function(e) {
        if (!$(e.target).closest('.sidebar').length && $('body').hasClass('menu-opened') && !$(e.target).closest('.menu-btn').length) {
            $('body').removeClass('menu-opened');
        }
    });
});
function toggleMenu() {
    $('body').toggleClass('menu-opened');
}
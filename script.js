AOS.init();
$('body').css('padding-top', $('.navbar').outerHeight() + 'px');
if ($('.nav-scroll').length > 0) {
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.nav-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.nav-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}
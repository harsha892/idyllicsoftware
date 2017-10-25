$(window).load(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    var url = window.location.pathname.split('/')[2];
    console.log(url);
    // Will only work if string in href matches with location
    $('ul.site-nav a[href="' + url + '"]').parent().addClass('active');
});
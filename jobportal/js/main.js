//scroll navbar color changes
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('nav').addClass("scroll");
        $('.navbar-nav .nav-link').css({ 'color': 'black' });
    }
    else {
        $('nav').removeClass("scroll");
        $('.navbar-nav .nav-link').css({ 'color': 'white' });
    }
});

//change active class

$(".navbar-nav a").on('click', function () {
    $('.navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});
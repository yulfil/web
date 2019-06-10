$(document).ready(function () {


    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top,
        }, 400);
        return false;
    });

    $('input[name="phone"], input[name="peoples"], input[name="hours"]').keypress(function (event) {
        event = event || window.event;
        if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
            return false;
    });


    $('.burger-menu').on('click', function () {
        $('.header-menu').toggleClass('header-menu-active');
    })

    $('input[type="tel"]').mask("+7(999)999-99-99");
   
});
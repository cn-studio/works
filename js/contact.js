$(document).ready(function () {
    //聯絡我
    $('.contact-btn').click(function (e) {
        $('.contact').fadeIn(1000);
        $('.contact-area').removeClass('move-defult').addClass('move-active');
        $('body').css({ 'overflow-y': 'hidden' });
        return false;
    });

    $('.contact').click(function (e) {
        $('.contact').fadeOut(1000);
        $('.contact-area').removeClass('move-active').addClass('move-defult');
        $('body').css({ 'overflow-y': 'auto' });
    });

    $('.contact-area-btn').click(function (e) {
        event.stopPropagation();
    });
});
$(document).ready(function () {
    //多語系強制畫面比例提示
    var ScreenHeight = document.body.clientHeight;
    var WindowWidth = window.innerWidth;
    if (ScreenHeight <= 768 && WindowWidth <= 1024 && WindowWidth >= ScreenHeight) {
        $('body').css('overflow-y', 'hidden');
        $('body').append('<div class="mobile-alert"></div>');
        $('.mobile-alert').append('<img src="image/mobile-alert-img.svg">');
        $('.mobile-alert').append('<p>請依照圖示<br>變更為直立式閱讀</p>')
    }
    $(window).resize(function () {
        var LanData = $('.lan-btn').data('name');
        var ScreenHeight = document.body.clientHeight;
        var WindowWidth = window.innerWidth;
        if (ScreenHeight <= 768 && WindowWidth <= 1024 && WindowWidth >= ScreenHeight) {
            $('body').css('overflow-y', 'hidden');
            $('body').append('<div class="mobile-alert"></div>');
            $('.mobile-alert').append('<img src="image/mobile-alert-img.svg">');
            if (LanData == 'chinese') {
                $('.mobile-alert').append('<p>請依照圖示<br>變更為直立式閱讀</p>');
                $('.mobile-alert').children('p').css({ 'font-family': 'Noto Sans TC, sans-serif', 'letter-spacing': '1.5px' });
            } else {
                $('.mobile-alert').append('<p>Please follow the instructions <br>to adjust your mobile device <br>to an upright reading</p>');
                $('.mobile-alert').children('p').css({ 'font-family': 'Comfortaa, cursive', 'letter-spacing': '0.1px' });
            }
        } else {
            $('body').css('overflow-y', 'auto');
            $('.mobile-alert').remove();
        }
    });
});
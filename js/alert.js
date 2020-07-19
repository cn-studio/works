$(document).ready(function () {
    //強制畫面比例提示
    var ScreenHeight = document.body.clientHeight;
    var WindowWidth = window.innerWidth;
    if (ScreenHeight <= 768 && WindowWidth <= 1024 && WindowWidth >= ScreenHeight) {
        $('body').css('overflow-y', 'hidden');
        $('body').append('<div class="mobile-alert"></div>');
        $('.mobile-alert').append('<img src="image/mobile-alert-img.svg">');
        $('.mobile-alert').append('<p>請依照圖示<br>變更為直立式閱讀</p>')
    }
    $(window).resize(function () {
        var ScreenHeight = document.body.clientHeight;
        var WindowWidth = window.innerWidth;
        if (ScreenHeight <= 768 && WindowWidth <= 1024 && WindowWidth >= ScreenHeight) {
            $('body').css('overflow-y', 'hidden');
            $('body').append('<div class="mobile-alert"></div>');
            $('.mobile-alert').append('<img src="image/mobile-alert-img.svg">');
            $('.mobile-alert').append('<p>請依照圖示<br>變更為直立式閱讀</p>')
        } else {
            $('body').css('overflow-y', 'auto');
            $('.mobile-alert').remove();
        }
    });
});
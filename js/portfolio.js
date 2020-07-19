$(document).ready(function () {
    var WindowWidth = window.innerWidth;
    var HeaderHeight = $('header').height();
    if (WindowWidth > 960) {
        $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
        $('.works-list-img-area').eq(1).css({ 'margin-top': HeaderHeight })
    } else if (WindowWidth < 960 && WindowWidth > 480) {
        $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
        $('.works-list-img-area').eq(1).css({ 'margin-top': '2.5%' })
    }
    else {
        $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
        $('.works-list-img-area').eq(1).css({ 'margin-top': '12.5%' })
    }

    $(window).resize(function () {
        //前兩個作品列表
        var WindowWidth = window.innerWidth;
        var HeaderHeight = $('header').height();
        if (WindowWidth > 960) {
            $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
            $('.works-list-img-area').eq(1).css({ 'margin-top': HeaderHeight })
        } else if (WindowWidth < 960 && WindowWidth > 480) {
            $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
            $('.works-list-img-area').eq(1).css({ 'margin-top': '2.5%' })
        }
        else {
            $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
            $('.works-list-img-area').eq(1).css({ 'margin-top': '12.5%' })
        }
    });
});
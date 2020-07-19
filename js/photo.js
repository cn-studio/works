$(document).ready(function () {
    var WindowWidth = window.innerWidth;
    var WorksWidth = $('.works-list').width();
    var Test = $('.works-list-img-area').height();
    var WorksMargin = $('.works-list-m').css('margin-right');
    if (WindowWidth > 960) {
        $('.works-list-img-area').height(WorksWidth);
        $('.works-list-img-area').css({ 'margin-top': WorksMargin, 'margin-bottom': WorksMargin });
    } else if (WindowWidth < 960 && WindowWidth > 480) {
        $('.works-list-img-area').height(WorksWidth*0.75);
        $('.works-list-img-area').css({ 'margin-top': '2.5%', 'margin-bottom': '2.5%' });
    }
    else {
        $('.works-list-img-area').height(WorksWidth);
        $('.works-list-img-area').css({ 'margin-top': '10%', 'margin-bottom': '5%' });
    }

    $(window).resize(function () {
        var WindowWidth = window.innerWidth;
        var WorksWidth = $('.works-list').width();
        var WorksMargin = $('.works-list-m').css('margin-right');
        $('.works-list-img-area').height(WorksWidth);
        $('.works-list-img-area').css({ 'margin-top': WorksMargin, 'margin-bottom': WorksMargin });
        if (WindowWidth > 960) {
            $('.works-list-img-area').height(WorksWidth);
            $('.works-list-img-area').css({ 'margin-top': WorksMargin, 'margin-bottom': WorksMargin });
        } else if (WindowWidth < 960 && WindowWidth > 480) {
            $('.works-list-img-area').height(WorksWidth*0.75);
            $('.works-list-img-area').css({ 'margin-top': '2.5%', 'margin-bottom': '2.5%' });
        }
        else {
            $('.works-list-img-area').height(WorksWidth);
            $('.works-list-img-area').css({ 'margin-top': '10%', 'margin-bottom': '5%' });
        }
    });
    
    $(window).scroll(function () {
        var WindowHeight = document.body.clientHeight*0.5;
        var WindowWidth = window.innerWidth;
        var HeaderHeight = $('header').height();
        var WindowScroll = $(window).scrollTop();
        if (WindowWidth <= 768) {
            $('.works-list-img').each(function () {
                var WorksListImgOffsetTop = $(this).offset().top;
                var WorksListImgHeight = $(this).height();
                if (WindowScroll + WindowHeight + HeaderHeight > WorksListImgOffsetTop && WindowScroll + WindowHeight + HeaderHeight <= WorksListImgOffsetTop + WorksListImgHeight) {
                    $(this).children('.works-list-img-area').children('div').eq(1).addClass('works-list-img-fadeout').removeClass('works-list-img-fadein');
                } else {
                    $(this).children('.works-list-img-area').children('div').eq(1).addClass('works-list-img-fadein').removeClass('works-list-img-fadeout');
                }
            });
        } else {
            $('.works-list-img').each(function () {
                    $(this).children('.works-list-img-area').children('div').eq(1).addClass('works-list-img-fadein').removeClass('works-list-img-fadeout');
            });
        }
    });
});
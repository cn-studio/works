$(document).ready(function () {
    var HeaderHeight = $('header').height();
    var FooterHeight = $('footer').height();
    var PageName = $('.works-content-area h1').html();
    //動態作品選單
    $('.works-content').prepend('<ul class="works-content-list"></ul>');
    function WorkList(link, name, type) {
        $('.works-content-list').append('<li><a href= ' + link + '><span>' + name + '</span><span>' + type + '</span></a></li>');
    };
    WorkList('bookset.html', '大學五書系列', 'Graphic Design');
    WorkList('artistweb.html', '董小蕙的藝術', 'Web design');
    WorkList('rebuild.html', '重建斯文', 'Graphic Design');
    WorkList('airitiweb.html', '華藝學術出版', 'Web design');
    WorkList('productdm.html', '產品文宣', 'Graphic Design');
    WorkList('crazyrunningweb.html', '全民瘋路跑', 'Web design');
    WorkList('handbook.html', '產品介紹手冊', 'Graphic Design');
    WorkList('translation.html', '譯介的話語', 'Graphic Design');
    WorkList('eventvision.html', '活動主視覺', 'Graphic Design');
    WorkList('', '敬請期待...', 'Comming Soon');
    //當前頁面增加樣式
    var ListLeng = $('.works-content-list li').length;
    for (let i = 0; i < ListLeng; i++) {
        var ListName = $('.works-content-list li').eq(i).children('a').children('span').eq(0).html();
        if (ListName == PageName) {
            $('.works-content-list li').eq(i).children('a').click(function (e) { 
                return false;
            });
            $('.works-content-list li').eq(i).children('a').addClass('works-list-active');
            $('.works-content-list li').eq(i).children('a').children('span').addClass('works-list-btn-active');
        }
    }
    //移除最後一個項目的預設行為 & 跳出視窗
    $('.works-content-list').children('li').eq(ListLeng-1).children('a').addClass('update-alert')
    $('.works-content-list').children('li').eq(ListLeng-1).children('a').click(function (e) { 
        return false
    });
    //左欄位指定高度
    var MenuListHeight = document.body.clientHeight - HeaderHeight - FooterHeight;
    //左欄位項目數量
    var MenuListLen = $('.works-content-list li').length;
    //左欄位單項高度
    var MenuListHeight = MenuListHeight / MenuListLen;
    //左欄位單項字元高度
    var MenuListBtnHeight = $('.works-content-list li a span').eq(0).height() + $('.works-content-list li a span').eq(1).height();
    //左欄位單項上下留白
    var MenuListBtnPadding = (MenuListHeight - MenuListBtnHeight) / 2;
    $('.works-content-list').css({ 'top': HeaderHeight });
    $('.works-content-area').css({ 'margin-top': HeaderHeight });
    $('.works-content-list').css({ 'height': MenuListHeight });
    $('.works-content-list li a').css({ 'padding-top': MenuListBtnPadding, 'padding-bottom': MenuListBtnPadding });
    $(window).resize(function () {
        var HeaderHeight = $('header').height();
        var FooterHeight = $('footer').height();
        var MenuListHeight = document.body.clientHeight - HeaderHeight - FooterHeight;
        var MenuListLen = $('.works-content-list li').length;
        var MenuListHeight = MenuListHeight / MenuListLen
        var MenuListBtnHeight = $('.works-content-list li a span').eq(0).height() + $('.works-content-list li a span').eq(1).height();
        var MenuListBtnPadding = (MenuListHeight - MenuListBtnHeight) / 2;
        $('.works-content-list').css({ 'top': HeaderHeight });
        $('.works-content-area').css({ 'margin-top': HeaderHeight });
        $('.works-content-list').css({ 'height': MenuListHeight });
        $('.works-content-list li a').css({ 'padding-top': MenuListBtnPadding, 'padding-bottom': MenuListBtnPadding });
    });
});
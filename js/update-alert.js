$(document).ready(function () {
    //更新中提示視窗
    $('.update-alert').on('click', function () {
        $('body').append('<div class="updateing"></div>').css({'overflow-y':'hidden'});
        $('.updateing').append('<div class="updateing-alert"></div>');
        $('.updateing-alert').append('<p>哈哈，還再更新啦<br>是有沒有這麼期待</p><span>點擊任一處關閉</span>');
        setTimeout(() => {
            $('.updateing').fadeIn(1000);
        }, 0);
        return false;
    });
    $('body').on('click','.updateing', function () { 
        $('.updateing').fadeOut(1000);
        setTimeout(() => {
            $('body').css({'overflow-y':'auto'});
            $('.updateing').remove();
        }, 1000);
    });
});
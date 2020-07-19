$(document).ready(function () {
    //更新中提示視窗
    $('.update-alert').click(function (e) { 
        $('.updateing').fadeIn(1000);
        $('body').css({'overflow-y': 'hidden'});
        return false;
    });
    $('body').click(function (e) { 
        $('.updateing').fadeOut(1000);
        $('body').css({'overflow-y': 'auto'});
    });
});
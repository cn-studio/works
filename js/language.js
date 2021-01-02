$(document).ready(function () {
    //多語系
    $('.lan-btn').click(function (e) {
        var WindowScrollTop = $(window).scrollTop();
        var AboutTop = $('.about').offset().top;
        var LanData = $('.lan-btn').data('name');
        var Btn2Status = $('.vision').data('status');
        var Btn2Text = $('.vision').html();
        var Btn3Status = $('.web').data('status');
        var Btn3Text = $('.web').html();
        if (LanData == 'chinese') {
            $('.lan-btn').text('About/ch').data('name', 'english');
            $('.menu > .lan-btn').css('width', '130');
            $('.about-title-en').css('display', 'block');
            $('.about-title-ch').css('display', 'none');
            $('.about').children('p').html('I work in art design.<br><br>I like to study state-of-the-art skill of art design after work. Combining visual element with coding creates brand-new sense organ impact.');
            $('.expertise-area-intro').eq(0).children('h3').html('Design');
            $('.expertise-area-intro').eq(0).children('p').html('Setting layout of aesthetic accurately presents more information to audience');
            $('.expertise-area-intro').eq(1).children('h3').html('Coding');
            $('.expertise-area-intro').eq(1).children('p').html('Using logical coding provides better service experience');
            $('.expertise-area-intro').eq(2).children('h3').html('Illustration');
            $('.expertise-area-intro').eq(2).children('p').html('Create heartwarning stories through text and images');
            $('.experience-area-text').eq(0).children('h3').html('Dept. of Design');
            $('.experience-area-text').eq(0).children('p').html('Graduated From<span></span>');
            $('.experience-area-text').children('a').html('Click This');
            $('.dots-list-area').children('.dots-area').eq(0).children('span').html('About');
            $('.dots-list-area').children('.dots-area').eq(1).children('span').html('Expertise');
            $('.dots-list-area').children('.dots-area').eq(2).children('span').html('Skill');
            $('.dots-list-area').children('.dots-area').eq(3).children('span').html('Experience');
            $('.contact-area').children('p').html('If you have any request,<br>please contact me via the button below<br><br><span>lincn65987@gmail.com<span>');
            $('.contact-area').children('a').html('<span></span>E-mail');
            $('.contact-area').children('span').html('Click anywhere to close');
            $('.mobile-alert').children('p').html('Please follow the instructions <br>to adjust your mobile device <br>to an upright reading');
            if (Btn2Status == 'on' && Btn2Text == '點我') {
                $('.vision').siblings('h3').html('Visual Designer');
                $('.vision').siblings('p').html('Global Fans<span></span>');
                $('.vision').siblings('h3').css({ 'font-family': 'Comfortaa, cursive', 'font-weight': 'normal', 'letter-spacing': '2px' });
                $('.vision').siblings('p').css({ 'font-family': 'Comfortaa, cursive', 'font-weight': 'normal', 'letter-spacing': '1px' });
            }
            if (Btn3Status == 'on' && Btn3Text == '點我') {
                $('.web').siblings('h3').html('Visual Designer');
                $('.web').siblings('p').html('Airiti<span></span>');
                $('.web').siblings('h3').css({ 'font-family': 'Comfortaa, cursive', 'font-weight': 'normal', 'letter-spacing': '2px' });
                $('.web').siblings('p').css({ 'font-family': 'Comfortaa, cursive', 'font-weight': 'normal', 'letter-spacing': '1px' });
            }
            $('footer').children('div').children('span').eq(3).html('Recommended to use the chorme browser');
            $('.about').children('p').css({ 'font-family': 'Comfortaa, cursive', 'letter-spacing': '0.5px' });
            $('.expertise-area-intro').children('h3').css({ 'font-family': 'Comfortaa, cursive', 'font-weight': 'normal', 'letter-spacing': '2px' });
            $('.expertise-area-intro').children('p').css({ 'font-family': 'Comfortaa, cursive', 'letter-spacing': '1px' });
            $('.experience-area-text').eq(0).children('h3').css({ 'font-family': 'Comfortaa, cursive', 'font-weight': 'normal', 'letter-spacing': '2px' });
            $('.experience-area-text').eq(0).children('p').css({ 'font-family': 'Comfortaa, cursive', 'font-weight': 'normal', 'letter-spacing': '1px' });
            $('.experience-area-text').children('a').css({ 'font-family': 'Comfortaa, cursive', 'letter-spacing': '1px' });
            $('footer').children('div').children('span').eq(3).css({ 'font-family': 'Comfortaa, cursive', 'letter-spacing': '0.5px' });
            $('.contact-area').children('p').css({ 'font-family': 'Comfortaa, cursive', 'letter-spacing': '0.5px' });
            $('.contact-area').children('a').css({ 'font-family': 'Comfortaa, cursive', 'letter-spacing': '0.5px' });
            $('.contact-area').children('span').css({ 'font-family': 'Comfortaa, cursive', 'letter-spacing': '0.5px' });
            $('.mobile-alert').children('p').css({ 'font-family': 'Comfortaa, cursive', 'letter-spacing': '0.1px' });
            $('.name').css({ 'font-family': 'Comfortaa, cursive', 'letter-spacing': '0.25px;' });
        } else {
            $('.lan-btn').text('About/en').data('name', 'chinese');
            $('.menu > .lan-btn').css('width', '120');
            $('.about-title-en').css('display', 'none');
            $('.about-title-ch').css('display', 'block');
            $('.about').children('p').html('目前從事美術設計相關的工作內容。<br>工作之餘喜歡研究前端技術，透過程式碼與視覺元素的契合，創造出讓人耳目一新的感官衝擊。')
            $('.expertise-area-intro').eq(0).children('h3').html('視覺設計<span></span>');
            $('.expertise-area-intro').eq(0).children('p').html('藉由美學的安排，精準的將訊息呈現給觀眾');
            $('.expertise-area-intro').eq(1).children('h3').html('前端技術<span></span>');
            $('.expertise-area-intro').eq(1).children('p').html('具邏輯性的程式碼，提供更優良的使用體驗');
            $('.expertise-area-intro').eq(2).children('h3').html('插畫繪製<span></span>');
            $('.expertise-area-intro').eq(2).children('p').html('透過文字與圖像，創造出有溫度的每個故事');
            $('.experience-area-text').eq(0).children('h3').html('設計科系');
            $('.experience-area-text').eq(0).children('p').html('畢業校友<span></span>');
            $('.experience-area-text').children('a').html('點我');
            $('.dots-list-area').children('.dots-area').eq(0).children('span').html('簡介');
            $('.dots-list-area').children('.dots-area').eq(1).children('span').html('專長');
            $('.dots-list-area').children('.dots-area').eq(2).children('span').html('技術');
            $('.dots-list-area').children('.dots-area').eq(3).children('span').html('經歷');
            $('.contact-area').children('p').html('有任何專業上的需求，歡迎透過下方的信箱按鈕與我聯繫。<br><br><span>email : lincn65987@gmail.com</span>');
            $('.contact-area').children('a').html('<span></span>信箱');
            $('.contact-area').children('span').html('點擊按鈕以外的任一處關閉');
            $('.mobile-alert').children('p').html('請依照圖示<br>變更為直立式閱讀');
            if (WindowScrollTop + 150 > AboutTop) {
                $('.about-title-one').removeClass('border-show-one-ch').addClass('typing-show-one-ch');
                $('.about-title-two').addClass('typing-show-two-ch');
            }   else{
                $('.about-title-one').removeClass('typing-show-one-ch').addClass('border-show-one-ch');
                $('.about-title-two').removeClass('typing-show-two-ch');                
            }
            if (Btn2Status == 'on' && Btn2Text == 'Click This') {
                $('.vision').siblings('h3').html('視覺設計');
                $('.vision').siblings('p').html('天盈國際<span></span>');
                $('.vision').siblings('h3').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'bold', 'letter-spacing': '4px' });
                $('.vision').siblings('p').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'normal', 'letter-spacing': '3px' });
            }
            if (Btn3Status == 'on' && Btn3Text == 'Click This') {
                $('.web').siblings('h3').html('視覺設計');
                $('.web').siblings('p').html('華藝數位<span></span>');
                $('.web').siblings('h3').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'bold', 'letter-spacing': '4px' });
                $('.web').siblings('p').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'normal', 'letter-spacing': '3px' });
            }
            $('footer').children('div').children('span').eq(3).html('為保持最佳使用體驗，建議使用Chorme瀏覽器進行瀏覽');
            $('.about').children('p').css({ 'font-family': 'Noto Sans TC, sans-serif', 'letter-spacing': '4px' });
            $('.expertise-area-intro').children('h3').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'bold', 'letter-spacing': '6px' });
            $('.expertise-area-intro').children('p').css({ 'font-family': 'Noto Sans TC, sans-serif', 'letter-spacing': '3px' });
            $('.experience-area-text').eq(0).children('h3').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'bold', 'letter-spacing': '4px' });
            $('.experience-area-text').eq(0).children('p').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'normal', 'letter-spacing': '3px' });
            $('.experience-area-text').children('a').css({ 'font-family': 'Noto Sans TC, sans-serif', 'letter-spacing': '2px' });
            $('footer').children('div').children('span').eq(3).css({ 'font-family': 'Noto Sans TC, sans-serif', 'letter-spacing': '1px' });
            $('.contact-area').children('p').css({ 'font-family': 'Noto Sans TC, sans-serif', 'letter-spacing': '1.5px' });
            $('.contact-area').children('a').css({ 'font-family': 'Noto Sans TC, sans-serif', 'letter-spacing': '2px' });
            $('.contact-area').children('span').css({ 'font-family': 'Noto Sans TC, sans-serif', 'letter-spacing': '1.5px' });
            $('.name').css({ 'font-family': 'Noto Sans TC, sans-serif', 'letter-spacing': '3px' });
        }
        return false;
    });

    $('.student').click(function (e) {
        var VisionBtn = $('.vision').data('status');
        var WebBtn = $('.web').data('status');
        $('.student-img > img:first-child').css({ 'opacity': '1', 'visibility': 'visible' });
        $('.student-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        if (VisionBtn == "off") {
            $('.visual-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        } else {
            $('.visual-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:nth-child(2)').css({ 'opacity': '1', 'visibility': 'visible' });
            $('.visual-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        }
        if (WebBtn == "off") {
            $('.web-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        } else {
            $('.web-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:nth-child(2)').css({ 'opacity': '1', 'visibility': 'visible' });
            $('.web-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        }
        return false;
    });

    $('.vision').click(function (e) {
        var DataBtn = $(this).data('status');
        var DataBtnText = $(this).text();
        var WebBtn = $('.web').data('status');
        $('.visual-img > img:first-child').css({ 'opacity': '1', 'visibility': 'visible' });
        $('.visual-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.visual-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.student-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.student-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        if (DataBtn == 'off' && DataBtnText == '點我') {
            $(this).data('status', 'on');
            $(this).siblings('h3').html('視覺設計');
            $(this).siblings('p').html('天盈國際<span></span>');
            $(this).siblings('h3').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'bold', 'letter-spacing': '4px', 'color': 'rgb(25, 25, 25)' });
            $(this).siblings('p').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'normal', 'letter-spacing': '3px' });
        }
        if (DataBtn == 'off' && DataBtnText == 'Click This') {
            $(this).data('status', 'on');
            $(this).siblings('h3').html('Visual Designer');
            $(this).siblings('p').html('Global Fans<span></span>');
            $(this).siblings('h3').css({ 'font-family': 'Comfortaa, cursive', 'font-weight': 'normal', 'letter-spacing': '2px', 'color': 'rgb(25, 25, 25)' });
            $(this).siblings('p').css({ 'font-family': 'Comfortaa, cursive', 'font-weight': 'normal', 'letter-spacing': '1px' });
        }
        if (WebBtn == 'on') {
            $('.web-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:nth-child(2)').css({ 'opacity': '1', 'visibility': 'visible' });
            $('.web-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        } else {
            $('.web-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        }
        return false;
    });
    $('.web').click(function (e) {
        var DataBtn = $(this).data('status');
        var DataBtnText = $(this).text();
        var VisualBtn = $('.vision').data('status');
        $('.web-img > img:first-child').css({ 'opacity': '1', 'visibility': 'visible' });
        $('.web-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.web-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.student-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.student-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        if (DataBtn == 'off' && DataBtnText == '點我') {
            $(this).data('status', 'on');
            $(this).siblings('h3').html('視覺設計');
            $(this).siblings('p').html('華藝數位<span></span>');
            $(this).siblings('h3').addClass('deep-gray').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'bold', 'letter-spacing': '4px', 'color': 'rgb(25, 25, 25)' });
            $(this).siblings('p').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'normal', 'letter-spacing': '3px' });
        }
        if (DataBtn == 'off' && DataBtnText == 'Click This') {
            $(this).data('status', 'on');
            $(this).siblings('h3').html('Visual Designer');
            $(this).siblings('p').html('Airiti<span></span>');
            $(this).siblings('h3').addClass('deep-gray').css({ 'font-family': 'Comfortaa, cursive', 'font-weight': 'normal', 'letter-spacing': '2px', 'color': 'rgb(25, 25, 25)' });
            $(this).siblings('p').css({ 'font-family': 'Comfortaa, cursive', 'font-weight': 'normal', 'letter-spacing': '1px' });
        }
        if (VisualBtn == 'on') {
            $('.visual-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:nth-child(2)').css({ 'opacity': '1', 'visibility': 'visible' });
            $('.visual-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        } else {
            $('.visual-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        }
        return false;
    });
});
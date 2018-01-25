$(document).ready(function(){  
    // 菜单目录hover
    $(".menu__item").hover(function(){
        $(this).addClass('menu__item_hover_yes').siblings().removeClass('menu__item_hover_yes');
    },function(){
        $(this).removeClass('menu__item_hover_yes');
    });
    // sidebar 飘窗hover
    $(".sidebar-box ul li").hover(function(){
        $(this).children(".side-hoverout").animate({width:"302px"});
    },function(){
        $(this).children(".side-hoverout").animate({width:"0px"});
    });
    // 返回顶部
    $(window).scroll(function () {
        if ($(window).scrollTop() >350) {
            $(".page__back-to-top").addClass('page__back-to-top_active_yes');
        }else{
            $(".page__back-to-top").removeClass('page__back-to-top_active_yes');
        }
    });
    // 描点链接平滑移动
    $('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },1000);
                return false;
            }
        }
    });
}); 
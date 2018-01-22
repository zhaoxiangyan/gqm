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
}); 
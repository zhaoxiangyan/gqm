$(document).ready(function(){  
    // 货币对 商品切换
    $(".tabs__title").click(function(){
       $(this).addClass('tabs__title_active_yes').siblings().removeClass('tabs__title_active_yes');
       $(this).siblings().removeClass('tabs__body_active_yes');
       $(this).next().addClass('tabs__body_active_yes');
    });
    // sidebar 飘窗hover
    $(".sidebar-box ul li").hover(function(){
        $(this).children(".side-hoverout").animate({width:"202px"});
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
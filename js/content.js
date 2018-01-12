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
    // 流动性合作伙伴
    function sscroll(obj){
        /*往左*/ 
        var tmp = (obj.scrollLeft)++; 
        if (obj.scrollLeft == tmp) { 
        obj.innerHTML += obj.innerHTML; 
        } 
        // if (obj.scrollLeft >= obj.firstChild.offsetHeight) { 
        // obj.scrollLeft = 0; 
        // } 
    };
    setInterval(()=>{sscroll(document.getElementById('scrollobj'))}, 10);
    // setInterval(sscroll(document.getElementById('scrollobj')),10);
    $('.ea_plantform_min_list_mid_title').click(function(){
        $(".ea_plantform_min_list .ea_plantform_min_list_mid").eq($(this).index()).show().siblings().hide();
    });
}); 
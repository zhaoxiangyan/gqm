$(document).ready(function(){  
    // 货币对 商品切换
    $(".tabs__title").click(function(){
       $(this).addClass('tabs__title_active_yes').siblings().removeClass('tabs__title_active_yes');
       $(this).siblings().removeClass('tabs__body_active_yes');
       $(this).next().addClass('tabs__body_active_yes');
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
    // 流动性合作伙伴
    function sscroll(obj){
        /*往左*/ 
        var tmp = (obj.scrollLeft)++; 
        if (obj.scrollLeft == tmp) { 
        obj.innerHTML += obj.innerHTML; 
        } 
    };
    setInterval(()=>{sscroll(document.getElementById('scrollobj'))}, 10);
    // setInterval(sscroll(document.getElementById('scrollobj')),10);
    $('.ea_plantform_min_list_mid_title').click(function(){
        $(".ea_plantform_min_list .ea_plantform_min_list_mid").eq($(this).index()).show().siblings().hide();
    });
    // 视频播放器播放视频
    // 点击视频目录,弹出播放器
    $(".video__div a").click(function(){
        var videosrc = $(this).data("src");
        if(typeof(videosrc) == "string"){
        $("video").attr("src",videosrc);
        $("video").trigger('play');
        $("#video_bg").show();
        $("html").css("overflow","hidden");
        }
    });
    //  关闭播放器按钮
    $(".video button").click(function(){
        $("video").trigger('pause');
        $("#video_bg").hide();
        $("html").css("overflow","auto");
    });
    // 明星投资者轮播
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:true
    })
}); 
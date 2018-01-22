$(document).ready(function(){  
    // 货币对 商品切换
    $(".tabs__title").click(function(){
       $(this).addClass('tabs__title_active_yes').siblings().removeClass('tabs__title_active_yes');
       $(this).siblings().removeClass('tabs__body_active_yes');
       $(this).next().addClass('tabs__body_active_yes');
    });
    // 流动性合作伙伴
    function sscroll(){
        /*往左*/ 
        var obj = document.getElementById('scrollobj');
        var tmp = (obj.scrollLeft)++; 
        if (obj.scrollLeft == tmp) { 
        obj.innerHTML += obj.innerHTML; 
        } 
    };
    // var scrobj = document.getElementById('scrollobj');
    // setInterval(()=>{sscroll(document.getElementById('scrollobj'))}, 10);
    setInterval(sscroll,10);
    $('.ea_plantform_min_list_mid_title').click(function(){
        $(".ea_plantform_min_list .ea_plantform_min_list_mid").eq($(this).index()).show().siblings().hide();
    });
    // 五大交易亮点hover
    $(".ea_product_min_goods_part").hover(function(){
        $(this).find(".ea_product_min_goods_before").slideUp();
        $(this).find(".ea_product_min_goods_after").slideDown();
    },function(){
        $(this).find(".ea_product_min_goods_before").slideDown();
        $(this).find(".ea_product_min_goods_after").slideUp();
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
    $("#box1").swiper({time:2000,base:true,ratio:19/8,auto:true}); 
}); 
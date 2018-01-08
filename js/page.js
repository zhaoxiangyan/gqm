$(function(){
    var index = 0;
    var timer = null;
    /****当鼠标滑动到列表索引按钮时，显示当前的图片*****/
    $(".promoblock__controls button").hover(function() {
        clearInterval(timer);
        index = $(this).index();
        //alert(index);
        $(".promoblock__items li").eq(index).addClass("promoblock__item_active_yes").siblings().removeClass("promoblock__item_active_yes");
        $(this).addClass("promoblock__control_state_active").siblings().removeClass("promoblock__control_state_active");
        $(".promoblock__items li").eq(index).css('opacity', 0.5).animate({
            'opacity': 1
        }, 500);
        $(".promoblock__items li").eq(index).siblings().css('opacity', 0);
    }, function() {
        autoplay();
    });
    autoplay();
    /*****自动播放图片的定时器****/
    function autoplay() {
        timer = setInterval(function() {
            index++;
            if (index > 4) {
                index = 0;
            }
            $(".promoblock__items li").eq(index).addClass("promoblock__item_active_yes").siblings().removeClass("promoblock__item_active_yes");
            $(".promoblock__controls button").eq(index).addClass("promoblock__control_state_active").siblings().removeClass("promoblock__control_state_active");
            $(".promoblock__items li").eq(index).css('opacity', 0.5).animate({
                'opacity': 1
            }, 500);
            $(".promoblock__items li").eq(index).siblings().css('opacity', 0);
        }, 2000);
    }
});
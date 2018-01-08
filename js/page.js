$(function(){
  autoplay();
  /*****自动播放图片的定时器****/
  function autoplay() {
    var index = 0;
    var timer = null;
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
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
    };


    // 滚动交易数量
    var sum = 12345678913;
    $(function() {
        setInterval(function(){
            show_num1(sum)
        },2000);
    });
    function show_num1(n) {
        sum=sum+Math.round(Math.random()*1000);
        console.log(n);
        var it = $(".number__box span:not(.comma)");
        var len = String(n).length;
        for(var i = 0; i < len; i++) {
            // if(it.length <= i) {
            //     $(".real_account .number__box").append("<span></span>");
            // }
            var num = String(n).charAt(i);
            //根据数字图片的高度设置相应的值
            var y = -parseInt(num) * 58;
            var obj = $(".number__box span:not(.comma)").eq(i);
            obj.animate({
                // backgroundPosition: '(0 ' + String(y) + 'px)'
                "backgroundPositionX":"0px",
                "backgroundPositionY":String(y)+'px'
            }, 'slow', 'swing');
        }
        // $("#cur_num").val(n);
        // console.log(n+'后');
    };
});
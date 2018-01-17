$(document).ready(function(){  
    // 菜单目录hover
    $(".menu__item").hover(function(){
        $(this).addClass('menu__item_hover_yes').siblings().removeClass('menu__item_hover_yes');
    },function(){
        $(this).removeClass('menu__item_hover_yes');
    });
    // 五大交易亮点hover
    $(".ea_product_min_goods_part").hover(function(){
        $(this).find(".ea_product_min_goods_before").slideUp();
        $(this).find(".ea_product_min_goods_after").slideDown();
    },function(){
        $(this).find(".ea_product_min_goods_before").slideDown();
        $(this).find(".ea_product_min_goods_after").slideUp();
    });
    // 智远圈hover
    $(".video__div").hover(function(){
        $(this).find(".mask").slideDown('fast');
    },function(){
        $(this).find(".mask").hide();
    });
}); 
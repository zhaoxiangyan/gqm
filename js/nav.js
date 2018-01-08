$(document).ready(function(){  
    // 菜单目录hover
    $(".menu__item").hover(function(){
        $(this).addClass('menu__item_hover_yes').siblings().removeClass('menu__item_hover_yes');
    },function(){
        $(this).removeClass('menu__item_hover_yes');
    });
}); 
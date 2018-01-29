  //   社交交易tab
  $(".social_transaction_table_toggle li").click(function(){
     $(this).addClass('active').siblings().removeClass('active');
     $('table.social_table').eq($(this).index()).addClass('active').siblings().removeClass('active');
  });
  // 保证金tabs
  $(".tabs_header li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs_list .tabs_body').eq($(this).index()).addClass('active').siblings().removeClass('active');
  });
  $(".tabs_body ul li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $(this).parent().parent().children('table').eq($(this).index()).addClass('active').siblings().removeClass('active');
  });
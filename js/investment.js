  //   PAMM账户排行榜tab
  $(".pamm_list_table_toggle li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('table.pamm_list_table').eq($(this).index()).addClass('active').siblings().removeClass('active');
  });
  // 投资条件tabs
  $(".tabs_header li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs_list .tabs_body').eq($(this).index()).addClass('active').siblings().removeClass('active');
    $('.investment_terms_attention_text_list').eq($(this).index()).addClass('active').siblings('.investment_terms_attention_text_list').removeClass('active');
  });

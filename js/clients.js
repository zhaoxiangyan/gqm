    // 常见问题（出入金）
    $(".deposit_problem_list li p.problem_title").click(function(){
          $(this).toggleClass('active');
          $(this).next().slideToggle();
    });
    // 常用词汇表
    $(".letter_content_div div span a").click(function(){
          $(this).toggleClass('active');
          $(this).parent().next().slideToggle();
    });
    // 知识库
    $(".knowledge_list li p a").click(function(){
          $(this).parent().parent().toggleClass('active');
          $(this).parent().parent().next().slideToggle();
          $(this).parent().parent().parent().siblings().children('.li_title_div').removeClass('active');
          $(this).parent().parent().parent().siblings().children('.li_content_div').slideUp();
    });
 
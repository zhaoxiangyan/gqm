    // 常见问题
    $(".problem_list li p.problem_title").click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });
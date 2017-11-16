$(function(){
    menushow();
    menulist();
})
function menushow(){
    var display='';
    $(".first").click(function(){
        $(".first span").removeClass('active');
        $('.first').find('img').attr("src","img/arrow-c.png");
        $(this).find('span').addClass("active");
        display=$(this).next().css('display');
        if(display=='none'){
            $(".secondnav").slideUp();
            $(this).next().slideDown();
            $(this).find('img').attr("src","img/arrow-d.png");
        }else if(display=='block'){
            $(this).next().slideUp();
            $(this).find('img').attr("src","img/arrow-c.png");
        }else{
            $(".secondnav").slideUp();
        }
    })
}
function menulist(){
    $(".secondnav a").click(function(){
        $(".secondnav li").removeClass();
        $(this).parent("li").addClass("secliactive");
    })
}
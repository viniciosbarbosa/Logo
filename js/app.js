$(window).scroll(function(){
    $("#menuLogo").css('top', $(this).scrollTop() + "px");
});

$(window).scroll(function(){
    if($(this).scrollTop() > 20 ){
        $("#btnTop").css('display', 'block');
      
    }
    else{
        $("#btnTop").css('display', 'none');
    } 
});

$("#btnTop").click(function (){
    $("html , body").animate({scrollTop:"0"}, 300);
    return false;
})


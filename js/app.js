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


$(".txtBalao").on(function(){
    $(".imgbalaohover").show();
    $(".txtBalaohover").show();
    return false;
})

$("#banner6").on(function(){
    $(".imgbalaohover").hide();
    $(".txtBalaohover").hide();
    return false;
})
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


function sumirTxt() {
    $("#msg").css({ "color" : "#B57AD2" , "transition" : "0.3s" , "display" : "initial"});
    $("#msg2").css({ "color" : "transparent" , "transition" : "0.3s" });
    
    
};

function voltartxt(){
    $("#msg2").css({ "color" : "#B57AD2" , "transition" : "0.3s" ,"display" : "none"});
    $("#msg").css({ "color" : "transparent" , "transition" : "0.3s" });
}
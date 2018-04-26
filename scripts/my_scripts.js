$(document).ready(function(){
    $("#ferdighter").hide();
$("#opne").click(function(){
$("#ferdighter").show();
$("#opne").hide();

});
$("#lukke").click(function(){
    $("#ferdighter").hide();
    $("#opne").show();
    
    });

    $("#ferdighter td").mouseenter(function(){
        $(this).css("background-color", "#cccccc");
      
      
       
    });
    $("#ferdighter td").mouseleave(function(){
        $(this).css("background-color","#f4f4f4;");
       
    });
    
    
   

});
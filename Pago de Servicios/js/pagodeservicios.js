$(document).ready(function(){
  dropIsra();

  //Transición paso 2
  $("#siguiente").click(function(){
    $("#step1").fadeOut("slow",function(){
      $("#step2").fadeIn("slow");       
      });
  });
      
  $("#siguiente2").click(function(){
    $("#step2").fadeOut("slow",function(){
      $("#step3").fadeIn("slow");       
      });
  });
  
  $("#btnreturn").click(function(){
    $("#step3").fadeOut("slow",function(){
      $("#step1").fadeIn("slow");       
      });
  });
});


		

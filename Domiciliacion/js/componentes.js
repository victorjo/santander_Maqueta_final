$(function(){

           	/*$("#on").click(function(){
           		$("#switchbox > div").animate({
           			left:"-=45"
           			},"fast");
           		$("#form").fadeOut("slow");
           		});
           		
           	 $("#off").click(function(){
           		$("#switchbox > div").animate({
           			left:"+=45"
           			},"fast");
           		$("#form").fadeIn("slow");
           		});
           		*/

           		
});


function switchFunc(object){

  var switchO = '<div style="position:relative;width:500px;">';
         switchO += '<div class="on">Tarjeta</div>';
         switchO += '<div class="tope"></div>';
         switchO += '<div class="off">Servicio</div>';
         switchO += '</div>';

  var container = $("#"+object);

  container.html(switchO); 
    container.children("div:first").find(".on").click(function(){
    container.children("div").animate({
    left:"-=45"
    },"fast");
  //$("#form").fadeOut("slow");
  });

  container.children("div:first").find(".off").click(function(){
    container.children("div").animate({
    left:"+=45"
    },"fast");
  //$("#form").fadeIn("slow");
  });
}

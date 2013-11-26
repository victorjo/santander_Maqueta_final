/*Funhcion switch (label de mas de dos digitos)--- Flujo: Domiciliaciones Ã³ mas */
function switchFuncDomMas(object,descripcion1,descripcion2,tipoModulo){

var switchO = '<div style="position:relative;width:230px;">';
         switchO += '<div class="on'+tipoModulo+'">'+descripcion1+'</div>';
         switchO += '<div class="tope'+tipoModulo+'"></div>';
         switchO += '<div class="off'+tipoModulo+'">'+descripcion2+'</div>';
         switchO += '</div>';

  var container = $("#"+object);

  container.html(switchO); 
  
  container.children("div:first").find(".on"+tipoModulo).click(function(){
    container.children("div").animate({
    left:"-=80"
    },"fast");
  });

  container.children("div:first").find(".off"+tipoModulo).click(function(){
    container.children("div").animate({
    left:"+=80"
    },"fast");
  });
  
  $("#infobtn").click(function(){
		$("#info").fadeToggle("slow");
       });
       
  $("#downico1").click(function(){
  		$("#downico1").hide();
  		$("#upico1").show();
  		$("#select1").show("slow");
  		});
  		
  $("#upico1").click(function(){
  		$("#upico1").hide();
  		$("#downico1").show();
  		$("#select1").hide("slow");
  		});
  
  $("#downico2").click(function(){
  		$("#downico2").hide();
  		$("#upico2").show();
  		$("#select2").show("slow");
  		});
  		
  $("#upico2").click(function(){
  		$("#upico2").hide();
  		$("#downico2").show();
  		$("#select2").hide("slow");
  		});


  		

}

       
            	 
           

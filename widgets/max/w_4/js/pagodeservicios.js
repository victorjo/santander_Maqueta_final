var msjAlert = ["","En pago de servicios usted puedes realizar busquedas avanzadas.","Es importante que verifique los datos antes de confirmar.","Para finalizar puede guardar una copia de su servicio efectuado."];

$(document).ready(function(){
	$('#confirmar_token').click(function(){
		creaOverlay("#fff","#widampliado",1);
		creaToken("modalOver","javascript:destruyeOver();","javascript: $('#step3').hide();$('#step4').show();$('#modalOver').fadeOut();",null,function(){$(".steps").replaceWith("<img src='img/paso_3.png' class='steps'>");});
	});

	

	$('#confirmar_token').click(function(){
		creaToken("modalOver","javascript:destruyeOver();","javascript: $('#step3').hide();$('#step4').show();$('#modalOver').fadeOut();",null,function(){$(".steps").replaceWith("<img src='img/paso_3.png' class='steps'>");});
	});

});

$('.link').click(function(){
		alert('...');
		creaOverlay("#fff","#widampliado",1);
		creaTelCel('modalOver',"destruyeOver();",'conf_token();','');
	});
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
  
  };


	
//Transicion entre operaciones
$("#navegador > ul > :nth-child(1)").click(function(){
	cambiaFlujo("#step1");
});


$("#navegador > ul > :nth-child(2)").click(function(){
	cambiaFlujo("#step4");
});

$("#navegador > ul > :nth-child(3)").click(function(){
	cambiaFlujo("#step7");
});

		



function cambiaFlujo(step){
	
	var npasos = $(".pasos").size();
		$(".pasos").each(function(index){
			if((++index) == npasos){
				$(this).fadeOut("slow",function(){
					$(step).delay(1000).fadeIn();
				});
	
			}else{
				$(this).fadeOut("slow");
			}
		})

}

function avanzar(stepActual,stepFinal,num){
	$("#step"+stepActual).fadeOut("slow",function(){
			$("#step"+stepFinal).fadeIn("slow");				
			});
	$(".steps").replaceWith("<img src='img/paso_"+num+".png' class='steps'>");
}
       
function conf_token(){
	creaToken("modalOver","javascript:destruyeOver();","javascript: $('#step3').show();$('#modalOver').fadeOut();",null,function(){$(".steps").replaceWith("<img src='img/paso_3.png' class='steps'>");});
}            	 

           

var msjAlert = ["","En pago de servicios usted puedes realizar busquedas avanzadas.","Es importante que verifique los datos antes de confirmar.","Para finalizar puede guardar una copia de su servicio efectuado."];
var ddData = [
    {
        text: "Seleccionar",
        value: 1,
        selected: false,
    },
    {
        text: "Seleccionar",
        value: 2,
        selected: false,
        
    },
    {
        text: "Seleccionar",
        value: 3,
        selected: false,
    },
    {
        text: "Seleccionar",
        value: 4,
        selected: false,
    }
];

$(function(){	

      $("#prueba").ddslick({
		 data: ddData,
		 width: 418,
		 background: "#f7f7f7",
		imagePosition: "left",
		selectText: "Seleccionar",
		onSelected: function (data) {
		console.log(data);
		}
	});

	 $(".dd1 select").ddslick({
		 data: ddData,
		 width: 418,
		 background: "#f7f7f7",
		imagePosition: "left",
		selectText: "Seleccionar",
		onSelected: function (data) {
		console.log(data);
		}
	});
    
     $(".dd2 select").ddslick({
   		 data: ddData,
   		 width: 318,
   		 background: "#f7f7f7",
    	imagePosition: "left",
    	selectText: "Seleccionar",
   		 onSelected: function (data) {
        console.log(data);
    	}
    	});	
    	
     $(".dd3 select").ddslick({
   		 data: ddData,
   		 width: 318,
   		 background: "#f7f7f7",
    	imagePosition: "left",
    	selectText: "Seleccionar",
   		 onSelected: function (data) {
        console.log(data);
    	}
	});


});


$(document).ready(function(){

	
	ocultaSteps(6);
	$('#confirmar_token').click(function(){
		creaOverlay("#fff","#widampliado",1);
		creaToken("modalOver","javascript:destruyeOver();","javascript: $('#step3').hide();$('#step4').show();$('#modalOver').fadeOut();",null,function(){$(".steps").replaceWith("<img src='img/paso_3.png' class='steps'>");});
	});

	$('.link').click(function(){
		creaOverlay("#fff","#widampliado",1);
		creaTelCel('modalOver',"destruyeOver();",'conf_token();','');
	});


	$('#confirmar_token').click(function(){
		creaToken("modalOver","javascript:destruyeOver();","javascript: $('#step3').hide();$('#step4').show();$('#modalOver').fadeOut();",null,function(){$(".steps").replaceWith("<img src='img/paso_3.png' class='steps'>");});
	});

	//Transicion entre operaciones
	$("#navegador > ul > :nth-child(1)").click(function(){
		cambiaFlujo("#step1");
		ocultaSteps(5);
	});


	$("#navegador > ul > :nth-child(2)").click(function(){
		cambiaFlujo("#step5");
		ocultaSteps(5);
	});

	$("#navegador > ul > :nth-child(3)").click(function(){
		cambiaFlujo("#step6");
		ocultaSteps(5);
	});

	/*--- Funcionalidad flujo: Pago de servicios ----*/

	$(".radiobtnPago").click(function(){
        $(".radiobtnPago").removeClass("radiobtn_select");
        $(this).addClass("radiobtn_select");

	});

	$(".radiobtnBaja").click(function(){
        $(".radiobtnBaja").removeClass("radiobtn_select");
        $(this).addClass("radiobtn_select");

	});
	
	$(".switchLabel").click(function(){
		$(".switchSlide").animate({
			"left":"-=39px"
			},"fast");
		$(".dateInput").addClass("dateInputInactive");
		$(".notificacion").hide();
		
	});
	
	$(".switchLabelR").click(function(){
		$(".switchSlide").animate({
			"left":"+=39px"
			},"fast");
		$(".dateInput").removeClass("dateInputInactive");
		$(".notificacion").show();
	});
	/*--- Fin Funcionalidad flujo: Pago de servicios ----*/

	$(".info").click(function(){
		$(this).mouseleave(function(){
			$(".smackdown2").fadeOut("fast");
			});
		$(".smackdown2").fadeToggle("fast");
		
		});
	$(".deshabilitado").mouseenter(function(){
		$(".smackdown").fadeIn("fast");
		});
	$(".deshabilitado").mouseleave(function(){
		$(".smackdown").fadeOut("fast");
		});

});


function avanzar(stepActual,stepFinal,num){
	$("#step"+stepActual).fadeOut("slow",function(){
			$("#step"+stepFinal).fadeIn("slow");				
			});
	$(".steps").replaceWith("<img src='img/paso_"+num+".png' class='steps'>");
}


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

function ocultaSteps(num_Step){
	for(var i=2;i<=num_Step; i++){
		$('#step'+i).hide();
	}
}
       
function conf_token(){
	creaToken("modalOver","javascript:destruyeOver();","javascript: $('#step3').show();$('#modalOver').fadeOut();",null,function(){$(".steps").replaceWith("<img src='img/paso_3.png' class='steps'>");});
}            	 

           

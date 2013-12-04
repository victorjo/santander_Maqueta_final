$(document).ready(function(){
	omniBox("autocompleteQ",cards);
	omniBox("autocompleteQ1",cards);
	omniBox("autocompleteQ2",cards);
	omniBox("autocompleteQ3",cards);
	omniBox("autocompleteQ4",cards);
	omniBox("autocompleteQ5",cards);
	switchFuncDomMas("switchbox","Si","No","Dom");
	switchFuncDomMas("switchbox1","Si","No","Dom");
	switchFuncDomMas("switchbox2","Si","No","Dom");
	ocultaSteps(15);
});

function cambiaPasoImg(){
	$("#stepbar img").attr("src","../img/fake/pasos/paso2.png");
}

function backPasoImg(){
	$("#stepbar img").attr("src","../img/fake/pasos/paso1.png");
}

/** funcionalidad de botones Continuar y atras**/
	/*********  INICIO Transiciones de flujo: Entre Cuentas 
Santander **********/
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

/*Transiciones de flujo (atras): Domiciliación de servicios*/
	$("#regresar").click(function(){
		$("#step2").fadeOut("slow",function(){
			$("#step1").fadeIn("slow");				
			});
	});
/*********  FIN Transiciones de flujo(1): Entre Cuentas 
Santander **********/

$("#siguiente3").click(function(){
		$("#step4").fadeOut("slow",function(){
			$("#step5").fadeIn("slow");				
			});
	});

$("#siguiente4").click(function(){
		$("#step5").fadeOut("slow",function(){
			$("#step6").fadeIn("slow");				
			});
	});

$("#regresar2").click(function(){
		$("#step6").fadeOut("slow",function(){
			$("#step5").fadeIn("slow");				
			});
	});


//Transicion entre operaciones
$("#navegador > ul > :nth-child(1)").click(function(){
	cambiaFlujo("#step1");
});

$("#navegador > ul > :nth-child(2)").click(function(){
	backPasoImg();
	cambiaFlujo("#step4");
});

/*($("#navegador > ul > :nth-child(3)").click(function(){
	cambiaFlujo("#step10");
});*/

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

$("#btn1").on("click", function(){
	creaOverlay("#000","#contenido",1);
	insertHTML($("#contenido2").html(),"modalOver");
	
	//$("#contenido2").fadeIn();

});

function insertHTML(html,contenedor){
	$("#"+contenedor).append(html);
}

function follow(){
	/*if ($("#token").val()==0){
		alert("Debe ingresar su numero de TOKEN");
		
	}*/
	
	destruyeOver();
	cambiaFlujo("#step7");
	
}
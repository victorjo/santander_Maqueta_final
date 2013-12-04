$(document).ready(function(){
	omniBox("autocompleteQ",cards);
	omniBox("autocompleteQ1",cards);
	omniBox("autocompleteQ2",cards);
	omniBox("autocompleteQ3",cards);
	omniBox("autocompleteQ4",cards);
	omniBox("autocompleteQ5",cards);
	switchFuncDomMas("switchbox","Si","No","Dom");
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

/*********  FIN Transiciones de flujo(1): Entre Cuentas 
Santander **********/
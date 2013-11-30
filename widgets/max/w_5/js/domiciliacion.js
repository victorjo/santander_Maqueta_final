$(document).ready(function(){

	//Carga de datos para arreglo dinámico
	
	
	ocultaSteps(26);
	


	/*funcionalidad clic en boton info para mostrar imagen*/
	$("#infobtn").click(function(){
			$("#info").fadeToggle("slow");
	 });

	/** funcionalidad de botones Continuar y atras**/
	/*********  INICIO Transiciones de flujo: Domiciliación de servicios **********/
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

	$("#siguiente3").click(function(){
		$("#step3").fadeOut("slow",function(){
			$("#step4").fadeIn("slow");				
			});
	});
	

	/*Transiciones de flujo (atras): Domiciliación de servicios*/
	$("#regresar").click(function(){
		$("#step2").fadeOut("slow",function(){
			$("#step1").fadeIn("slow");				
			});
	});

	/*********  FIN Transiciones de flujo(1): Domiciliación de servicios **********/


	/*********  INICIO Transiciones de flujo(2): Domiciliación de tarjeta de credito **********/
	$("#siguiente4").click(function(){
		$("#step5").fadeOut("slow",function(){
			$("#step6").fadeIn("slow");				
			});
	});

	$("#siguiente5").click(function(){
		$("#step6").fadeOut("slow",function(){
			$("#step7").fadeIn("slow");				
			});
	});

	$("#siguiente6").click(function(){
		$("#step7").fadeOut("slow",function(){
			$("#step8").fadeIn("slow");				
			});
	});

	$("#siguiente7").click(function(){
		$("#step8").fadeOut("slow",function(){
			$("#step9").fadeIn("slow");				
			});
	});

	/*Transiciones de flujo (atras): Domiciliación de tarjeta de credito */
	$("#regresar2").click(function(){
		$("#step7").fadeOut("slow",function(){
			$("#step6").fadeIn("slow");				
			});
	});

	/*********  FIN Transiciones de flujo(2): Domiciliación de tarjeta de credito **********/

	/*********  INICIO Transiciones de flujo(3) : Consulta / Modificacion y cancelacion **********/
	$("#siguiente8").click(function(){
		$("#step10").fadeOut("slow",function(){
			$("#step11").fadeIn("slow");				
			});
	});

	$("#siguiente9").click(function(){
		$("#step11").fadeOut("slow",function(){
			$("#step12").fadeIn("slow");				
			});
	});

	$("#siguiente10").click(function(){
		$("#step12").fadeOut("slow",function(){
			$("#step13").fadeIn("slow");				
			});
	});

	$("#siguiente11").click(function(){
		$("#step13").fadeOut("slow",function(){
			$("#step14").fadeIn("slow");				
			});
	});

	/*Transiciones de flujo (atras): Consulta / Modificacion y cancelacion */
	$("#regresar3").click(function(){
		$("#step12").fadeOut("slow",function(){
			$("#step11").fadeIn("slow");				
			});
	});
	/*********  FIN Transiciones de flujo(3): Consulta / Modificacion y cancelacion **********/

	//Transicion entre operaciones
	$("#navegador > ul > :nth-child(1)").click(function(){
		alert("aqui");
	});

	$("#navegador > ul > :nth-child(2)").click(function(){
		$("#contenido > div > div").fadeOut(function(){
			$("#step4").fadeIn();
			});
	});
});

/*Mostrara el step 1, mientras que ocultara los demás steps apartir del 2*/
function ocultaSteps(num_Step){
	for(var i=2;i<=num_Step; i++){
		$('#step'+i).hide();
	}
}



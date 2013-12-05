$(document).ready(function(){
	alert("esta entrando a su js");
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

	//Funciones de consulta
	$( "#nav" ).menu({position: {at: "left bottom"}});
		$('#circulo').mouseover(function(){
			 $('.imagen').attr('src','../../img/interfaz/paginador_encendido.png');
		});

		$('.activo2').click(function(){
			 $(this).attr('src','../../img/iconos/favorito_on.png');
		});

		//programada
		$('#prog').click(function(){
			$('#ok2').hide();	
			$('#ok1').show();
			$('.cambio').text('Programada');
		});

		//Realizada
		$('#rel').click(function(){
			$('#ok1').hide();	
			$('#ok2').show();
			 $('.cambio').text('Realizada');
		});

		//funcionalidad de dias
		$('#3d,#7d,#1m,#3m').click(function(){
			 
			 $('.dias').html("&nbsp;en&nbsp;"+$(this).text());
		});
});

function cambiaPasoImg(){
	$("#stepbar img").attr("src","../img/fake/pasos/paso2.png");
}

function cambiaPasoImg3(){
	$("#stepbar img").attr("src","../img/fake/pasos/paso3.png");
}
function backPasoImg(){
	$("#stepbar img").attr("src","../img/fake/pasos/paso1.png");
}

function quitaPasos(){
	$("#stepbar img").attr("src","");
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

//dar de alta y baja una transferencia
	// ALTA
	$("#darAlta").click(function(){
		backPasoImg();
		$("#step8").fadeOut("slow",function(){
			$("#step9").fadeIn("slow");				
			});
	});

	$("#siguiente5").click(function(){
		cambiaPasoImg();
		$("#step9").fadeOut("slow",function(){
			$("#step10").fadeIn("slow");				
			});
	});

	$("#siguiente6").click(function(){
		cambiaPasoImg3();
		$("#step10").fadeOut("slow",function(){
			$("#step11").fadeIn("slow");				
			});
	});

	$("#regresar3").click(function(){
		backPasoImg();
		$("#step10").fadeOut("slow",function(){
			$("#step9").fadeIn("slow");				
			});
	});

	//BAJA

	$("#darBaja").click(function(){
		$("#step8").fadeOut("slow",function(){
			$("#step12").fadeIn("slow");				
			});
	});

	$("#regresar4").click(function(){
		$("#step12").fadeOut("slow",function(){
			$("#step8").fadeIn("slow");				
			});
	});

	$("#siguiente7").click(function(){
		$("#step12").fadeOut("slow",function(){
			$("#step13").fadeIn("slow");				
			});
	});

	$("#finAlta").click(function(){
		quitaPasos();
		$("#step11").fadeOut("slow",function(){
			$("#step8").fadeIn("slow");				
			});
	});

	$("#finBaja").click(function(){
		quitaPasos();
		$("#step13").fadeOut("slow",function(){
			$("#step8").fadeIn("slow");				
			});
	});


//fin dar de alta una transferencia
//Transicion entre operaciones
$("#navegador > ul > :nth-child(1)").click(function(){
	backPasoImg();
	cambiaFlujo("#step1");
});

$("#navegador > ul > :nth-child(2)").click(function(){
	backPasoImg();
	cambiaFlujo("#step4");
});

$("#navegador > ul > :nth-child(3)").click(function(){
	quitaPasos();
	cambiaFlujo("#step8");
});

$("#navegador > ul > :nth-child(4)").click(function(){
	quitaPasos();
	cambiaFlujo("#step14");
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
var msjAlert = ["","Realice sus transferencias entre sus cuentas Santander desde aquí.","Por favor compuebe que la información es correcta antes de confirmar","La operación se ha realizado correctamente.","Por favor compruebe que la información es correcta antes de confirmar"]




$(document).ready(function(){

	creaToken('modalContenido2','destruyeOver();','cambiaPasoImg3();changeComment(3);follow();','data-onclicio="follow();cambiaPasoImg3();"');

	omniBox("autocompleteQ",cards);
	omniBox("autocompleteQ1",cards);
	omniBox("autocompleteQ2",cards);
	omniBox("autocompleteQ3",cards);
	omniBox("autocompleteQ4",cards);
	omniBox("autocompleteQ5",cards);
	switchFuncDomMas("switchbox","No","Si","Dom");
	switchFuncDomMas("switchbox1","No","Si","Dom");
	switchFuncDomMas("switchbox2","No","Si","Dom");
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

/****************************************************************************************************************************/




			
			$(".btnaction").click(function(){

				if ($(this).hasClass("btnaction2")) {
					$(this).removeClass("btnaction2");
				}else{
					$(this).addClass("btnaction2");
				}
				$("#consultas, #treg").slideToggle("slow");
				$("#altas").slideUp("slow");
				$(".hidde").slideToggle("slow");


			});



			/*$(".btnaction2").click(function(){

				if ($(this).hasClass("btnactionx")) {
					$(this).removeClass("btnactionx");
				}else{
					$(this).addClass("btnactionx");
				}
				$("#altas").slideToggle("slow");
				$(".hidde").slideUp("slow");
				$("#consultas, #treg").slideUp("slow");
				$(".btnaction").addClass("btnaction2");

			});*/

						
			$("#r1").click(function(){
				$("#confel").slideToggle("slow");
				$(".iconos ul > li:nth-of-type(3),.iconos ul > li:nth-of-type(4),.iconos ul > li:nth-of-type(5)").slideToggle("slow");
				$(".main ul > li:nth-of-type(3),.main ul > li:nth-of-type(4)").slideToggle("slow");
				if ($(this).hasClass("radselect")) {
					$(this).removeClass("radselect");
				}else{
					$(this).addClass("radselect");
				}
				
			});
			$("#r2").click(function(){
				$("#confel").slideToggle("slow");
				$(".iconos ul > li:nth-of-type(4),.iconos ul > li:nth-of-type(5)").slideToggle("slow");
				$(".main ul > li:nth-of-type(4)").slideToggle("slow");
				if ($(this).hasClass("radselect")) {
					$(this).removeClass("radselect");
				}else{
					$(this).addClass("radselect");
				}


			});
				$("#r3").click(function(){
				$("#confel").slideToggle("slow");
				if ($(this).hasClass("radselect")) {
					$(this).removeClass("radselect");
				}else{
					$(this).addClass("radselect");
				}
			
			});

			////////////////////////////////////////////////

			$("#r5").click(function(){
				
				$("#save").slideToggle("slow");
				$(".textedit").slideToggle("slow");
				$(".textedit #text1").attr("placeholder","1234****5678");
				$(".textedit #text2").attr("placeholder","Adrian Moráles");
				$(".textedit #text3").attr("placeholder","Adrian Moráles");
				$(".textedit #text4").attr("placeholder","Banamex");
				//alert(pl);
				//$(".main ul > li:nth-of-type(5)").slideToggle("slow");
				$(".iconos ul > li:nth-of-type(3),.iconos ul > li:nth-of-type(4),.iconos ul > li:nth-of-type(5)").slideToggle("slow");
				$(".main ul > li:nth-of-type(3),.main ul > li:nth-of-type(4)").slideToggle("slow");
				if ($(this).hasClass("radselect")) {
					$(this).removeClass("radselect");
				}else{
					$(this).addClass("radselect");
				}
				
			});
			$("#r6").click(function(){
				$("#save").slideToggle("slow");
				$(".textedit").slideToggle("slow");
				$(".textedit #text1").attr("placeholder","1234****5678");
				$(".textedit #text2").attr("placeholder","Efrain Juarez");
				$(".textedit #text3").attr("placeholder","Efrain Juarez");
				$(".textedit #text4").attr("placeholder","Banorte");
				//$(".main ul > li:nth-of-type(5)").slideToggle("slow");
				$(".iconos ul > li:nth-of-type(4),.iconos ul > li:nth-of-type(5)").slideToggle("slow");
				$(".main ul > li:nth-of-type(4)").slideToggle("slow");
				if ($(this).hasClass("radselect")) {
					$(this).removeClass("radselect");
				}else{
					$(this).addClass("radselect");
				}


			});
			$("#r7").click(function(){
				$("#save").slideToggle("slow");
				$(".textedit").slideToggle("slow");
				$(".textedit #text1").attr("placeholder","1234****5678");
				$(".textedit #text2").attr("placeholder","Elba Solis");
				$(".textedit #text3").attr("placeholder","Elba Solis");
				$(".textedit #text4").attr("placeholder","HSBC");
				//$(".main ul > li:nth-of-type(7)").slideToggle("slow");
				//$(".main ul > li:nth-of-type(5)").slideToggle("slow");
				$(".iconos ul > li:nth-of-type(5)").slideToggle("slow");
				$(".main ul > li:nth-of-type(6)").slideToggle("slow");
				if ($(this).hasClass("radselect")) {
					$(this).removeClass("radselect");
				}else{
					$(this).addClass("radselect");
				}
			
			});
			$("#r8").click(function(){
				$(".textedit").slideToggle("slow");
				//$(".main ul > li:nth-of-type(5)").slideToggle("slow");
				$("#save").slideToggle("slow");
				$(".textedit #text1").attr("placeholder","1234****5678");
				$(".textedit #text2").attr("placeholder","Esteban García");
				$(".textedit #text3").attr("placeholder","Esteban García");
				$(".textedit #text4").attr("placeholder","Bancomer");
				if ($(this).hasClass("radselect")) {
					$(this).removeClass("radselect");
				}else{
					$(this).addClass("radselect");
				}
			
			});

			////////////////////////////////////////////////////////////////////



			$("#imagen1").mouseover(function(){
				$("#infotext1").css("display","inline");
			});
			$("#imagen1").mouseout(function(){
				$("#infotext1").css("display","none");
			});

			
			$("#imagen2").mouseover(function(){
				$("#infotext2").css("display","inline");
			});
			$("#imagen2").mouseout(function(){
				$("#infotext2").css("display","none");
			});

			$("#imagen3").mouseover(function(){
				$("#infotext3").css("display","inline");
			});
			$("#imagen3").mouseout(function(){
				$("#infotext3").css("display","none");
			});


			$("#imagen4").mouseover(function(){
				$("#infotext4").css("display","inline");
			});
			$("#imagen4").mouseout(function(){
				$("#infotext4").css("display","none");
			});

			

			$(".switchLabel").click(function(){
			$(".switchSlide").animate({"left":"-=39px"},"fast");
			$('.input3').attr('disabled','disabled');
			$('.input3').removeClass('activo');
			$('#ico').removeClass('calico');
			$('#ico').addClass('calicoNo');});
			$(".switchLabelR").click(function(){
			$(".switchSlide").animate({"left":"+=39px"},"fast");
			$('.input3').removeAttr('disabled');
			$('.input3').addClass('activo');
			$('#ico').removeClass('calicoNo');
			$('#ico').addClass('calico');
		  	});

		  	$(".switchLabel2").click(function(){
			$(".switchSlide2").animate({"left":"-=39px"},"fast");
			$('.input3').attr('disabled','disabled');
			$('.input3').removeClass('activo');
			$('#ico').removeClass('calico');
			$('#ico').addClass('calicoNo');});
			$(".switchLabelR2").click(function(){
			$(".switchSlide2").animate({"left":"+=39px"},"fast");
			$('.input3').removeAttr('disabled');
			$('.input3').addClass('activo');
			$('#ico').removeClass('calicoNo');
			$('#ico').addClass('calico');
		  	});
			
			
			$(".wra_Select2 select").ddslick({
                    width:"225"
            });

			$(".wra_Select3 select").ddslick({
                    width:"225"
            });

            function openClose(estado1,estado2,slidetoggle,slideup){

			$(estado1).click(function(){
				if ($(this).hasClass(estado2)) {
					$(this).removeClass(estado2);
				}else{
				$(this).addClass(estado2);
				}

				$(slidetoggle).slideToggle("slow");
				$(slideup).slideUp("slow");

			});	
	
			}
			

			openClose(".btnaction2","btnactionx","#minisexycombo,.progfecha,#altas",".hidde,#consultas,#treg");
				
				$("#dia").datepicker();
				$("#dia2").datepicker();
				$("#dia3").datepicker();


				omniBox("autocompleteQ",cards);




/***************************************************************************************************************************/
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

$("#con---").click(function(){
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
			$("#step6").fadeIn("slow");				
			});
	});

$("#siguiente4").click(function(){
		$("#step5").fadeOut("slow",function(){
			$("#step6").fadeIn("slow");				
			});
	});

$("#regresar2").click(function(){
		$("#step6").fadeOut("slow",function(){
			$("#step4").fadeIn("slow");				
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


$("#btn1").on("click", function(){
	creaOverlay("#FFF","#widget",1);
	insertHTML($("#contenido2").html(),"modalOver");
	
	//$("#contenido2").fadeIn();

});

function insertHTML(html,contenedor){
	$("#"+contenedor).append(html);
}

function follow(){
	
	 destruyeOver();
	 $("#step6").fadeOut("slow");

	 //cambiaFlujo("#step7");
	 $("#step2").fadeOut("slow",function(){
     $("#step3").fadeIn("slow");       
      });


}

function achiquer(scope){
	var table = $('.transf'),tableWrap = $(".transfWrap"),clon = tableWrap.clone();

	table.css({'position':'relative'});
	tableWrap.css({'overflow':'hidden','margin-bottom':'65px'});
	$(scope).css('background-color','#cccccc');
	table.animate({'top':($(scope).offset().top*-1)+tableWrap.offset().top+10},'slow');
	tableWrap.animate({'height':'50px'},'slow');
	return clon;
}
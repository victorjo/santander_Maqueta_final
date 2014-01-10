

			/*var data = {
				colums:['Fecha','Descripción','Referencia','Cuenta de cargo','Cuenta destino','Importe','Estatus'],
				rowsValues:['dd/mm/aaaa','123456789123','123456789123','1234****7890','1234****7890','999,999,999.00','Exitosa'],
				numRows:6
			}*/
			contFlujo1()
			function contFlujo1(){
				/*alert("Que onda");*/
				$(".radioptc").css("width","25px");
				$(".radioptc").css("height","35px");
				var urlimg ="<img src='widgets/max/w_13/img/card.png' width='53' height='28'>";
				var radios="<input type='radio' name='radio' class='radioptc'>";
				var data = {
					colums:['','','','Pago minimo (MXP)','Para no generar<br/>intereses(MXP)','Fecha limite de pago'],
					rowsValues:[radios,urlimg,'Elite Rewards<br/> Platino 1234****5678','999,999,999,99','1234****1890','1234****1890'],
					numRows:30,
					hasStatus:true,
					configButton:true
				}
				Gridius($('.tablaDinamica'),data);

				}

			
			 $('.w13_PT_contenidodatos2').click(function() {
		        cargaCalendario('switchModal()', 'calendario');
		    });

			 /*function regresaOpcion(evento,btn1Mostra,btn2Ocultar){
			 	
			 	$(evento).click(function(){
			 		//alert("Hola");
			 		$(btn1Mostra).css("display","inline");
			 		$(btn2Ocultar).css("display","none");

			 	});
	 				 	
			 	
			 }*/

			 function regresaOpcion(evento,btn1Mostra,btn2Ocultar){
			 	
			 	$(evento).click(function(){
			 		//alert("Hola");
			 		$(btn1Mostra).css("display","inline");
			 		$(btn2Ocultar).css("display","none");

			 	});
	 				 	
			 	
			 }

			 function verificaOpcion(){

				var tabla1="cambiaPaso(3); el(); cargaHtml('.w13_tabla3','../../../../tablas/w13_tblpPaso3_1.html');";
				/*var tabla2
				var tabla3*/
			 	$(".switchLabelR").click(function(){
			 		//alert("Hola");
			 		$(".b1").css("display","none");
			 		$(".b2").css("display","inline");
			 		if ($("#w13_tabla2").hasClass("w13_tabla2_1")) {
			 			$("#w13_tabla2").removeClass("w13_tabla2_1");

			 		}else{
			 			$("#w13_tabla2").addClass("w13_tabla2_1");
			 			//$("#w13_tabla2").attr("class","w13_tabla2_1");
			 			$("#btnaceptar").attr("onclick",tabla1);
			 			//$(".switchLabel").attr("onclick","regresaOpcion('.switchLabel','.b1','.b2');");
			 		}

			 		/*$(".b1").css("display","none");
			 		$(".b2").css("display","inline");
			 		

			 			$("#w13_tabla2").attr("class","w13_tabla2_1");
			 			$("#btnaceptar").attr("onclick",tabla1);*/
					});
			 	

			 	
			 }
			 verificaOpcion();

			 function verificaOpcion2(){

				var tabla1="cambiaPaso(3); el(); cargaHtml('.w13_tabla5','../../../../tablas/w13_tblpPaso5_1.html');";
				/*var tabla2
				var tabla3*/
			 	$(".switchLabelR").click(function(){
			 		//alert("Hola");
			 		$(".b3").css("display","none");
			 		$(".b4").css("display","inline");
			 		if ($("#w13_tabla4").hasClass("w13_tabla4_1")) {
			 			$("#w13_tabla4").removeClass("w13_tabla4_1");

			 		}else{
			 			$("#w13_tabla4").addClass("w13_tabla4_1");
			 			//$("#w13_tabla2").attr("class","w13_tabla2_1");
			 			$("#btnaceptar2").attr("onclick",tabla1);
			 			//$(".switchLabel").attr("onclick","verificaOpcion();");
			 		}

			 		/*$(".b1").css("display","none");
			 		$(".b2").css("display","inline");
			 		

			 			$("#w13_tabla2").attr("class","w13_tabla2_1");
			 			$("#btnaceptar").attr("onclick",tabla1);*/
			 		});
			 	

			 	
			 }
			 function cambiaTitulo(evento,ocultarTitulo,mostrarTitulo){
			 	$(evento).click(function(){
			 		$(ocultarTitulo).fadeOut("fast");
			 		$(mostrarTitulo).fadeIn("fast");
			 	});
			 }
			  cambiaTitulo("#tit1","","#txt1");
			  cambiaTitulo("#tit2","#txt1","#txt2");
			  cambiaTitulo("#tit3","#txt2","#txt3");
			  

			 verificaOpcion2();
			 regresaOpcion('.switchLabel','.b1','.b2');
			 regresaOpcion('.switchLabel','.b3','.b4');



			
		
				function contFlujo2(){
					//alert("Hola");
					var radios="<input type='radio' name='radio' class='radioptc'>";
					var info = {
						colums:['','Numero de tarjeta','Banco','Alias'],
						rowsValues:[radios,'9873****7890','Bancomer','Lorena'],
						numRows:30,
						hasStatus:true,
						configButton:true
					}
					Gridius($('.aotrasTarjetas'),info);


				}
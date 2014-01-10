

			/*var data = {
				colums:['Fecha','Descripción','Referencia','Cuenta de cargo','Cuenta destino','Importe','Estatus'],
				rowsValues:['dd/mm/aaaa','123456789123','123456789123','1234****7890','1234****7890','999,999,999.00','Exitosa'],
				numRows:6
			}*/
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




			 $('.w13_PT_contenidodatos2').click(function() {
		        cargaCalendario('switchModal()', 'calendario');
		    });

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
			 			$(".switchLabel").attr("onclick","verificaOpcion();");
			 		}

			 		/*$(".b1").css("display","none");
			 		$(".b2").css("display","inline");
			 		

			 			$("#w13_tabla2").attr("class","w13_tabla2_1");
			 			$("#btnaceptar").attr("onclick",tabla1);*/


			 		
			 	});
			 	

			 	
			 }
			 verificaOpcion();



			
			var radios="<input type='radio' name='radio' class='radioptc'>";
			var info = {
				colums:['','Numero de tarjeta','Banco','Alias'],
				rowsValues:[radios,'9873****7890','Bancomer','Lorena'],
				numRows:30,
				hasStatus:true,
				configButton:true
			}
			Gridius($('#aotrasTarjetas'),info);

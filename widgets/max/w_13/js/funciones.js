

			/*var data = {
				colums:['Fecha','Descripción','Referencia','Cuenta de cargo','Cuenta destino','Importe','Estatus'],
				rowsValues:['dd/mm/aaaa','123456789123','123456789123','1234****7890','1234****7890','999,999,999.00','Exitosa'],
				numRows:6
			}*/
			$(".radioptc").css("width","25px");
			$(".radioptc").css("height","35px");


			var urlimg ="<img src='widgets/max/w_13/img/card.png' width='53' height='28'>"
			var radios="<input type='radio' name='radio' class='radioptc'>";
			var data = {
				colums:['','','','Pago minimo (MXP)','Para no generar<br/>intereses(MXP)','Fecha limite de pago'],
				rowsValues:[radios,urlimg,'Elite Rewards<br/> Platino 1234****5678','999,999,999,99','1234****1890','1234****1890'],
				numRows:30
			}
			Gridius($('.tablaDinamica'),data);

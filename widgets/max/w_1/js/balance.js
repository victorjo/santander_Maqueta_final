var msjAlert = ["Desde aquí puede consultar el estado de todas sus Transferencias de Saldo","Balance Transfer le permite transferir a sus tarjetas Santander la deuda de sus otras tarjetas de otros bancos.","Por favor compuebe que la información es correcta antes de confirmar.","La operación se ha realizado correctamente."];

var estatusTranf = 0;
$(document).ready(function(){




	ocultaSteps(15);
	//funcionalidad de botones
	$('#1').click(function(){
		$('#ok1').show();
		$('#ok2').hide();
		$('#ok3').hide();
		$('#ok4').hide();
	});
	$('#2').click(function(){
		$('#ok2').show();
		$('#ok1').hide();
		$('#ok3').hide();
		$('#ok4').hide();
	});
	$('#3').click(function(){
		$('#ok3').show();
		$('#ok2').hide();
		$('#ok1').hide();
		$('#ok4').hide();
	});
	$('#4').click(function(){
		$('#ok4').show();
		$('#ok2').hide();
		$('#ok3').hide();
		$('#ok1').hide();
		//Bloqueo para inserccion de  Daypiker
		creaOverlay("#FFF","#contenido",1);
		insertHTML($("#calendario").html(),"modalOver",function(){
			//$('#d1').datepicker();
		});
	});

	$("#a1,#a2,#a3,#a4,#a5").click(function(){

		if(estatusTranf == 0){
			 estatusTranf = 1;
			$(this).attr('src','../../img/interfaz/paginador_encendido.png');
			//muestra datos
			$('.activacion'+$(this).attr('id')).show();
		}else{
			 estatusTranf = 0;
			$(this).attr('src','../../img/interfaz/paginador_apagado.png');
			//muestra datos
			$('.activacion'+$(this).attr('id')).hide();
		}
	});

	$('#txtT').keyup(function(){
		var value = $(this).val();
		buscaTar(value);
	});

	$('#editaCorreo').click(function(){
		creaOverlay("#fff","#contenido",1);
		insertHTML($("#datosTelCorreo").html(),"modalOver");

	});

	$('#editaCel').click(function(){
		
		creaOverlay("#fff","#contenido",1);
		insertHTML($("#datosTelCorreo").html(),"modalOver");
	});

});



function buscaTar(val){
	if(val.length == 12){
		$('#txtB').val("Banamex");
	}else{
		$('#txtB').val("Banco no asignado");
	}
}

/*Botones*/
$("#continuar1").click(function(){
	cambiaEstados("2",1,2);
});

$(".regresar").click(function(){
		cambiaEstados("1",2,1);
});

$(".continuar2").click(function(){
	creaOverlay("#FFF","#contenido",1);
	insertHTML($("#contenido2").html(),"modalOver");
});



//Transicion entre operaciones
$("#navegador > ul > :nth-child(1)").click(function(){
	$("#stepbar img").attr("src","../img/fake/pasos/paso1.png");
	cambiaFlujo("#step1");
});

$("#navegador > ul > :nth-child(2)").click(function(){
	$("#stepbar img").attr("src","../img/fake/pasos/paso1.png");
	cambiaFlujo("#step4");
});



	function cambiaEstados(paso,stepInicio,stepFin){
		switch(paso) {
			case "0":
			//sin imagen: paso
				$("#stepbar img").attr("src","");
			break;
			case "1":
			// Muestra paso 1
				$("#stepbar img").attr("src","../img/fake/pasos/paso1.png");
			break;
			case "2":
			// Muestra paso 2
				$("#stepbar img").attr("src","../img/fake/pasos/paso2.png");
			break;
			case "3":
			// Muestra paso 3
				$("#stepbar img").attr("src","../img/fake/pasos/paso3.png");
			break;
		}
		
		//pase de stepX a stepY
		
		$("#step"+stepInicio).fadeOut("slow",function(){
			$("#step"+stepFin).fadeIn("slow");				
		});
	}

function insertHTML(html,contenedor,callback){
	$("#"+contenedor).append(html).fadeIn('slow');
	callback();
}

function follow(){
	cambiaEstados("3",2,3);
	destruyeOver();
	cambiaFlujo("#step3");	
}

function overlay2(){
	$('#modalOver').empty();
    insertHTML($("#formTerminos").html(),"modalOver");
       
	
}	

/*Transicion de pasos*/
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

//Daypiker

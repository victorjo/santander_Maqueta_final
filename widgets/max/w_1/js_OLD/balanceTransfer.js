$(document).ready(function(){
	ocultaSteps(15);
	creaToken('contenido2','destruyeOver()','overlay2()','');
		alert("entro aca");

});


$(function(){
	alert("entro");
})

/*Botones*/
$("#continuar1").click(function(){	
		cambiaEstados("2",1,2);
});

$(".regresar").click(function(){
		cambiaEstados("1",2,1);
});

$(".continuar2").click(function(){
	//creaOverlay("#fff","#widget",1);
	//insertHTML($("#contenido2").html(),"modalOver");
});

//Transicion entre operaciones
$("#navegador > ul > :nth-child(1)").click(function(){
	$("#stepbar img").attr("src","../img/fake/pasos/paso1.png");
	cambiaFlujo("#step1");
});

$("#navegador > ul > :nth-child(2)").click(function(e){
	e.preventDefault();
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

function insertHTML(html,contenedor){
	$("#"+contenedor).append(html);
}

function follow(){
	cambiaEstados("3",2,3);
	destruyeOver();
	cambiaFlujo("#step3");	
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
$(document).ready(function(){

	//Carga de datos para arreglo dinámico
	var cards = [
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
	];

	//omniBox("autocompleteQ",cards);
<<<<<<< HEAD
=======
	
>>>>>>> 28990dc70aafc0aa4b2fb0bd927af010307d22f7
	
	


	/*funcionalidad clic en boton info para mostrar imagen*/
	$("#infobtn").click(function(){
			$("#info").fadeToggle("slow");
	 });


	/*Transiciones de flujo (siguiente): Domiciliación de servicios*/
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

		//Transicion entre operaciones
	$("#navegador > ul > :nth-child(1)").click(function(){
		cambiaFlujo("#step1");
	});

	
	$("#navegador > ul > :nth-child(2)").click(function(){
		cambiaFlujo("#step5");
	});
	
	$("#navegador > ul > :nth-child(3)").click(function(){
		cambiaFlujo("#step10");
	});

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


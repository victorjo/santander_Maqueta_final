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
	
	ocultaSteps(26);
	


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



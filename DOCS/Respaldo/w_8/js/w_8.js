$(document).ready(function(){
	//remplazaTxt('Pago de servicios','Seleccione de su lista de servicios registrados el que desee pagar:');
	 construyeSwitch('switchBox');

omniBox("autocompleteQ",cards);
		omniBox("autocompleteQ1",cards);
});

 function omniBox(selector,objectCards){
    var auto = $("#"+selector);
    auto.autocomplete({
      source:objectCards || cards,
      minLength:0,
      open: function(){
        $(".ui-autocomplete").css({"max-height":"201px","overflow-y":"scroll","font-size":"13px","width":"480px"})
      }
    });
    $("#"+selector).parent().on("click",function(){
      auto.autocomplete("search","");
    });

    var cards = [
				{label:'1234****5678  Producto Santander  Alias   152,541,145.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   526,123,124.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   789,147,999.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   152,784,173.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   123,147,369.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   789,365,963.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   123,456,258.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   147,144,852.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   123,124,741.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   129,125,147.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   912,147,123.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   155,741,654.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   987,145,789.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   123,245,456.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   321,245,123.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   125,145,789.00',value:'1234****5678  Producto Santander'},
				{label:'1234****5678  Producto Santander  Alias   741,125,147.00',value:'1234****5678  Producto Santander'},
				];
	

//funcion para cambiar texto.
/*function remplazaTxt(txt1,txt2){
	$('.titulo').html(txt1);
	$('.subtitulo').html(txt2);
}*/
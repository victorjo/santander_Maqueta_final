$(document).ready(function(){
	remplazaTxt('Pago de servicios','Seleccione de su lista de servicios registrados el que desee pagar:');

});

//funcion para cambiar texto.
function remplazaTxt(txt1,txt2){
	$('.titulo').html(txt1);
	$('.subtitulo').html(txt2);
}
contFlujo1();
verificaOpcion();
verificaOpcion2();
cambiaTitulo("#tit1","","#txt1");
cambiaTitulo("#tit2","#txt1","#txt2");
cambiaTitulo("#tit3","#txt2,#txt1 ","#txt3");
regresaOpcion('.switchLabel','.b1','.b2');
regresaOpcion('.switchLabel','.b3','.b4');





function contFlujo1(){
	$(".radioptc").css("width","25px");
	$(".radioptc").css("height","35px");
	var urlimg ="<img src='widgets/max/w_13/img/card.png' width='53' height='28'>";
	var radios="<input type='radio' name='radio' class='radioptc'>";
	var data = {
		colums:['','','','Pago minimo (MXP)','Para no generar<br/>intereses(MXP)','Fecha limite de pago'],
		rowsValues:[radios,urlimg,'Elite Rewards<br/> Platino 1234****5678','999,999,999,99','1,234','10/01/2014'],
		numRows:30,
		//hasStatus:true,
		configButton:true
	}
	Gridius($('.tablaDinamica'),data);

}

function contFlujo2(){
	var radios="<input type='radio' name='radio' class='radioptc' style='margin-top:0px;float:right; 	Z'>";
	var info = {
		colums:['','Numero de tarjeta','Banco','Alias'],
		rowsValues:[radios,'9873****7890','Bancomer','Lorena'],
		numRows:30,
		//hasStatus:true,
		configButton:true
	}
	Gridius($('.aotrasTarjetas'),info);
}

function contFlujo3(){

	var radios="<input type='radio' name='radio' class='radioptc'>";
	var finalTable = {
		colums:['Numero de tarjeta','Nombre del titular','Alias','Banco'],
		rowsValues:['9873****7890','Veronica Garcia Pimentel','Mia','Santander'],
		numRows:30,
		//hasStatus:true,
		configButton:true
	}
	Gridius($('.contRegistradas'),finalTable);
}

function regresaOpcion(evento,btn1Mostra,btn2Ocultar){
	$(evento).click(function(){
		$(btn1Mostra).css("display","inline");
		$(btn2Ocultar).css("display","none");

	});
}

function verificaOpcion(){

var tabla1="cambiaPaso(3); el(); cargaHtml('.w13_tabla3','../../../../tablas/w13_tblpPaso3_1.html');";

	$(".switchLabelR").click(function(){
		
		$(".b1").css("display","none");
		$(".b2").css("display","inline");
		if ($("#w13_tabla2").hasClass("w13_tabla2_1")) {
			$("#w13_tabla2").removeClass("w13_tabla2_1");

		}else{
			$("#w13_tabla2").addClass("w13_tabla2_1");
			$("#btnaceptar").attr("onclick",tabla1);
			
		}

	});
}

function verificaOpcion2(){

var tabla1="cambiaPaso(3); el(); cargaHtml('.w13_tabla5','../../../../tablas/w13_tblpPaso5_1.html');";
/*var tabla2
var tabla3*/
	$(".switchLabelR").click(function(){
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

	
		});	
}

function cambiaTitulo(evento,ocultarTitulo,mostrarTitulo){
 	$(evento).click(function(){
 		$(ocultarTitulo).fadeOut("fast");
 		$(mostrarTitulo).fadeIn("fast");
 	});
 }
function cerarTool(){
	$(".toolsGrid").remove();
}
function selIcon(){
	var img1 = "<img src='../../../../img/assets/error.png'>"; 
	var img2 = "<img src='../../../../img/assets/fine.png' >";
	var tabla1="cambiaPaso(3); el(); cargaHtml('.w13_tabla6','../../../../tablas/w13_tblpPaso7_1.html');";
	var tabla2="cambiaPaso(2); el(); cargaHtml('.w13_tabla7','../../../../tablas/w13_tblpPaso7.html'); cerarTool();"
	$(".b5,.b7").css("display","none");
	$(".b6").css("display","inline");
	$(".toolsGrid").append("<ul class='conficons'><li onclick='closeIcon();'>"+img1+"</li><li class='cp'>"+img2+"</li></ul>");
	$(".cp").attr("onclick",tabla2);
	$(".toolsGrid:after").css("display","inline");
	$(".toolsGrid ul li:first").css("opacity","0.7");
    $(".toolsGrid ul >li:nth-of-type(2)").css("opacity","inherit");
    $(".titAlterno").text("Confirmacón de baja de tarjeta de crédito");
    $(".titAlterno2").text("Comprobante de baja de tarjeta de crédito");
	
		
		if ($("#w13_tabla6").hasClass("w13_tabla7")) {
			$("#w13_tabla6").removeClass("w13_tabla7");

		}else{
			$("#w13_tabla6").addClass("w13_tabla7");
			$("#btnaceptar3").attr("onclick",tabla1);
			
		}
		if ($(".toolsGrid ul").length>2) {
			$(".toolsGrid > ul:nth-of-type(3)").remove();
		}
}

function selIcon2(){
	var img1 = "<img src='../../../../img/assets/error.png'>"; 
	var img2 = "<img src='../../../../img/assets/fine.png' >";
	var tabla1="cambiaPaso(3); el(); cargaHtml('.w13_tabla6','../../../../tablas/w13_tblpPaso7_1.html');";
	var tabla2="cambiaPaso(2); el(); cargaHtml('.w13_tabla7','../../../../tablas/w13_tblpPaso7.html'); cerarTool();"
	$(".toolsGrid").append("<ul class='conficons'><li onclick='closeIcon();'>"+img1+"</li><li class='cpe'>"+img2+"</li></ul>");
	$(".cpe").attr("onclick",tabla2);
	$(".b5").css("display","none");
	$(".b6").css("display","none");
	$(".b7").css("display","inline");
	$(".toolsGrid ul li:first").css("opacity","inherit");
    $(".toolsGrid ul >li:nth-of-type(2)").css("opacity","0.7");
    $(".conficons .cpe").css("opacity","inherit");
    $(".titAlterno").text("Confirmacón de modificación de datos de tarjeta de crédito");
    $(".titAlterno2").text("Comprobante de modificacion de datos de tarjeta de crédito");

		
		if ($("#w13_tabla6").hasClass("w13_tabla7")) {
			$("#w13_tabla6").removeClass("w13_tabla7");

		}else{
			$("#w13_tabla6").addClass("w13_tabla7");
			$("#btnaceptar3").attr("onclick",tabla1);
			
		}
		if ($(".toolsGrid ul").length>2) {
			$(".toolsGrid > ul:nth-of-type(3)").remove();
		}
}
function closeIcon(){
	
	if ($(".toolsGrid ul >li:nth-of-type(2)").length) {
		$(".conficons").remove();
		$(".toolsGrid ul li:first,.toolsGrid ul >li:nth-of-type(2)").css("opacity","inherit");
		$(".b5").css("display","inline");
		$(".b6,.b7").css("display","none");
	}
}

/*function showConfirm(){
	alert("Probando ando x");
	var img1 = "<img src='../../../../img/error.png'>"; 
	var img2 = "<img src='../../../../img/assets/fine.png'>";
	$(".toolsGrid").html("<ul class='conficons'><li>"+img1+"</li><li>"+img2+"</li></ul>");
}
showConfirm();*/
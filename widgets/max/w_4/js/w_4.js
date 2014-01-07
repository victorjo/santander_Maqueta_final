var ddData = [
    {
        text: "Seleccionar",
        value: 1,
        selected: false,
    },
    {
        text: "Seleccionar",
        value: 2,
        selected: false,
        
    },
    {
        text: "Seleccionar",
        value: 3,
        selected: false,
    },
    {
        text: "Seleccionar",
        value: 4,
        selected: false,
    }
];
var identificador = 0;

//Carga de datos (Tabla dinamica)
 var data = {
    colums:['Fecha','Descripción','Referencia','Cuenta de cargo','Cuenta destino','Importe','Estatus'],
    rowsValues:['dd/mm/aaaa','123456789123','123456789123','1234****7890','1234****7890','999,999,999.00','Exitosa'],
    numRows:30
}

  var dataTbl2 = {
    colums:['Nombre de servicio','Categoría','Alias','Convenio','Referencia','Fecha de pago','Importe','Estatus'],
    rowsValues:['Lorem Ipsum','Lorem Ipsum','Lorem','1234','1234567890','dd/mm/aaaa','999,999,999.00','Exitosa'],
    numRows:30
}    


$(function(){  
    //Datepicker
    //$('#date').datepicker(); 

     $(".w4_PS_dd1 select").ddslick({
         data: ddData,
         width: 418,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
        onSelected: function (data) {
        console.log(data);
        }
    });
    
     $(".w4_PS_dd2 select").ddslick({
         data: ddData,
         width: 318,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
         onSelected: function (data) {
        console.log(data);
        }
        }); 
        
     $(".w4_PS_dd3 select").ddslick({
         data: ddData,
         width: 318,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
         onSelected: function (data) {
        console.log(data);
        }
    });

     $(".wra_Select4 select").ddslick({
         data: ddData,
         width: 263,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
         onSelected: function (data) {
        console.log(data);
        }
     });

     $(".wra_Select3 select").ddslick({
         data: ddData,
         width: 263,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
         onSelected: function (data) {
        console.log(data);
        }
     });

     $(".w4_select_1 select").ddslick({
         data: ddData,
         width: 140,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Búsqueda histórica",
         onSelected: function (data) {
        console.log(data);
        }
     });
     
     $(".w4_select_2 select").ddslick({
         data: ddData,
         width: 140,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Rango de fecha",
         onSelected: function (data) {
        console.log(data);
        }
     });

     $(".w4_select_3 select").ddslick({
         data: ddData,
         width: 140,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Rango de importe",
         onSelected: function (data) {
        console.log(data);
        }
     });

     $(".w4_select_4 select").ddslick({
         data: ddData,
         width: 80,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Estatus",
         onSelected: function (data) {
        console.log(data);
        }
     });

     construyeSwitch('switchBox');

     $("#infobtn").click(function(){
			$(".infoChart").fadeToggle("slow");
	 });


});


$(document).ready(function(){
    $('.w4_AS_busqueda').hide();
	//remplazaTxt('Pago de servicios','Seleccione de su lista de servicios registrados el que desee pagar:');
	 construyeSwitch('switchBox');
	 $(".switchLabel").click(function(){
	 	$('.w4_PS_input5').attr('disabled','disabled');
	 });

	 $(".switchLabelR").click(function(){
	 	$('.w4_PS_input5').removeAttr('disabled');
	 });
	
	$('#date').datepicker();

	 omniBox("autocompleteQ",cards);

     $(".w4_AS_btnaction2").click(function(){

            //cambio de estilo
            if ($(this).hasClass("w4_AS_btnaction2")) {

                $(this).removeClass("w4_AS_btnaction2");
                $(this).addClass("w4_AS_btnaction");
            }else{
                $(this).removeClass("w4_AS_btnaction");
                $(this).addClass("w4_AS_btnaction2");
            }
            
            
            //var estado = $(this).parent().next().attr('class');
            //alert(estado);
            $(this).parent().next().slideToggle();
    });

     //inicializacion posicion 1
     $('.1').addClass('seleccionador');
      $('#1').click(function(){
            var id= $(this).attr('id');
            identificador= id;
            $('.tres').removeClass('seleccionador');
            $(this).addClass('seleccionador');
            slider();
     });
     $('#2').click(function(){
            var id= $(this).attr('id');
            identificador= id;
            $('.tres').removeClass('seleccionador');
            $(this).addClass('seleccionador');
            slider();
     });
     $('.3').click(function(){
            $('.tres').removeClass('seleccionador');
            $(this).addClass('seleccionador');
            slider();
     });

     $('.w4_AS_buscar').click(function(){
        $('.w4_AS_busqueda').slideToggle();
     });

     $('.servicioClic').click(function(){
        $('.w4_PS_cuadroTarjeta').hide();
         $('.w4_PS_servicioPago').hide();
        $('.w4_PS_consultaPS').fadeIn('slow');
        var logo = $(this).attr('id');
        $('.w4_PS_Img').addClass(selecServicio(logo));
        $('.w4_PS_seleccionado').text(logo);
        $('.visor').fadeIn('slow');
     });

});

function selecServicio(servicio){
    var servicioRev='';
    switch(servicio) {
        case 'Axtel':
            servicioRev = 'w4_PS_servicioImg_1';
        break;
        case 'Telcel': 
            servicioRev = 'w4_PS_servicioImg_2';
        break;
        case 'G.N.P. Seguros': 
            servicioRev = 'w4_PS_servicioImg_3' ;
        break;
        case 'Telmex': 
            servicioRev = 'w4_PS_servicioImg_4';       
        break;
    }
    return servicioRev;
}

function muestraServicios(){
    $('.w4_PS_consultaPS').hide();
    $('.visor').hide();
    $('.w4_PS_cuadroTarjeta').fadeIn('slow');
    $('.w4_PS_servicioPago').fadeIn('slow');
}

function slider(){//Pendiente
        if ($(".w4_AS_servSlider").is(":animated")){
             return false;
        }   
        var left = $(".w4_AS_servSlider").css("left");
        var li = "-5px";
        var centro = "-657px"; 
        var segundoDos="-1347px"
                
            if (parseInt(left.replace("px","")) > parseInt(li.replace("px",""))){ 
            
                $(".w4_AS_servSlider").animate({
                    left:'-=690px'
                    },500);
            }else if(parseInt(left.replace("px","")) == parseInt(centro.replace("px",""))){
                $(".w4_AS_servSlider").animate({
                left:'-=690px'
                },500);
            }else if(parseInt(left.replace("px","")) == parseInt(segundoDos.replace("px",""))){
                if( identificador == 1){1
                    $(".w4_AS_servSlider").animate({
                    left:'+=690px'
                    },500);
                }else{
                    $(".w4_AS_servSlider").animate({
                    left:'+=690px'
                    },500); 
                }
                
            }

}

function cargaHtml(componente,url){
    $(componente).load(url);
}
//funcion para cambiar texto.
/*function remplazaTxt(txt1,txt2){
	$('.titulo').html(txt1);
	$('.subtitulo').html(txt2);
}*/
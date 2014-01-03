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
            
            
            var estado = $(this).parent().next().attr('class');
            alert(estado);
            $(this).parent().next().slideToggle("slow");

            
            //var boton = $(this).parent().children('div:first').attr('class');
            //UP == w4_AS_btnaction

            //$(this).addClass('UP');

            /*if(claseContenedor == 'w4_AS_listado'){
                 $('.'+claseContenedor).slideToggle("slow");
                 $().
            }else{
                 
            }*/  

            
           
            //alert($(this).parent().next().attr('class'));
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
});

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
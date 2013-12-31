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
     construyeSwitch('switchBox');

     $("#infobtn").click(function(){
			$(".infoChart").fadeToggle("slow");
	 });


});


$(document).ready(function(){
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

});

//funcion para cambiar texto.
/*function remplazaTxt(txt1,txt2){
	$('.titulo').html(txt1);
	$('.subtitulo').html(txt2);
}*/
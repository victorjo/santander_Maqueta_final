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
        $(".w10_HPG_wra_Select select").ddslick({
   		 data: ddData,
   		 width: 140,
   		 background: "#f7f7f7",
    	imagePosition: "left",
    	selectText: "Seleccionar",
   		 onSelected: function (data) {
        console.log(data);
    	}
		});

         $(".w10_HPG_wra_Select2 select").ddslick({
         data: ddData,
         width: 160,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
         onSelected: function (data) {
        console.log(data);
        }
        });
});

function cargaHtml(componente,url){
    $(componente).load(url);
}

function ocultaAsset(){
    $("#WA_pasos>img").fadeOut(1);
}

function muestraAsset(){
    $("#WA_pasos>img").fadeIn(1);
}

function bajaTarjeta(){
	 $(".w_16_PS_baja").click(function(){
        	$(this).parent().parent().fadeOut("slow");
       }
  
});









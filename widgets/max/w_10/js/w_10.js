var ddData = [
    {
        text: "9876****5432",
        value: 1,
        selected: false,
    },
    {
        text: "1234****5678",
        value: 2,
        selected: false,
        
    },
   
];

$(function(){		
        $(".w10_HPG_wra_Select select").ddslick({
   		 data: ddData,
   		 width: 140,
   		 background: "#f7f7f7",
    	imagePosition: "left",
    	selectText: "1234****5678",
   		 onSelected: function (data) {
        console.log(data);
        //alert(data.selectedIndex);
        cardChange(data.selectedIndex);
    	}
		});

         $(".w10_HPG_wra_Select2 select").ddslick({
         data: ddData,
         width: 160,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "1234****5678",
         onSelected: function (data) {
        console.log(data);
        }
        });
        
        $(".w10_IT_inscribirTarjetas tr").click(function(){
			$(".w10_IT_inscribirTarjetas tr").removeClass("w10_IT_inscribirTarjetas_seleccionada");
			$(this).addClass("w10_IT_inscribirTarjetas_seleccionada");
		});
});

function cargaHtml(componente,url){
    $(componente).load(url);
}

function exportar(){
    alert("El archivo se ha exportado correctamente.");
}

function ocultaAsset(){
    $("#WA_pasos>img").fadeOut(1);
}

function muestraAsset(){
    $("#WA_pasos>img").fadeIn(1);
}

function cardChange(index){

     if(index==0){
        $(".w10_HPG_tarjeta").css({"background-image":"url('../img/iconos/card_4.png')"});
        $(".w10_HPG_infoPuntos").fadeOut("fast",function(){
        	 $(".w10_HPG_infoPuntos").fadeIn("fast");
        	 });
     }
     
     else if(index==1){
     	$(".w10_HPG_tarjeta").css({"background-image":"url('../img/iconos/card_1.png')"});
        $(".w10_HPG_infoPuntos").fadeOut("fast",function(){
        	 $(".w10_HPG_infoPuntos").fadeIn("fast");
        	 });
     }    
    //$(".w10_HPG_tarjeta img:first").fadeToggle("slow");
    
    //$(".w10_HPG_infoPuntos").fadeOut("slow",function(){
     //$(this).fadeIn("slow");
    //});
}


	

		









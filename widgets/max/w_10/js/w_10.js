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

var ddData_Recompensas = [
    {
        text: "Recompensas Santander",
        value: 1,
        selected: true,
    },
    {
        text: "Fiesta Rewards",
        value: 2,
        selected: false,
        
    },
    {
        text: "Iberia Plus",
        value: 3,
        selected: false,
        
    },
];


var ddData_RecompensasHdr = [
    {
        text: "Recompensas Santander",
        value: 1,
        selected: true,
    },
    {
        text: "Fiesta Rewards",
        value: 2,
        selected: false,
        
    },
    {
        text: "Iberia Plus",
        value: 3,
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
         data: ddData_Recompensas,
         width: 160,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "1234****5678",
         onSelected: function (data) {
        console.log(data);
        bannerChange(data.selectedIndex);
        }
        });
        
         $(".w10_HPG_wra_Select3 select").ddslick({
         data: ddData_RecompensasHdr,
         width: 180,
         background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Recompensas Santander",
         onSelected: function (data) {
         miniBannerChange(data.selectedIndex);
        console.log(data);
        }
        });

        $(".w10_IT_inscribirTarjetas tr").click(function(){
			$(".w10_IT_inscribirTarjetas tr").removeClass("w10_IT_inscribirTarjetas_seleccionada");
			$(this).addClass("w10_IT_inscribirTarjetas_seleccionada");
		});
		
		$(".w10_HPG_btnExportar").click(function() {
        window.open('data:application/vnd.ms-excel,' + encodeURIComponent($('.w10_PS_cardList').html()));
        
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
}

function bannerChange(index){
	if(index==0){
		$(".w10_IT_wraRight").css({"background-image":"url('widgets/max/w_10/img/wra_Right.png')"});
		}
	else if(index==1){
		$(".w10_IT_wraRight").css({"background-image":"url('widgets/max/w_10/img/wra_Right2.jpg')"});
		}
	else if(index==2){
		$(".w10_IT_wraRight").css({"background-image":"url('widgets/max/w_10/img/wra_Right3.jpg')"});
		}
}

function miniBannerChange(index){
	if(index==0){
		$(".w10_HPG_miniBanner").css({"background-image":"url('widgets/max/w_10/img/tit_Programa_1.png')"});
		}
	else if(index==1){
		$(".w10_HPG_miniBanner").css({"background-image":"url('widgets/max/w_10/img/tit_Programa_2.jpg')"});
		}
	else if(index==2){
		$(".w10_HPG_miniBanner").css({"background-image":"url('widgets/max/w_10/img/tit_Programa_3.jpg')"});
		}
}
		

		

		


	

		









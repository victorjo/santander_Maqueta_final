var ddDataNIP = [{
    text: "&nbsp;&nbsp;&nbsp;4857 9865 1268 4589&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Producto Santander&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Papá",
    value: 1,
    selected: true,
}, {
    text: "&nbsp;&nbsp;&nbsp;9865 4857 4589 1268&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Producto Santander&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mamá",
    value: 2,
    selected: false,

},  {
    text: "&nbsp;&nbsp;&nbsp;4589 4857  1268 9865&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Producto Santander&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sobrino",
    value: 3,
    selected: false,
}];



var ddDataATC = [{
    text: "&nbsp;&nbsp;&nbsp;4857 9865 1268 4589&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Producto Santander&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Papá",
    value: 1,
    selected: true,
}, {
    text: "&nbsp;&nbsp;&nbsp;9865 4857 4589 1268&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Producto Santander&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mamá",
    value: 2,
    selected: false,

},  {
    text: "&nbsp;&nbsp;&nbsp;4589 4857  1268 9865&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Producto Santander&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sobrino",
    value: 3,
    selected: false,
},
{
    text: "&nbsp;&nbsp;&nbsp;9865 4857 4589 1268&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Producto Santander&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mamá",
    value: 4,
    selected: false,

}, 
{
    text: "&nbsp;&nbsp;&nbsp;9865 4857 4589 1268&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Producto Santander&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mamá",
    value: 5,
    selected: false,

}];

var ddDataDRT = [{
    text: "Reposición por robo",
    value: 1,
    selected: true,
}, {
    text: "Reposición por extravío",
    value: 2,
    selected: false,

},  {
    text: "Desbloquear tarjeta",
    value: 3,
    selected: false,
}];

var ddDataDRT2 = [{
    text: "Express",
    value: 1,
    selected: true,
}, {
    text: "Domicilio",
    value: 2,
    selected: false,

},  {
    text: "Otra ubicación",
    value: 3,
    selected: false,
}];


$(function() {

    $(".w12_NIP_wra_Select select").ddslick({
        data: ddDataNIP,
        width: 333,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
        onSelected: function(data) {
            console.log(data);
        }
    });

     $(".w12_ATC_wra_Select select").ddslick({
        data: ddDataATC,
        width: 298,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
        onSelected: function(data) {
            console.log(data);
        }
    });

      $(".w12_DRT_wra_Select select").ddslick({
        data: ddDataDRT,
        width: 198,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
        onSelected: function(data) {
            console.log(data);
            caseChange(data.selectedIndex);
        }
    });

      $(".w12_DRT_wra_Select2 select").ddslick({
        data: ddDataDRT2,
        width: 198,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
        onSelected: function(data) {
            console.log(data);
            copyChange(data.selectedIndex);
        }
    });


     $(".w_12_PS_baja").click(function() {
      $(this).parent().fadeOut("slow");
   });

    construyeSwitch("switchBox");
    construyeSwitch("registro");


    $(".w12_radiobtn").click(function(){
        $(this).children("img").fadeToggle("fast");
    });

    $(".switchLabelR").click(function(){
        $(".w12_radiobtn").children("img").fadeOut("fast");
        $(".w12_RRE_robo").fadeOut("slow",function(){
            $(".w12_RRE_extravio").fadeIn("slow");
        });
    });    

    $(".switchLabel").click(function(){
        $(".w12_radiobtn").children("img").fadeOut("fast");
        $(".w12_RRE_extravio").fadeOut("slow",function(){
            $(".w12_RRE_robo").fadeIn("slow");
        });
        
    });

     $(".registro .switchLabelR").click(function(){
            $(".w12_NIP_registro").fadeOut("slow",function(){
            $(".w12_NIP_cambio").fadeIn("slow");
        });
    });     

    $(".registro .switchLabel").click(function(){
        $(".w12_NIP_cambio").fadeOut("slow",function(){
            $(".w12_NIP_registro").fadeIn("slow");
        });
        
    });

    $(".w12_calendario").click(function() {
        cargaCalendario('switchModal()', 'calendario');
        });

});

function cargaHtml(componente, url) {
    $(componente).load(url);
}

function ocultaAsset() {
    $("#WA_pasos>img").fadeOut(1);
}

function muestraAsset() {
    $("#WA_pasos>img").fadeIn(1);
}

function step2robo() {
    $(".extravio").fadeOut(1);
    $(".robo").fadeIn('slow');
}

function step2extravio() {
    $(".robo").fadeOut(1);
    $(".extravio").fadeIn('slow');
}

function step3robo() {
    $(".extravio3").fadeOut(1);
    $(".robo3").fadeIn('slow');
}

function step3extravio() {
    $(".robo3").fadeOut(1);
    $(".extravio3").fadeIn('slow');
}

function step2cambio() {
    $(".registro2").fadeOut(1);
    $(".cambio2").fadeIn('slow');
}

function step2registro() {
    $(".cambio2").fadeOut(1);
    $(".registro2").fadeIn('slow');
}

function step3cambio() {
    $(".registro3").fadeOut(1);
    $(".cambio3").fadeIn('slow');
}

function step3registro() {
    $(".cambio3").fadeOut(1);
    $(".registro3").fadeIn('slow');
}

function step2alta() {
    $(".baja2").fadeOut(1);
    $(".alta2").fadeIn('slow');
}

function step2baja() {
    $(".alta2").fadeOut(1);
    $(".baja2").fadeIn('slow');
}

function step3alta() {
    $(".baja3").fadeOut(1);
    $(".alta3").fadeIn('slow');
}

function step3baja() {
    $(".alta3").fadeOut(1);
    $(".baja3").fadeIn('slow');
}


function step2roboDRT() {
    $(".DRTextravio2,.DRTdesbloqueo2").fadeOut(1);
    $(".DRTrobo2").fadeIn('slow');
}

function step3roboDRT() {
    $(".DRTextravio3,.DRTdesbloqueo3").fadeOut(1);
    $(".DRTrobo3").fadeIn('slow');
}

function step2extravioDRT() {
    $(".DRTrobo2,.DRTdesbloqueo2").fadeOut(1);
    $(".DRTextravio2").fadeIn('slow');
}

function step3extravioDRT() {
    $(".DRTrobo3,.DRTdesbloqueo3").fadeOut(1);
    $(".DRTextravio3").fadeIn('slow');;
}

function step2desbloqueoDRT() {
    $(".DRTrobo2,.DRTextravio2").fadeOut(1);
    $(".DRTdesbloqueo2").fadeIn('slow');
}

function step3desbloqueoDRT() {
    $(".DRTrobo3,.DRTextravio3").fadeOut(1);
    $(".DRTdesbloqueo3").fadeIn('slow');
}

function copyChange(index){

     if(index==0){
       $(".ubicacion,.domicilio").fadeOut(500);
       setTimeout(function(){ $(".express").fadeIn("slow"); },501)
     }
     
     else if(index==1){
        $(".ubicacion,.express").fadeOut(500);
        setTimeout(function(){ $(".domicilio").fadeIn("slow"); },501)
     } 

     else if(index==2){
      $(".express,.domicilio").fadeOut(500);
       setTimeout(function(){ $(".ubicacion").fadeIn("slow"); },501)
    }    
}

function caseChange(index){

     if(index==0){
       $(".reposicionExtravio,.desbloqueo").fadeOut(500);
       setTimeout(function(){ $(".reposicionRobo").fadeIn("slow"); },501)
     }
     
     else if(index==1){
        $(".desbloqueo,.reposicionRobo").fadeOut(500);
        setTimeout(function(){ $(".reposicionExtravio").fadeIn("slow"); },501)
     } 

     else if(index==2){
      $(".reposicionRobo,.reposicionExtravio").fadeOut(500);
       setTimeout(function(){ $(".desbloqueo").fadeIn("slow"); },501)
    }    
}

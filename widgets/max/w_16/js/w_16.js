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

$(function() {

    

    $(".w16_NIP_wra_Select select").ddslick({
        data: ddDataNIP,
        width: 333,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
        onSelected: function(data) {
            console.log(data);
        }
    });

     $(".w_16_PS_baja").click(function() {
      $(this).parent().fadeOut("slow");
   });

    construyeSwitch("switchBox");
    construyeSwitch("registro");


    $(".w16_radiobtn").click(function(){
        $(this).children("img").fadeToggle("fast");
    });

    $(".switchLabelR").click(function(){
        $(".w16_radiobtn").children("img").fadeOut("fast");
        $(".w16_RRE_robo").fadeOut("slow",function(){
            $(".w16_RRE_extravio").fadeIn("slow");
        });
    });


       

    $(".switchLabel").click(function(){
        $(".w16_radiobtn").children("img").fadeOut("fast");
        $(".w16_RRE_extravio").fadeOut("slow",function(){
            $(".w16_RRE_robo").fadeIn("slow");
        });
        
    });

     $(".registro .switchLabelR").click(function(){
            $(".w16_NIP_registro").fadeOut("slow",function(){
            $(".w16_NIP_cambio").fadeIn("slow");
        });
    });


       

    $(".registro .switchLabel").click(function(){
        $(".w16_NIP_cambio").fadeOut("slow",function(){
            $(".w16_NIP_registro").fadeIn("slow");
        });
        
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



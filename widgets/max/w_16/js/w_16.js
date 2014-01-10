var ddData = [{
    text: "Seleccionar",
    value: 1,
    selected: false,
}, {
    text: "Seleccionar",
    value: 2,
    selected: false,

}, {
    text: "Seleccionar",
    value: 3,
    selected: false,
}, {
    text: "Seleccionar",
    value: 4,
    selected: false,
}];

$(function() {

    

    $(".w10_HPG_wra_Select select").ddslick({
        data: ddData,
        width: 140,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w10_HPG_wra_Select2 select").ddslick({
        data: ddData,
        width: 160,
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





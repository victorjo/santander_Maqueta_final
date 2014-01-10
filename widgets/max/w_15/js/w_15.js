$(function() {

    Gridius($('.tablaDinamica2'), {
        hasStatus: false,
        configButton: true,
        colums: ['Meses de gracia', 'Fecha de aplicación'],
        rowsValues: ['1', '15/01/2014'],
        parseRows: [
            ['1', '15/01/2014'],
            ['2', '15/01/2014'],
            ['3', '15/01/2014']
        ],
        numRows: 2,
        icons: {
            print: false
        }
    });
});


var total = .1;
var c = document.getElementById("myCanvas");
c.width = 190;
c.height = 190;
var ctx = c.getContext("2d");

function aumentaTotal(numero) {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.restore();
    //total += .1;

    console.log("numero" + numero + "::::" + numero * Math.PI);
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#db1539";
    //ctx.arc(160,160,150,((90*Math.PI)/-180), numero*Math.PI));
    ctx.arc(95, 95, 88, 0, numero * Math.PI);
    ctx.stroke();
    ctx.restore();

}



$(document).ready(function() {


    $(".wra_Select3 select").ddslick({
        width: 630,
        direccionSlide: "up"
    });

    $('#rotatescroll').tinycircleslider({
        radius: 95,
        callback: function(element, index) {
            console.log(element, index);
        }
    });

});

$(function() {

    $(".btnPlazoAuto").click(function() {
        $(".btnPlazoAuto").each(function() {
            $(this).css({
                "background": ""
            });
            $(".btnPlazoAuto span").hide("fast");

        });
        $(this).css({
            "background": "url(../../../../images/btn_plazoSim.png)"
        });
        $(this).find("span").show("fast");
        numeroPlazo = $(this).find("span").text();
        $("#numPlazo").text(numeroPlazo);

    })

    $("#btn_plazoSim2").css("background", "url(../../../../images/btn_plazoSim.png)");
    $("#btn_plazoSim2 span").css("display", "block");
})
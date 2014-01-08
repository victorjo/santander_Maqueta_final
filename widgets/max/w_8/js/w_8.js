var ddData = [{
    text: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Papa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
    value: 1,
    selected: false,
}, {
    text: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Hermano &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
    value: 2,
    selected: false,

}, {
    text: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Sobrino &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
    value: 3,
    selected: false,

}];

var data = {
    colums: ['Fecha', 'Descripción', 'Referencia', 'Cuenta de cargo', 'Cuenta destino', 'Importe', 'Estatus'],
    rowsValues: ['dd/mm/aaaa', '123456789123', '123456789123', '1234****7890', '1234****7890', '999,999,999.00', 'Exitosa'],
    numRows: 10
}

var datados = {
    colums: ['Titular de la cuenta', 'Número de cuenta', 'Alias', 'Banco', 'Correo del titular'],
    rowsValues: ['Nombre', '1234****5678', 'Alias de cuenta', 'Nombre Banco', 'correo@correo.com'],
    numRows: 2
}

$(function() {

    //DropList falso (Pendiente a realizacion)
    $(".w4_dropList select").ddslick({
        data: ddData,
        width: 520,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Alias &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".btnaction2").click(function() {

        if ($(this).hasClass("btnaction2")) {
            $(this).removeClass("btnaction2");
            $(this).addClass("btnaction");
        } else {
            $(this).removeClass("btnaction");
            $(this).addClass("btnaction2");
        }

        $(this).parent().next().slideToggle("slow");
    });

    $(".btnaction").click(function() {

        if ($(this).hasClass("btnaction")) {
            $(this).removeClass("btnaction");
            $(this).addClass("btnaction2");
        } else {
            $(this).removeClass("btnaction2");
            $(this).addClass("btnaction");
        }

        $(this).parent().next().slideToggle("slow");
    });

    $(".w8_CRAB_dropHdr1").children(".toggle").click(function() {
        $(".w8_CRAB_wraFormulario").slideUp("slow");
        $(".w8_CRAB_dropHdr2").children(".btnaction").removeClass("btnaction").addClass("btnaction2");
    });

    $(".w8_CRAB_dropHdr2").children(".toggle").click(function() {
        $(".tablaDinamica").slideUp("slow");
        $(".w8_CRAB_dropHdr1").children(".btnaction").removeClass("btnaction").addClass("btnaction2");
    })


    construyeSwitch("switch_OC");
    var js = [{
        text: "Elemento 0",
        value: 1,
        selected: false
    }];


    $(".select_OC").ddslick({
        data: js,
        width: 300,
        imagePosition: "left",
        onSelected: function(selectedData) {

        }
    });
    cambiaFlujo('.wra_flu1');



})();


function cargaHtml(componente, url) {
    $(componente).load(url);
}
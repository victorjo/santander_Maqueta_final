var ddData = [{
    text: "5470****2331 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Súper nómina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Papá &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    value: 1,
    selected: false,
}, {
    text: "5470****5487 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cuenta Free &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Hermano &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ",
    value: 2,
    selected: false,

}, {
    text: "5470****4532 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cuenta Básica &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Sobrino &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    value: 3,
    selected: false,

}];

var ddData2 = [{
    text: "5470****2332 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bancomer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Juan Arevalo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    value: 1,
    selected: false,
}, {
    text: "5470****5487 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Banamex &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Raúl López &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ",
    value: 2,
    selected: false,

}, {
    text: "5470****4532 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Scotia Bank &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fernando Ruiz &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    value: 3,
    selected: false,

}];

var ddDataOrigen = [{
    text: "5470****2331 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Súper cuenta total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Gastos &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $15,500.00",
    value: 1,
    selected: false,
}, {
    text: "5470****5487 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cuenta Free &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ahorro &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $3,400.00 ",
    value: 2,
    selected: false,

}, {
    text: "5470****4532 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Súper cuenta chequera &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cheques &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $18,343.00",
    value: 3,
    selected: false,

}];





// info para los droplis del flujo 4
var data1 = [{
    text: "1 mes sin interes",
    value: 1,
    selected: false,
}, {
    text: "2 meses sin intereses",
    value: 2,
    selected: false,

}, {
    text: "3 meses sin intereses",
    value: 3,
    selected: false,
}];

var data2 = [{
    text: "3 dias",
    value: 1,
    selected: false,
}, {
    text: "4 dias",
    value: 2,
    selected: false,

}, {
    text: "1 día",
    value: 3,
    selected: false,
}];

var datacat = [{
    text: "Telefonía",
    value: 1,
    selected: false,
}, {
    text: "Transporte",
    value: 2,
    selected: false,

}, {
    text: "colegio",
    value: 3,
    selected: false,
}];

var dataubic = [{
    text: "Distrito Federal",
    value: 1,
    selected: false,
}, {
    text: "Guadalajara",
    value: 2,
    selected: false,

}, {
    text: "Michoacán",
    value: 3,
    selected: false,
}];

var databusqueda = [{
    text: "Últimos 5 pagos",
    value: 1,
    selected: false,
}, {
    text: "Último mes",
    value: 2,
    selected: false,

}, {
    text: "Últimos 3 meses",
    value: 3,
    selected: false,
}];

var dataEstatus = [{
    text: "Programados",
    value: 1,
    selected: false,
}, {
    text: "Exitosos",
    value: 2,
    selected: false,

}, {
    text: "No exitoso",
    value: 2,
    selected: false,

}, {
    text: "Todos",
    value: 3,
    selected: false,
}];

var datoRango = [{
    text: "999,999,999,00(MXP)",
    value: 1,
    selected: false,
}, {
    text: "999,999,999,00(MXP)",
    value: 2,
    selected: false,

}, {
    text: "999,999,999,00(MXP)",
    value: 3,
    selected: false,
}];

var identificador = 0;
//hasta aqui los droplistdel flujo4 

$(function() {

    //DropList falso (Pendiente a realizacion)
    $(".w9_dropList select").ddslick({
        data: ddData,
        width: 520,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "5470****2331 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Súper nómina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Papá &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        onSelected: function(data) {
            console.log(data);
        }
    });

$(".w9_dropList2 select").ddslick({
        data: ddDataOrigen,
        width: 520,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "5470****2332 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Súper cuenta total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Gastos &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $15,500.00",
        onSelected: function(data) {
            console.log(data);
        }
    });

$(".w9_dropList3 select").ddslick({
        data: ddData2,
        width: 520,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "3245****5435 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bancomer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Juan Arevalo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        onSelected: function(data) {
            console.log(data);
        }
    });
    $(".w9_PS_dd2 select").ddslick({
        data: data1,
        width: 318,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "3 meses sin intereses",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w9_PS_dd3 select").ddslick({
        data: data2,
        width: 318,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "3 dias antes",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".wra_select4 select").ddslick({
        data: datacat,
        width: 263,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Estatus",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w9_select_3 select").ddslick({
        data: datoRango,
        width: 140,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Rango de importe",
        onSelected: function(data) {
            console.log(data);
        }
    });
    $(".w9_select_4 select").ddslick({
        data: dataEstatus,
        width: 80,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Estatus",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w9_select_1 select").ddslick({
        data: databusqueda,
        width: 140,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Búsqueda histórica",
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

        $(this).parent().next().slideToggle("slow", function() {
            $('.w9_PS_listadoTarjeta').slideToggle();
        });
    });

    $(".btnaction").click(function() {

        if ($(this).hasClass("btnaction")) {
            $(this).removeClass("btnaction");
            $(this).addClass("btnaction2");
        } else {
            $(this).removeClass("btnaction2");
            $(this).addClass("btnaction");
        }

        $(this).parent().next().slideToggle("slow", function() {
            $('.w9_PS_listadoTarjeta').slideToggle();
        });
    });

    $(".w9_CRAB_dropHdr1").children(".toggle").click(function() {
        $(".w9_CRAB_wraFormulario").slideUp("slow");
        $(".w9_CRAB_dropHdr2").children(".btnaction").removeClass("btnaction").addClass("btnaction2");
    });

    $(".w9_CRAB_dropHdr2").children(".toggle").click(function() {
        $(".tablaDinamica").slideUp("slow");
        $(".w9_CRAB_dropHdr1").children(".btnaction").removeClass("btnaction").addClass("btnaction2");
    })


    construyeSwitch("switch_OC");
    var js = [{
        text: "Elemento 0",
        value: 1,
        selected: false
    }];

    // componente info //
    $("#infobtn").click(function() {
        $(".infoChart").fadeToggle("slow");
    });
    //componete info //
    $('.w9_HPG_personalizarIntervalo').click(function() {
        cargaCalendario('switchModal()', 'calendario');
    });

    $(".select_OC").ddslick({
        data: js,
        width: 300,
        imagePosition: "left",
        onSelected: function(selectedData) {

        }
    });
    cambiaFlujo('.wra_flu1');

    $('.w9_HPG_personalizarIntervalo').click(function() {
        cargaCalendario('switchModal()', 'calendario');
    });

    $(".w9_exportar").click(function() {
        window.open('data:application/vnd.ms-excel,' + encodeURIComponent($('.tablaDinamica').html()));

    });

    Gridius($('.tablaDinamica2'), {
        hasStatus: true,
        configButton: true,
        colums: ['Fecha', 'Descripción', 'Referencia', 'Cuenta de cargo', 'Cuenta destino', 'Importe', 'Estatus'],
        rowsValues: ['10/01/2014', '123456789123', '123456789123', '12547825ASD1', '12547825ASD1', '999,999,999.00', ''],
        numRows: 10
    });

    $(".w_16_PS_baja").click(function() {
        $(this).parent().fadeOut("slow");
    });
    //Gridius($('.tablaDinamica'), datados);
})();


function cargaHtml(componente, url) {
    $(componente).load(url);
}
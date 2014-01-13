var dataPeriodo = [{
    text: "Actual",
    value: 1,
    selected: false,
}, {
    text: "Anterior",
    value: 2,
    selected: false,

}, {
    text: "2 anteriores",
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

var dataTarjeta = [{
    text: "1234****5678",
    value: 1,
    selected: false,
}, {
    text: "1234****5678",
    value: 2,
    selected: false,

}, {
    text: "1234****5678",
    value: 3,
    selected: false,
}];

var dataPlazo = [{
    text: "5 meses",
    value: 1,
    selected: false,
}, {
    text: "5 meses",
    value: 2,
    selected: false,

}];

$(document).ready(function() {
    tit_Consulta();
    $('.pasos').hide();
    $('.w1_texto').text('Mis movimientos de la tarjeta');
    $('.lista').addClass('w_1_deshabilitado');


    Gridius($('.containerG'), {
        hasStatus: true,
        configButton: true,
        colums: ['Fecha', 'Descripcion', 'RFC', 'Moneda Extranjera (MXP)', 'Tipo de cambio (MXP)', 'Cantidad (MXP)', 'Estatus'],
        rowsValues: ['dd/mm/aaaa', 'Lorem Ipsum', 'ABC12345678', '999,999,999.00', '999,999,999.00', '0.00%', 'estatus'],
        numRows: 10
    });

    $('.exportar').click(function() {

    });


    $('.grafic').click(function() {
        $('.exportar').addClass('w_1_deshabilitado');
        $('.lista').addClass('w_1_deshabilitado');
        $('.w1_busquedaL').addClass('w_1_deshabilitado');
        $('.w1_texto').text(' ');
        $('.w1_texto').text('Linea de crédito');
        $('.containerG').empty();
        $('.containerG').html("<div class='w_1Grafica'></div>");
        $('.w1_CB_txt').text('Pagar');
    });

    $('.lista').click(function() {
        removeOp();
        $(this).addClass('w_1_deshabilitado');
        $('.w1_CB_txt').text('Diferir cargos');

        $('.w1_texto').text(' ');
        $('.w1_texto').text('Mis movimientos de la tarjeta');
        $('.containerG').empty();
        Gridius($('.containerG'), {
            hasStatus: true,
            configButton: true,
            colums: ['Fecha', 'Descripcion', 'RFC', 'Moneda Extranjera (MXP)', 'Tipo de cambio (MXP)', 'Cantidad (MXP)', 'Estatus'],
            rowsValues: ['dd/mm/aaaa', 'Lorem Ipsum', 'ABC12345678', '999,999,999.00', '999,999,999.00', '0.00%', 'estatus'],
            numRows: 10
        });
    });

    $('.wrapGrid').addClass('w14_tam');

});

(function() {
    construyeSwitch("switch_OC");
    var js = [{
        text: "Periodo de Factura",
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

    $(".inter").ddslick({
        data: [{
            text: "1234****5678",
            value: 1,
            selected: false
        }],
        width: 135,
        imagePosition: "left",
        onSelected: function(selectedData) {

        }
    });

    $(".w14_select_1 select").ddslick({
        data: dataPeriodo,
        width: 160,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Periodo de Factura",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w14_select_2 select").ddslick({
        data: databusqueda,
        width: 160,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Últimos movimientos",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $('.w14_HPG_personalizarIntervalo').click(function() {
        cargaCalendario('switchModal()', 'calendario');
    });

    /*-- ddslicks --*/

    $(".w14_select_1_2 select").ddslick({
        data: dataTarjeta,
        width: 135,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "1234****5678",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w14_select_2_2 select").ddslick({
        data: dataPlazo,
        width: 135,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "5 meses",
        onSelected: function(data) {
            console.log(data);
        }
    });

})();


function removeOp() {
    $('.w1_contenedor').find('.exportar').removeClass('w_1_deshabilitado');
    $('.w1_contenedor').find('.grafic').removeClass('w_1_deshabilitado');
    $('.w1_contenedor').find('.w1_busquedaL').removeClass('w_1_deshabilitado');
}

function descargaDocs(doc) {
    document.location.href = doc;
}

function titulo(icono, titulo, subtitulo) {
    var title = '<div id="SecondT">';
    title += '<div class="iconFlujo">';
    title += '<img src="../../../img/assets/' + icono + '.png"/>';
    title += '</div>';
    title += '<p class="titulo">' + titulo + '</p>';
    title += '<p class="subtitulo">' + subtitulo + '</p></div>';


    $(".titFlujo").html(title);
}

function cargaTermino() {
    cargaTerm(" switchModal(); cambiaPaso(2); cargaHtml('.w14_TM_tabla2','../../../../tablas/w7/w7_TM_Paso2.html');", 'terminos');
}


function cargaTerm(cbTokenAcep, modal) {
    var mod = modal || 'token';
    $(".bloqueoElement").fadeOut("slow", function() {
        $("#elementBloqueo").load("../modales/" + mod + ".html", function() {
            $(this).find("#btnCalendarioAceptar").attr("onclick", cbTokenAcep);
            centraModal();
            $(".bloqueoElement").fadeIn("slow");
        });
    });
}

function cargaHtml(componente, url) {
    $(componente).load(url);
}

function tit_Consulta() {
    titulo('ico_saldos', 'Consulta de Saldos y Movimientos', 'Seleccione el periodo de búsqueda que desea consultar, así como el tipo de movimiento y/o rango de importe para  una búsqueda  más especifica');
}


function tit_Transpaso() {
    titulo('ico_saldos', 'Transpasos a Meses con intereses', 'Seleccione los cargos que desea diferir a meses con intereses y  el plazo para pagarlos');
}

function tit_DispoTarjeta() {
    titulo('ico_saldos', 'Disposición de tarjetas de credito a cheques', 'Introduzca el nombre, alias o los cuatro dígitos de  la cuenta destino / cuenta de cargo o seleccionela de la lista');
}
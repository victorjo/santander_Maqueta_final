var ddData = [{
    text: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Alias &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
    value: 1,
    selected: false,
}, {
    text: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Alias &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
    value: 2,
    selected: false,

}, {
    text: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Alias &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
    value: 3,
    selected: false,
}, {
    text: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Alias &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
    value: 4,
    selected: false,
}];

var identificador = 0;
var textoServicio = '';

//Carga de datos (Tabla dinamica)
var data = {
    colums: ['Fecha', 'Descripción', 'Referencia', 'Cuenta de cargo', 'Cuenta destino', 'Importe', 'Estatus'],
    rowsValues: ['dd/mm/aaaa', '123456789123', '123456789123', '1234****7890', '1234****7890', '999,999,999.00', 'Exitosa'],
    numRows: 30
}

var dataTbl2 = {
    colums: ['Nombre de servicio', 'Categoría', 'Alias', 'Convenio', 'Referencia', 'Fecha de pago', 'Importe', 'Estatus'],
    rowsValues: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem', '1234', '1234567890', 'dd/mm/aaaa', '999,999,999.00', 'Exitosa'],
    numRows: 30
}

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

//Carga de datos (Tabla dinamica)
var data = {
    colums: ['Fecha', 'Descripción', 'Referencia', 'Cuenta de cargo', 'Cuenta destino', 'Importe', 'Estatus'],
    rowsValues: ['dd/mm/aaaa', '123456789123', '123456789123', '1234****7890', '1234****7890', '999,999,999.00', 'Exitosa'],
    numRows: 30
}

var dataTbl2 = {
    colums: ['Nombre de servicio', 'Categoría', 'Alias', 'Convenio', 'Referencia', 'Fecha de pago', 'Importe', 'Estatus'],
    rowsValues: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem', '1234', '1234567890', 'dd/mm/aaaa', '999,999,999.00', 'Exitosa'],
    numRows: 30
}


$(function() {

    $(".w4_PS_dd1 select").ddslick({
        data: ddData,
        width: 418,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w4_PS_dd2 select").ddslick({
        data: data1,
        width: 318,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "3 meses sin intereses",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w4_PS_dd3 select").ddslick({
        data: data2,
        width: 318,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "3 dias antes",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".wra_Select4 select").ddslick({
        data: datacat,
        width: 263,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".wra_Select3 select").ddslick({
        data: dataubic,
        width: 263,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Seleccionar",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w4_select_1 select").ddslick({
        data: databusqueda,
        width: 140,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Búsqueda histórica",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w4_select_2 select").ddslick({
        data: ddData,
        width: 140,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Rango de fecha",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w4_select_3 select").ddslick({
        data: datoRango,
        width: 140,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Rango de importe",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w4_select_4 select").ddslick({
        data: dataEstatus,
        width: 80,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "Estatus",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".w4_dropList select").ddslick({
        data: ddData,
        width: 450,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Alias &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
        onSelected: function(data) {
            console.log(data);
        }
    });



    construyeSwitch('switchBox');

    $("#infobtn").click(function() {
        $(".infoChart").fadeToggle("slow");
    });


    $('.w4_HPG_personalizarIntervalo').click(function() {
        cargaCalendario('switchModal()', 'calendario');
    });

    $(".w4_exportar").click(function() {
        window.open('data:application/vnd.ms-excel,' + encodeURIComponent($('.tablaDinamica').html()));

    });

});

$(document).ready(function() {
    $('.w4_AS_busqueda').hide();
    //remplazaTxt('Pago de servicios','Seleccione de su lista de servicios registrados el que desee pagar:');
    construyeSwitch('switchBox');
    $(".switchLabel").click(function() {
        $('.w4_PS_input5').attr('disabled', 'disabled');
    });

    $(".switchLabelR").click(function() {
        $('.w4_PS_input5').removeAttr('disabled');
    });

    //$('#date').datepicker();

    //omniBox("autocompleteQ", cards);

    $(".w4_AS_btnaction2").click(function() {

        //cambio de estilo
        if ($(this).hasClass("w4_AS_btnaction2")) {

            $(this).removeClass("w4_AS_btnaction2");
            $(this).addClass("w4_AS_btnaction");
        } else {
            $(this).removeClass("w4_AS_btnaction");
            $(this).addClass("w4_AS_btnaction2");
        }


        //var estado = $(this).parent().next().attr('class');
        //alert(estado);
        $(this).parent().next().slideToggle();
    });

    //inicializacion posicion 1
    $('.1').addClass('seleccionador');
    $('#1').click(function() {
        var id = $(this).attr('id');
        identificador = id;
        $('.tres').removeClass('seleccionador');
        $(this).addClass('seleccionador');
        slider();
    });
    $('#2').click(function() {
        var id = $(this).attr('id');
        identificador = id;
        $('.tres').removeClass('seleccionador');
        $(this).addClass('seleccionador');
        slider();
    });
    $('.3').click(function() {
        $('.tres').removeClass('seleccionador');
        $(this).addClass('seleccionador');
        slider();
    });

    $('.w4_AS_buscar').click(function() {
        $('.w4_AS_busqueda').slideToggle();
    });

    $('.servicioClic').click(function() {
        $('.w4_PS_cuadroTarjeta').hide();
        $('.w4_PS_servicioPago').hide();
        $('.w4_PS_consultaPS').fadeIn('slow');
        var logo = $(this).attr('id');
        $('.w4_PS_Img').addClass(selecServicio(logo));
        $('.w4_PS_seleccionado').text(logo);
        //textos
        $('.Alias2').text($(this).children('td:nth-of-type(3)').text());
        $('.numero2').text($(this).children('td:nth-of-type(4)').text());
        $('.fecha2').text($(this).children('td:nth-of-type(5)').text());
        $('.dinero2').text($(this).children('td:nth-of-type(6)').text());
        $('.clave2').text($(this).children('td:nth-of-type(7)').text());

        $('.visor').fadeIn('slow');
    });

    $('#btn_continuar').click(function() {
        if ($('.visor').is(':visible')) {
            cambiaFlujo('.wra_flu1');
            cambiaPaso(2);
            $('.w4_PS_tabla2').load('../../../../tablas/w4/w4_PS_tblPaso2.html');
        }
    });

    $('.w4_AS_servicio').click(function() {

        $('.w4_AS_servicio').find('img').removeClass('w4_AS_seleccionado');
        $(this).find('img').addClass('w4_AS_seleccionado');
        textoServicio = $(this).find('p').text();
    });


});

function visibilidad() {
    $('.w4_AS_servicio').find('img').removeClass('w4_AS_seleccionado');
    $('.w4_AS_listado').slideDown();
    $('.w4_AS_inputsAlta').slideUp();
    $('.w4_AS_busqueda').slideUp();
}

function encontrado() {
    if (textoServicio == 'Axtel') {
        $('.w4_AS_listado').slideUp();
        $('.w4_AS_inputsAlta').slideDown();
        $('.w4_AS_busqueda').slideDown();
    } else {
        $('.w4_AS_listado').slideUp();
        $('.w4_AS_inputsAlta').slideDown();
        $('.w4_AS_busqueda').slideUp();
    }
}

function activacion() {
    $('.w4_flu1_activo').removeClass('liActive');
    $('.w4_flu2_activo').addClass('liActive');
    cambiaFlujo('.wra_flu2');

}

function selecServicio(servicio) {
    var servicioRev = '';
    switch (servicio) {
        case 'Axtel':
            servicioRev = 'w4_PS_servicioImg_1';
            break;
        case 'Telcel':
            servicioRev = 'w4_PS_servicioImg_2';
            break;
        case 'G.N.P. Seguros':
            servicioRev = 'w4_PS_servicioImg_3';
            break;
        case 'Telmex':
            servicioRev = 'w4_PS_servicioImg_4';
            break;
    }
    return servicioRev;
}

function muestraServicios() {
    for (var i = 1; i <= 4; i++) {
        $('.w4_PS_Img').removeClass('w4_PS_servicioImg_' + i);
    }
    $('.w4_PS_consultaPS').hide();
    $('.visor').hide();
    $('.w4_PS_cuadroTarjeta').fadeIn('slow');
    $('.w4_PS_servicioPago').fadeIn('slow');
}

function slider() { //Pendiente
    if ($(".w4_AS_servSlider").is(":animated")) {
        return false;
    }
    var left = $(".w4_AS_servSlider").css("left");
    var li = "-5px";
    var centro = "-657px";
    var segundoDos = "-1347px"

    if (parseInt(left.replace("px", "")) > parseInt(li.replace("px", ""))) {

        $(".w4_AS_servSlider").animate({
            left: '-=690px'
        }, 500);
    } else if (parseInt(left.replace("px", "")) == parseInt(centro.replace("px", ""))) {
        $(".w4_AS_servSlider").animate({
            left: '-=690px'
        }, 500);
    } else if (parseInt(left.replace("px", "")) == parseInt(segundoDos.replace("px", ""))) {
        if (identificador == 1) {
            1
            $(".w4_AS_servSlider").animate({
                left: '+=690px'
            }, 500);
        } else {
            $(".w4_AS_servSlider").animate({
                left: '+=690px'
            }, 500);
        }

    }

}

function cargaHtml(componente, url) {
    $(componente).load(url);
}
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


$(document).ready(function() {
    Gridius($('.containerG'), {
        hasStatus: true,
        configButton: true,
        colums: ['Fecha', 'Descripcion', 'RFC', 'Moneda Extranjera (MXP)', 'Tipo de cambio (MXP)', 'Cantidad (MXP)', 'Estatus'],
        rowsValues: ['dd/mm/aaaa', 'Lorem Ipsum', 'ABC12345678', '999,999,999.00', '999,999,999.00', '0.00%', 'estatus'],
        numRows: 10
    });
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

})();
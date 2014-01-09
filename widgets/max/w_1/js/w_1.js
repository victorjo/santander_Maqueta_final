$(document).ready(function() {
    Gridius($('.containerG'), {
        hasStatus: true,
        configButton: true,
        colums: ['Tarjeta de Credito', 'Saldo disponible (MXP)', 'Saldo a transferir (MXP)', 'Pago mensual(MXP)', 'Tasa*', 'Estatus'],
        rowsValues: ['<input type="radio"><img src="img/iconos/card.png"> 1234****5678', '999,999,999.00', '000.0.', '1000.00', '99.99%', ''],
        numRows: 10
    });
    construyeSwitch("switchBox");

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

});
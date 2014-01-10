 var js = [{
     text: "Elemento 0",
     value: 1,
     selected: false
 }];


 $(document).ready(function() {
     $(".select_OC").ddslick({
         data: js,
         width: 300,
         imagePosition: "left",
         onSelected: function(selectedData) {

         }
     });

     firstS();
 });

 function firstS() {

     var title = '<div id="fisrtT">';
     title += '<div class="iconFlujo">';
     title += '<img src="../../../img/assets/ico_balance.png"/>';
     title += '</div>';
     title += '<p class="titulo">Solicitar transferencia de datos</p>';
     title += '<p class="subtitulo">Seleccione la operacion que desea realizar</p>';
     title += '<table style="margin-top:3px">';
     title += '<tr>';
     title += '<td style="padding-left:100px;font-size:12px;font-weight:bold;width:159px">Transferencia de saldos de otras tarjetas de credito</td>';
     title += '<td><div class="switchBox"></div></td>';
     title += '<td style="font-size:12px;font-weight:bold;vertical-align: top;padding-top: 14px;">Disposicion de tarjeta a cuenta de cheques</td>';
     title += '</tr>';
     title += '</table>';
     title += '</div>';
     $(".titFlujo").html(title);

     $('#firstS').fadeIn();
     $('#secondS').hide();

     Gridius($('.containerG'), {
         hasStatus: false,
         configButton: false,
         colums: ['Tarjeta de Credito', 'Saldo disponible (MXP)', 'Saldo a transferir (MXP)', 'Pago mensual(MXP)', 'Tasa*'],
         rowsValues: ['<input type="radio"><img src="img/iconos/card.png"> 1234****5678', '999,999,999.00', '000.0.', '1000.00', '99.99%'],
         numRows: 10
     });

     construyeSwitch("switchBox");

 }

 function secondS() {

     var title = '<div id="SecondT">';
     title += '<div class="iconFlujo">';
     title += '<img src="../../../img/assets/ico_cuentas_propias.png"/>';
     title += '</div>';
     title += '<p class="titulo">Consultar estado de transferencias de saldo</p>';
     title += '<p class="subtitulo">A continuacion puede consultar las solicitudes de transferencias que ha realizado a sus tarjetas Santander</p></div>';


     $(".titFlujo").html(title);
     $('#firstS').hide();
     $('#secondS').fadeIn();

     Gridius($('.containerH'), {
         hasStatus: true,
         configButton: true,
         colums: ['Fecha', 'Tarjeta Destino', 'Banco', 'Tarjeta origen', 'Saldo Transferido', 'Comision', 'Tasa*', 'Estatus'],
         rowsValues: ['dd/mm/aaaa', '123456789876543', 'Sandanter', '123456789876543', '999,999,999.00', '9.99%', ''],
         numRows: 10
     });
 }
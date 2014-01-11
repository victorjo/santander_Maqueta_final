 var js = [{
     text: "Elemento 0",
     value: 1,
     selected: false
 }];


 $(document).ready(function() {
     /*$(".select_OC").ddslick({
         data: js,
         width: 300,
         imagePosition: "left",
         onSelected: function(selectedData) {

         }
     });*/

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
     $(".titFlujoP1").html(title);

     //$('#firstS').fadeIn();
     //$('#secondS').hide();

     Gridius($('.containerG'), {
         hasStatus: false,
         configButton: false,
         colums: ['Tarjeta de Credito', 'Saldo disponible (MXP)', 'Saldo a transferir (MXP)', 'Pago mensual(MXP)', 'Tasa*'],
         rowsValues: ['<input type="radio"><img src="img/iconos/card.png"> 1234****5678', '999,999,999.00', '000.00<span class="aprovedG"></span>', '1000.00', '99.99%'],
         numRows: 10
     });

     construyeSwitch("switchBox");

 }

 function secondS() {

     var title = '<div id="SecondT">';
     title += '<div class="iconFlujo">';
     title += '<img src="../../../img/assets/ico_balance.png"/>';
     title += '</div>';
     title += '<p class="titulo">Consultar estado de transferencias de saldo</p>';
     title += '<p class="subtitulo">A continuacion puede consultar las solicitudes de transferencias que ha realizado a sus tarjetas Santander</p></div>';


     $(".titFlujoP1").html(title);
     //$('#firstS').hide();
     //$('#secondS').fadeIn();

     Gridius($('.containerH'), {
         hasStatus: true,
         configButton: true,
         colums: ['Fecha', 'Tarjeta Destino', 'Banco', 'Tarjeta origen', 'Saldo Transferido', 'Comision', 'Tasa*', 'Estatus'],
         rowsValues: ['dd/mm/aaaa', '123456789876543', 'Sandanter', '123456789876543', '999,999,999.00<span class="aprovedG"></span>', '9.99%', '0.00%', ''],
         numRows: 10
     });
 }

 function cargaTermino() {
     cargaTerm(" switchModal(); cambiaPaso(3); cambiaText(); cargaHtml('.tabla3','../../../../tablas/w6/w6_ST_tblPaso3.html');", 'terminos');
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

 function cambiaText() {
     $('.w6_txt').html("<span class = 'bold'> Operacion Exitosa </span> <br><br> Se ha realizado <br> con éxito su operación");
     $('.w6_txt').addClass('w6_texto_acomodo');
 }

 function regresaTexto() {
     $('.w6_txt').html('');
     $('.w6_txt').html("*Calculado al 08 de Noviembre <br>del 2013. Considera <br>una linea de crédito de $123,000.00 a un  <br> plazo de 3 años de <br> amortización del crédito y <br> cubriendo el porcentaje del pago mínimo.</p >");
     $('.w6_txt').removeClass('w6_texto_acomodo');
 }
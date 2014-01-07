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
 (function() {

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

     var data = {
         colums: ['Fecha', 'Descripción', 'Referencia', 'Cuenta de cargo', 'Cuenta destino', 'Importe', 'Estatus'],
         rowsValues: ['dd/mm/aaaa', '123456789123', '123456789123', '1234****7890', '1234****7890', '999,999,999.00', 'Exitosa'],
         numRows: 30
     }


     Gridius($('.tablaDinamica'), data);

 })();

 function cargaHtml(componente, url) {
     $(componente).load(url);
 }
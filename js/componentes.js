$(document).ready(function(){
  dropIsra();  
});

var cards = [
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
        {label:'1234****5678  Producto Santander  Alias   999,999,999.00',value:'1234****5678  Producto Santander'},
  ];


/*Funcion switch (Normal de label dos digitos)- instanciado mediante clases*/
function switchFunc(object,descripcion1,descripcion2,tipoModulo){

var switchO = '<div style="position:relative;width:230px;">';
         switchO += '<div class="on'+tipoModulo+'">'+descripcion1+'</div>';
         switchO += '<div class="tope'+tipoModulo+'"></div>';
         switchO += '<div class="off'+tipoModulo+'">'+descripcion2+'</div>';
         switchO += '</div>';

  var container = $("#"+object);

  container.html(switchO); 
  
  container.children("div:first").find(".on"+tipoModulo).click(function(){
    container.children("div").animate({
    left:"-=45"
    },"fast");
  });

  container.children("div:first").find(".off"+tipoModulo).click(function(){
    container.children("div").animate({
    left:"+=45"
    },"fast");
  });
}

/*Funhcion switch (label de mas de dos digitos)--- Flujo: Domiciliaciones ó mas */
function switchFuncDomMas(object,descripcion1,descripcion2,tipoModulo){

var switchO = '<div style="position:relative;width:230px;">';
         switchO += '<div class="on'+tipoModulo+'">'+descripcion1+'</div>';
         switchO += '<div class="tope'+tipoModulo+'"></div>';
         switchO += '<div class="off'+tipoModulo+'">'+descripcion2+'</div>';
         switchO += '</div>';

  var container = $("#"+object);

  container.html(switchO); 
  
  container.children("div:first").find(".on"+tipoModulo).click(function(){
    container.children("div").animate({
    left:"-=80"
    },"fast");
  });

  container.children("div:first").find(".off"+tipoModulo).click(function(){
    container.children("div").animate({
    left:"+=80"
    },"fast");
  });
}

/***********************************************************************************
**** Html structure for dropIsra     ****    Necesary classes { dropdown,downI,upI }    ****************************************
<div class="dropdown">
  <img class="downI" src="../img/iconos/dropdown.png" style="display: block;">
  <img class="upI" src="../img/iconos/dropup.png" style="display: none;">
  <h6>Quiero notificación previa de mi pago</h6>
</div>
******* *   * * * * * **    

*/
//Funtion to generate functionality

   function dropIsra(selector){
      $(".downI").click(function(){
        $(this).hide();
        $(this).next().show();
        $(this).parent().next(".wra_Select4").show("slow");
      });
      $(".upI").click(function(){
        $(this).hide();
        $(this).prev().show();
        $(this).parent().next(".wra_Select4").hide("slow");
      });
   }
               
  ////************ Component for blackhorsebox
  function omniBox(selector,objectCards){
    var auto = $("#"+selector);
    auto.autocomplete({
      source:objectCards || cards,
      minLength:0,
      open: function(){
      	$(".ui-autocomplete").css({"max-height":"201px","overflow-y":"scroll","font-size":"13px","width":"480px"})
      }
    });

    $("#"+selector).parent().next().next().find("span").on("click",function(){
      console.log("se creo el evento");
      auto.autocomplete( "search","");
    });
    
    $(".activo").click(function(){
      $(".activo").hide("fast");
      $(".inactivo").show("fast");
    });

    $(".inactivo").click(function(){
      $(".activo").show("fast");
      $(".inactivo").hide("fast");
    });
  }

/*****************SUPER BANNER*****************/



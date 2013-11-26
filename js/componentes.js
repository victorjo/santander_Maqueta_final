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

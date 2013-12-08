$(document).ready(function(){
  dropIsra();
  avatarFade(); 
  $(".widget-min").hover(function(){
    $(this).css({"box-shadow":"0 0 3px #757575"});
  
  },function(){
    $(this).css({"box-shadow":"none","border":"none"});
  });

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

/*Funhcion switch (label de mas de dos digitos)--- Flujo: Domiciliaciones Ã³ mas */
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
  <h6>Quiero notificaciÃ³n previa de mi pago</h6>
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

/*Mostrara el step 1, mientras que ocultara los demÃ¡s steps apartir del 2*/
function ocultaSteps(num_Step){
  for(var i=2;i<=num_Step; i++){
    $('#step'+i).hide();
  }
}

function creaToken(contenedor,cbTokenCanc,cbTokenAcep,moreData){

tokenHTML = '<div id="widreducido"><div id="headerWidget"><p>TOKEN</p><div id="btninfo"></div></div><div id="subtitulo">';
tokenHTML += '<p>Para realizar su operación es necesario<br/>ingresar el código del TOKEN:</p></div><div id="token">';
tokenHTML += '<img src="img/token.png"/></div><div id="input"><input class="input" type="text" placeholder="Ingresar TOKEN" />';
tokenHTML += '</div><div class="botoneraWidget"><div class="btn" onclick="'+cbTokenCanc+'">Cancelar</div><div class="btnaceptar" onclick="'+cbTokenAcep+'" '+moreData+'>Aceptar</div></div></div>';

$("#"+contenedor).html(tokenHTML);

}


  function avatarFade(){
    $("#avatarNavPrin").hover(function(){
<<<<<<< HEAD
        if($("#fadeAvatar").is(":animated")){
          return false
        }else{
          $("#fadeAvatar").fadeToggle("slow");
        }      
        
=======
        $("#fadeAvatar").fadeToggle("slow");
>>>>>>> bca67e77d287c59de686b305eaa6d159a4deb0d8
    });
  }


  /*********  FIN Transiciones de flujo(1): DomiciliaciÃ³n de servicios **********/

/*Mostrara el step 1, mientras que ocultara los demÃ¡s steps apartir del 2*/
function ocultaSteps(num_Step){
  for(var i=2;i<=num_Step; i++){
    $('#step'+i).hide();
  }
}


/*Funciones de bloqueo (Overlay)*/

function creaOverlay(color,contenedor,tipo){
  $(document).ajaxStart(function() {
    $(".loader").show();
  });
  $(document).ajaxStop(function() {
    $(".loader").hide();
  });
  pos = (tipo==1)?'absolute':'fixed';
  zposition = (tipo==1)?'1000':'';
  var divOverlay =  $("<div>");
  var c = $(contenedor);
  c.css("position","relative");

  if(tipo == 1){
    divOverlay.attr({"id":"modalOver","class":"modal"});
  }else{
    divOverlay.attr({"id":"banOverlay","class":"modal"});
  }
  altoTotal = c.height();
  anchoTotal = c.width();
  divOverlay.css({"position":pos,"top":"0","left":"0","width":(anchoTotal*1.20)+"px","background":color,"opacity":".8","height":"100%",'display':'none',"z-index":zposition});
  c.append(divOverlay);
  divOverlay.fadeIn("slow");
  return $("body").attr("data-banpop","true");
}

function creaModal(contenedor,tipo,contenido){ 
  pos = (tipo==1)?'absolute':'fixed';
  var c = $(contenedor);
  divContent = $("<div>");
  divCerrar = $("<div>");
  divCerrar.attr({"id":"cerrarBtn","class":"modal"});
  divCerrar.css({"position":"absolute","top":"0","right":"0","background":"url(../img/botones/cerrar.png) center","width":"30px","height":"30px","cursor":"pointer"});
  divCerrar.click(destruyeOverlay);

  divContent.attr({"id":"contentOverlay","class":"modal"});
  divContent.css({"position":pos,"top":"0","left":"50%","width":(anchoTotal-140)+"px","padding":"40px","height":(altoTotal/2)+"px","border":"1px solid black","display":"block","z-index":"1000","box-shadow":"0 0 5px #ccc","overflow":"auto","background":"white","margin-left":"-","margin-top":"10%"});
  divContent.css({"margin-left":"-"+((divContent.width()/2)+40)+"px"})
  divContent.fadeIn("slow");
  c.append(divContent);
  divContent.load(contenido,function(){
    divContent.append(divCerrar);
    // divContent.append("");
  });

}


function destruyeOver(){
  $("#modalOver").fadeOut("slow",function(){
    $("#modalOver").remove();
  });
  $("#contentOverlay").fadeOut("slow",function(){
    $("#contentOverlay").remove();
  });
}



function destruyeOverlay(){ 
  if($("body").attr("data-banpop")=="true"){
    $(".modal").each(function(){
      $(this).fadeOut("slow",function(){
        $(this).remove();
      })
    });

    return false;

  }
}

/*Transicion de pasos*/
function cambiaFlujo(step){
  var npasos = $(".pasos").size();
    $(".pasos").each(function(index){
      if((++index) == npasos){
        $(this).fadeOut("slow",function(){
          $(step).delay(1000).fadeIn();
        });
  
      }else{
        $(this).fadeOut("slow");
      }
    })

}
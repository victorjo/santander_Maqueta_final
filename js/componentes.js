$(document).ready(function(){
  dropIsra();
  avatarFade(); 
  border();

  $("#WA_nav li").click(function(){
    if($(this).attr("class")=="menu") return false;
    var scope = $(this);
    $("li").removeClass("liActive");
    $(".minired").remove();
    scope.addClass("liActive");
  });


});

function border(obj){
	$("#wrappWidgets").hide().show();
	var ojec = obj || ".widget-min";
	$(ojec).hover(function(){
    if(typeof $(this).attr("instanced") == "undefined" && $(this).attr("instanced")!="true"){ 
	 $(this).css({"box-shadow":"0 0 3px #757575","border":"1px solid #FF0000"});
	 $(this).css({"margin-top":"-=2px","margin-right":"-=3px"});
	}
  },function(){
	if(typeof $(this).attr("instanced") == "undefined" && $(this).attr("instanced")!="true"){ 
		$(this).css({"box-shadow":"none","border":"none"});
		$(this).css({"margin-top":"+=2px","margin-right":"+=3px"});
	}
  }

  );
}

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

/*Mostrara el step 1, mientras que ocultara los demás steps apartir del 2*/
function ocultaSteps(num_Step){
  for(var i=2;i<=num_Step; i++){
    $('#step'+i).hide();
  }
}

/** funcionalidad de botones Continuar y atras**/
  /*********  INICIO Transiciones de flujo: Domiciliación de servicios **********/
  $("#siguiente").click(function(){
    $("#step1").fadeOut("slow",function(){
      $("#step2").fadeIn("slow");       
      });
  });

  $("#siguiente2").click(function(){
    $("#step2").fadeOut("slow",function(){
      $("#step3").fadeIn("slow");       
      });
  });

  $("#siguiente3").click(function(){
    $("#step3").fadeOut("slow",function(){
      $("#step4").fadeIn("slow");       
      });
  });
  

  /*Transiciones de flujo (atras): Domiciliación de servicios*/
  $("#regresar").click(function(){
    $("#step2").fadeOut("slow",function(){
      $("#step1").fadeIn("slow");       
      });
  });



  function avatarFade(){
    $("#avatarNavPrin").hover(function(){
        $("#fadeAvatar").fadeToggle("slow");


    });
  }


  /*********  FIN Transiciones de flujo(1): Domiciliación de servicios **********/

/*Mostrara el step 1, mientras que ocultara los demás steps apartir del 2*/
function ocultaSteps(num_Step){
	for(var i=2;i<=num_Step; i++){
		$('#step'+i).hide();
	}
}


/****** MOTOR PARA CAMBIAR DE PASOS Y FLUJOS **////

var flujoActivo="";

      function escondeElemento(elemento){
        e=(elemento=='f')?".flujo":'.step';
        $(e).each(function(){
          $(this).fadeOut(0);
        });
      };

      function cambiaFlujo(flujo){
        if($(".flujo").is(":animated")) return false;
        escondeElemento('s');
        escondeElemento('f');
        flujoActivo = flujo;
        $(flujoActivo).find(".step").first().css("display","block");
        $(flujoActivo).fadeIn("slow");
      }

      function cambiaPaso(paso){
        flujoActivo = $(flujoActivo);
        escondeElemento("s");
        flujoActivo.find(".step"+paso).fadeIn("slow");
        pasoPos = "-2px";
        switch(paso) {
          case 1:
              pasoPos = "-2px"
            break;
          case 2:
              pasoPos = "-26px"
            break;

          case 3:
              pasoPos = "-50px"
            break;

          default:
              alert("el paso seleccionado no se encuentra registrado");
            break;  

        }

        $("#WA_pasos img").css("margin-top",pasoPos);


      }

/****** FIN DE MOTOR PARA CAMBIAR DE PASOS Y FLUJOS **////








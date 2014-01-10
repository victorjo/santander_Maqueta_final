$(document).ready(function(){
  dropIsra();
  avatarFade(); 
  border();
  
  $(".w17_STC_selectorInteres1").click(function(){
  	$("#menuredstc").children().removeClass("w17_STC_selectorInteres1select w17_STC_selectorInteres2select w17_STC_selectorInteres3select w17_STC_selectorInteres4select");
  	$(this).addClass("w17_STC_selectorInteres1select");
  	});
  
   $(".w17_STC_selectorInteres2").click(function(){
  	 $("#menuredstc").children().removeClass("w17_STC_selectorInteres1select w17_STC_selectorInteres2select w17_STC_selectorInteres3select w17_STC_selectorInteres4select");
  	$(this).addClass("w17_STC_selectorInteres2select");
  	});
  
  $(".w17_STC_selectorInteres3").click(function(){
  	 $("#menuredstc").children().removeClass("w17_STC_selectorInteres1select w17_STC_selectorInteres2select w17_STC_selectorInteres3select w17_STC_selectorInteres4select");
  	$(this).addClass("w17_STC_selectorInteres3select");
  	});

	$(".w17_STC_selectorInteres4").click(function(){
  	 $("#menuredstc").children().removeClass("w17_STC_selectorInteres1select w17_STC_selectorInteres2select w17_STC_selectorInteres3select w17_STC_selectorInteres4select");
  	$(this).addClass("w17_STC_selectorInteres4select");
  	});
  	
  	$("#menuredstc div").click(function(){
  		$("#cardsstc").fadeOut("fast",function(){
  			$("#cardsstc").fadeIn("fast");
  			});
  		});
  	


  $("#WA_nav li").click(function(){
    if($(this).attr("class")=="menu") return false;
    var scope = $(this);
    $("li").removeClass("liActive");
    $(".minired").remove();
    scope.addClass("liActive");
  });
  
  /*--- Funcionalidad Switch ---*/

 $(".switchLabel").click(function(){
        $(".switchSlide").animate({
            "left":"-=78px"
            },"fast");
        $(".dateInput").addClass("dateInputInactive");
        $(".notificacion").hide();
        
    });
    
    $(".switchLabelR").click(function(){
        $(".switchSlide").animate({
            "left":"+=78px"
            },"fast");
        $(".dateInput").removeClass("dateInputInactive");
        $(".notificacion").show();
    });


/*--- Fin Funcionalidad Switch ---*/    


});

function border(obj){
  return false;
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



  /*
  function avatarFade(){
    $("#avatarNavPrin").hover(function(){
        $("#fadeAvatar").fadeToggle("slow");


    });
  }*/

  function avatarFade() {
    $("#avatarNavPrin").hover(function() {
        if ($("#fadeAvatar").is(":animated")) {
            return false
        } else {
            $("#fadeAvatar").fadeToggle("slow");
        }


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
            case 0:
              pasoPos = "-2px"
            break;

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

        if(paso==3)
        {
          $(".btn,.btnaceptar").click(function(){
            if($(this).text()=="Imprimir"){
                print("step3");
            }
          });
        }

      }

/****** FIN DE MOTOR PARA CAMBIAR DE PASOS Y FLUJOS **////

;(function ($) {
    var opt;
    $.fn.printThis = function (options) {
        opt = $.extend({}, $.fn.printThis.defaults, options);
        var $element = this instanceof jQuery ? this : $(this);
        
            var strFrameName = "printThis-" + (new Date()).getTime();

            if(window.location.hostname !== document.domain && navigator.userAgent.match(/msie/i)){
                // Ugly IE hacks due to IE not inheriting document.domain from parent
                // checks if document.domain is set by comparing the host name against document.domain
                var iframeSrc = "javascript:document.write(\"<head><script>document.domain=\\\"" + document.domain + "\\\";</script></head><body></body>\")";
                var printI= document.createElement('iframe');
                printI.name = "printIframe";
                printI.id = strFrameName;
                printI.className = "MSIE";
                document.body.appendChild(printI);
                printI.src = iframeSrc;
                
            } else {
                 // other browsers inherit document.domain, and IE works if document.domain is not explicitly set
                var $frame = $("<iframe id='" + strFrameName +"' name='printIframe' />");
                $frame.appendTo("body");
            }
            
                       
            var $iframe = $("#" + strFrameName);
            
            // show frame if in debug mode
            if (!opt.debug) $iframe.css({
                position: "absolute",
                width: "0px",
                height: "0px",
                left: "-600px",
                top: "-600px"
            });
            
            
        // $iframe.ready() and $iframe.load were inconsistent between browsers    
        setTimeout ( function () {
            
            var $doc = $iframe.contents();
            
            // import page stylesheets
            if (opt.importCSS) $("link[rel=stylesheet]").each(function () {
                var href = $(this).attr("href");
                if (href) {
                    var media = $(this).attr("media") || "all";
                    $doc.find("head").append("<link type='text/css' rel='stylesheet' href='" + href + "' media='" + media + "'>")
                }
            });
            
            //add title of the page
            if (opt.pageTitle) $doc.find("head").append("<title>" + opt.pageTitle + "</title>");
            
            // import additional stylesheet
            if (opt.loadCSS) $doc.find("head").append("<link type='text/css' rel='stylesheet' href='" + opt.loadCSS + "'>");
            
            // print header
            if (opt.header) $doc.find("body").append(opt.header);

            // grab $.selector as container
            if (opt.printContainer) $doc.find("body").append($element.outer());
                
            // otherwise just print interior elements of container
            else $element.each(function () {
                $doc.find("body").append($(this).html());
            });
            
            // remove inline styles
            if (opt.removeInline) {
                // $.removeAttr available jQuery 1.7+
                if ($.isFunction($.removeAttr)) {
                    $doc.find("body *").removeAttr("style");
                } else {
                    $doc.find("body *").attr("style", "");
                }
            } 
            
            setTimeout(function () {
                if($iframe.hasClass("MSIE")){
                    // check if the iframe was created with the ugly hack
                    // and perform another ugly hack out of neccessity
                    window.frames["printIframe"].focus();
                    $doc.find("head").append("<script>  window.print(); </script>");
                } else {
                    // proper method
                    $iframe[0].contentWindow.focus();
                    $iframe[0].contentWindow.print();  
                }
                
                 $element.trigger( "done");
                 //remove iframe after print
                if (!opt.debug) {
                    setTimeout(function () {
                        $iframe.remove();
                    }, 1000);
                }
                
            }, opt.printDelay);
             
        }, 333 );
        
    };
    
    // defaults
    $.fn.printThis.defaults = {
        debug: false,           // show the iframe for debugging
        importCSS: true,        // import parent page css
        printContainer: true,   // print outer container/$.selector
        loadCSS: "",            // load an additional css file
        pageTitle: "",          // add title to print page
        removeInline: false,    // remove all inline styles
        printDelay: 333,        // variable print delay S. Vance
        header: null            // prefix to html
    };
    
    // $.selector container
    jQuery.fn.outer = function () {
        return $($("<div></div>").html(this.clone())).html()
    }
})(jQuery);
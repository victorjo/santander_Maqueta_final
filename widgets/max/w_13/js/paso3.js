$(document).ready(function() {
	$(".navegador > ul > li").click(function(){
		var scope = $(this),red = '<div class="minired"><div class="red"></div></div>';
		$(".navegador > ul > li").removeClass("liActive").addClass("liShadow");
		$(".minired").remove();
		$(red).prependTo(this).show();
		scope.removeClass("liShadow").addClass("liActive");
		dot();
	});

  /*Funcionalidades para TABS - Mis TDC Santandern*/
  $('#tabs li a').click(function(){
    $('#tabs li, #content .current').removeClass('current');
    $(this).parent().addClass('current');
    var currentTab = $(this).attr('href');
    $(currentTab).addClass('current');
    if(currentTab == '#tab2'){
      $('.calendario').hide();
      $('.oculta').hide();
      
    }else{
      $('.calendario').show();
      $('.oculta').show();
    }
  });

  $('.radioEstrella').click(function(){
    $('.radioEstrella').removeClass('radioSelected');
    $(this).addClass('radioSelected');
  });

  $('.imagen').click(function(){
    $('.imagen').removeClass('imagenSelected');
    $(this).addClass('imagenSelected');
  });
  
  // --- Switch --- //
  $(".switchLabel").click(function(){
    $(".switchSlide").animate({
      "left":"-=39px"
      },"fast");
    $('.input3').attr('disabled','disabled');
    $('.input3').removeClass('activo');
    $('#ico').removeClass('calico');
    $('#ico').addClass('calicoNo');
  });
  
  $(".switchLabelR").click(function(){
    $(".switchSlide").animate({
      "left":"+=39px"
      },"fast");
    $('.input3').removeAttr('disabled');
    $('.input3').addClass('activo');
    $('#ico').removeClass('calicoNo');
    $('#ico').addClass('calico');
  });

  // --- Fin Switch --- //

  //datepicker
  $( "#dia" ).datepicker();

  //lista omniBox
  omniBox("autocompleteQ",cards);
  omniBox("autocompleteQ1",cards);

  /*------ Fin funcionalidades -------*/

  /*--- Funcionalidad A otras tarjetas ---*/

  /*--- Fin Funcionalidad A otras tarjetas ---*/


});

function dot(){
	setInterval(function(){
	$(".red").animate({		
                            width:"+=10px",
                            height:"+=10px",
                            "margin-top":"-=5px",
                            "margin-left":"-=5px",
                            opacity:0                                                    
                            },1000,function(){
								$(".red").css({width:"-=10px",
                            height:"-=10px",
                            "margin-top":"+=5px",
                            "margin-left":"+=5px",
                            opacity:1   });                          		
  	
                          }
             );
	},1001);
}

  /*---  Elementos: A otras tarjetas ---*/


  /*--- Fin Elementos: A otras tarjetas ---*/
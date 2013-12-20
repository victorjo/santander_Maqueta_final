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

  $('.radios').click(function(){
    $('.radios').removeClass('radioSelected');
    $(this).addClass('radioSelected');
  });

  $('.imagen').click(function(){
    $('.imagen').removeClass('imagenSelected');
    $(this).addClass('imagenSelected');
  });
  
  /*------ Fin funcionalidades -------*/

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
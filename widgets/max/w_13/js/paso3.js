$(document).ready(function() {
	$(".navegador > ul > li").click(function(){
		var scope = $(this),red = '<div class="minired"><div class="red"></div></div>';
		$(".navegador > ul > li").removeClass("liActive").addClass("liShadow");
		$(".minired").remove();
		$(red).prependTo(this).show();
		scope.removeClass("liShadow").addClass("liActive");
		dot();
	});
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
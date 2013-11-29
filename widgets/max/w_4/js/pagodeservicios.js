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
  
  //dropdown
  $("#infobtn").click(function(){
		$("#info").fadeToggle("slow");
       });
       
  $("#downico1").click(function(){
  		$("#downico1").hide();
  		$("#upico1").show();
  		$("#select1").show("slow");
  		});
  		
  $("#upico1").click(function(){
  		$("#upico1").hide();
  		$("#downico1").show();
  		$("#select1").hide("slow");
  		});
  
  $("#downico2").click(function(){
  		$("#downico2").hide();
  		$("#upico2").show();
  		$("#select2").show("slow");
  		});
  		
  $("#upico2").click(function(){
  		$("#upico2").hide();
  		$("#downico2").show();
  		$("#select2").hide("slow");
  		});
	//enddropdown
	
	//Transición paso 2
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
		$("#step4").fadeOut("slow",function(){
			$("#step5").fadeIn("slow");				
			});
	});
	
	$("#siguiente4").click(function(){
		$("#step5").fadeOut("slow",function(){
			$("#step6").fadeIn("slow");				
			});
	})
	
	$("#siguiente5").click(function(){
		$("#step7").fadeOut("slow",function(){
			$("#step8").fadeIn("slow");				
			});
	})
	
	$("#siguiente6").click(function(){
		$("#step8").fadeOut("slow",function(){
			$("#step9").fadeIn("slow");				
			});
	})
	
	$("#btnreturn").click(function(){
		$("#step3").fadeOut("slow",function(){
			$("#step1").fadeIn("slow");				
			});
	});
	
	$("#btnreturn2").click(function(){
		$("#step6").fadeOut("slow",function(){
			$("#step4").fadeIn("slow");				
			});
	});
	
	$("#btnreturn3").click(function(){
		$("#step9").fadeOut("slow",function(){
			$("#step7").fadeIn("slow");				
			});
	});




	
	//Transicion entre operaciones
	$("#navegador > ul > :nth-child(1)").click(function(){
		cambiaFlujo("#step1");
	});

	
	$("#navegador > ul > :nth-child(2)").click(function(){
		cambiaFlujo("#step4");
	});
	
	$("#navegador > ul > :nth-child(3)").click(function(){
		cambiaFlujo("#step7");
	});

		
}


function cambiaFlujo(step){
	
	alert("si entro"+step)

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


       
            	 
           

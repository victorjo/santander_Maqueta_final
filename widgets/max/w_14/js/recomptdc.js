$(document).ready(function() {


	$(".leftarrow").click(function(){
	
			$(".slider").animate({
				"left":"-=200px"
				},"fast");
			
	});
	

	
	$(".rightarrow").click(function(){
		$(".slider").animate({
			"left":"+=200px"
			},"fast");
			
	});






	$('.link').click(function(){
		creaOverlay("#fff","#widampliado",1);
		creaTelCel('modalOver',"destruyeOver();",'','');
	});
		




$(".switchLabel").click(function(){
			$(".switchSlide").animate({"left":"-=39px"},"fast");
			
			$('#ico').removeClass('calico');
			$('#ico').addClass('calicoNo');
			$('.dropcontainer').slideToggle("slow");
			$('#ico').removeClass('calicoNo');
			$('#ico').addClass('calico');
			$('.input3').attr('disabled','disabled');
			$('.input3').removeClass('activo');
			
			
		});
			

			$(".switchLabelR").click(function(){
			$(".switchSlide").animate({"left":"+=39px"},"fast");
			$('.input3').removeAttr('disabled');
			$('.input3').addClass('activo');
			$('#ico').addClass('calico');
			$('#ico').removeClass('calicoNo');
			$('.dropcontainer').slideToggle("slow");


			

		  	});
		  	$('.downI').click(function(){
		  		$(".wra_Select2").slideToggle("fast");
		  	});

		  	


});
         	 


	




           

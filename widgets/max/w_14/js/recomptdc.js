$(document).ready(function() {


	$(".leftarrow").click(function(){
	
			$(".slider").animate({
				"left":"-=200px"
				},"fast");
			
	});
	
	$('.link').click(function(){
		creaOverlay("#fff","#widampliado",1);
		creaTelCel('modalOver',"destruyeOver();",'','');
	});
		
	
	$(".rightarrow").click(function(){
		$(".slider").animate({
			"left":"+=200px"
			},"fast");
			
	});
	


$(".switchLabel").click(function(){
			$(".switchSlide").animate({"left":"-=39px"},"fast");
			$('.dropdown').attr('disabled','disabled');
			$('.dropdown').removeClass('activo');
			$('#ico').removeClass('calico');
			$('#ico').addClass('calicoNo');});
			$(".switchLabelR").click(function(){
			$(".switchSlide").animate({"left":"+=39px"},"fast");
			$('.input3').removeAttr('disabled');
			$('.input3').addClass('activo');
			$('#ico').removeClass('calicoNo');
			$('#ico').addClass('calico');
		  	});



});
         	 
           

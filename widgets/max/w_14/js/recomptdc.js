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
	


$(".switchLabel").click(function(){
			$(".switchSlide").animate({"left":"-=39px"},"fast");
			$('.input3').attr('disabled','disabled');
			$('.input3').removeClass('activo');
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
         	 
           

$(document).ready(function(){

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

	$('.imagen').click(function(){
		$('.imagen').removeClass('imagenSelected');
		$(this).addClass('imagenSelected');
	});

	$('.radio').click(function(){
		$('.radio').removeClass('radioSelected');
		$(this).addClass('radioSelected');
	});

	//switch
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

	//datepicker
	$( "#dia" ).datepicker();

	//lista omniBox
	omniBox("autocompleteQ",cards);
});
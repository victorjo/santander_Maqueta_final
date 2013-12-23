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
	
});
         	 
           

var banPop = false;

function creaOverlay(){
function creaOverlay(color){
	var divOverlay =  $("<div>");
	var c = $(document.body);
	divOverlay.attr({"id":"banOverlay","class":"modal"});
	altoTotal = c.height();
	anchoTotal = c.width();
	divOverlay.css({"position":"fixed","top":"0","left":"0","width":anchoTotal+"px","background":color,"opacity":".8","height":"100%",'display':'none'});
	c.append(divOverlay);
	divOverlay.fadeIn("slow");
	divOverlay.click(destruyeOverlay);
	banPop = true;
	
}

function creaModal(){
function creaModal(){ 
	var c = $(document.body);
	divContent = $("<div>");
	divContent.attr({"id":"contentOverlay","class":"modal"});
	divContent.css({"position":"fixed","top":"0","left":"25%","width":(anchoTotal/2)+"px","height":(altoTotal/2)+"px","border":"1px solid black","display":"block","z-index":"1000","background":"red","margin":"15% auto auto"});
	divContent.fadeIn("slow");
	c.append(divContent);
}

function destruyeOverlay(){
	if(banPop){
		$(".modal").each(function(){
			$(this).fadeOut("slow",function(){
				$(this).remove();
			})
		});

		return false;

	}
}


function shortcuts(){
	$('body').keypress(function(e){
    switch(e.which){
   			case 0:
   				destruyeOverlay();
   			break;

   			default:
   			break;
   		}


	});
}

$(function(){
	shortcuts();
})



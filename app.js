(function(document, window, require) {

	requirejs.config({
		paths:{
			jquery:'js/jquery10.2.min',
			jqueryui:'js/ui/jquery-ui-1.10.3.custom.min',
			ddslick:'js/ddSlick',
			widgets:'js/widgets',
			utiles:'js/utiles',
			components:'js/componentes',
			mousewheel:'js/mouseWheel/jquery.mousewheel.min'
		}

	});

	requirejs(['jquery','widgets','utiles','components','ddslick'],function   ($) {
			altoVentana = $(window).height();
			//motorSuperbanner();
       		$("#cierraSB").click(cierraSB);
				validaBrowser()
				//if(typeof window.chrome =="undefined" || typeof window.safari == "undefined") reject();
				validaBrowser();
				posWidgets(0);
					genFooterHeight();
					ajustaBannerHeight();
<<<<<<< HEAD
					setInterval(function(){ /*motorSuperbanner()*/ },15000);
=======
					setInterval(function(){ /*motorSuperbanner();*/ },15000);
>>>>>>> bc03d9ac1779f34a14b67051ca53f348b06865bf
					//
						//valToForm();
						//outaLogin();
					//
					
			$("body").attr("data-banpop","false");
			shortcuts();
			//para commit
			window.onresize = function(){
				posWidgets(1);
				if($("#wrappSB").css("display")=="none" && $(window).width()<=1222) $("#wrappWidgets").css("width","771px");
			}
		$("#loginWrapper").show();
		$(".loader").hide();
	});

})(document, window || this, require);
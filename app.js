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
				$("body").append("<div class='loader'><span></span><span></span><span></span></div>");
				validaBrowser()
				//if(typeof window.chrome =="undefined" || typeof window.safari == "undefined") reject();
				validaBrowser();
				posWidgets(0);
					genFooterHeight();
					ajustaBannerHeight();
					setInterval(function(){ motorSuperbanner(); },15000);
					//
						//valToForm();
						//outaLogin();
					//
			$(document).ajaxStart(function() {
				$(".loader").show();
			});
			$(document).ajaxStop(function() {
				$(".loader").hide();
			});
			$("body").attr("data-banpop","false");
			shortcuts();
			//para commit
			window.onresize = function(){
				posWidgets(1);
				if($("#wrappSB").css("display")=="none" && $(window).width()<=1222) $("#wrappWidgets").css("width","771px");
			}
	});

})(document, window || this, require);
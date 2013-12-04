require.config({

  paths: {
    "jquery"        : 'libs/jquery/jquery-min',
    "jquerymobile"  : "libs/jquery/jquerymobile",
    "underscore"    : 'libs/underscore/underscore-min',
    "backbone"      : 'libs/backbone/backbone-min',
    "backboneLocalstorage"  : 'libs/backbone/backbone.localStorage',
    "templates"     : '../templates',
    "text"          : 'libs/require/text', /*http://goo.gl/TWa4r*/
    "cordova"       : 'libs/cordova/cordova', 
    "form"			: 'libs/jquery/form-params' /*http://goo.gl/nIuNx*/
  },
  
  shim: {
	        "backbone": {
	              "deps": [ "underscore", "jquery" ],
	              "exports": "Backbone" 
	        },
	        
	        "cordova": {
	         	"exports": "cordova"
	        }
		}

});

require([ "jquery" , "backbone" , "config" , "routers/router" , "models/storage/StorageModel", "cordova", "sync/sync_override"], function( $ , Backbone , Config , AppRoute, AppStore) {

	$( document ).on( "mobileinit",
	//$( document ).on( "pageinit",

		function() {

			$.mobile.linkBindingEnabled = false;
			$.mobile.hashListeningEnabled = false;
			$.mobile.defaultPageTransition = "slide";
			
		}
	);

	require( ["jquerymobile"], function() {
			
		 this.appStore = new AppStore();
		 this.appRoute = new AppRoute();

	});
} );


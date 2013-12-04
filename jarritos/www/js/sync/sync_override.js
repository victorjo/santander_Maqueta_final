/**
 * SYNC_OVERRIDE. Ejecuta override sobre las peticiones nativas RESTFull de backbone para poder usar JSONP
 * 
 * @author Pepe Medel
 *
*/

define([ "jquery", "backbone" ,"config", "sync/remote" ], function( $, Backbone, Config , Remote) {

	Backbone.sync = function(method, model, options) {
		
	  function success(result) {
	    if (options.success) {
	    	model.attributes.msg = result.msg;
	    	model.attributes.status = result.status;
	    	options.success(result.data);
	    }
	  }
	
	  function error(result) {
	    if (options.error) {
	      options.error(result);
	    }
	  }
	  
	  	options || (options = {});
	  	
	  	if(!model.localStorage)
	  	{
	  	
			var data_url =  decodeURIComponent($.param(model.attributes)); /*trasnforma el objeto de atributos de MODELy COLLECTION en una cadena de variables que es mandada por JSONP*/
			
			var ajax = Remote.call(model.url , data_url);
			
			ajax.success(function(data){

				success(data);
			});
			
			ajax.error(function(jqXHR, textStatus, errorThrown){
				
				error(textStatus);
			});
		}
		else
		{
			
		    return Backbone.getSyncMethod(model).apply(this, [method, model, options]);
		    
		}
	};

} );
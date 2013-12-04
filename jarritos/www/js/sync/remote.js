define([ "jquery"], function( $ ) {
	
	return {
		
		call : function(service_url , service_data){
			
		var ajax = $.ajax({ 

					dataType : "jsonp", 
					url		 : service_url,
					data	 : service_data,
					success: function(data, textStatus, jqXHR)
					{
						
					},
					
					complete: function( jqXHR ,textStatus) {
						
						$.mobile.loading( 'hide' );
						
					},
					
					beforeSend: function( ) {
						
						$.mobile.loading( 'show' );
					
					},
					
					error: function (jqXHR, textStatus, errorThrown)
					{
						$.mobile.loading( 'hide' );
					}
				});	
			return ajax;
		}
	}

} );


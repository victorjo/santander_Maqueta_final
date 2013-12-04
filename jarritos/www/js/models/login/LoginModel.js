define([ "jquery", "backbone" ,"config" ], function( $, Backbone, Config ) {

    // The Model constructor
    var LoginModel = Backbone.Model.extend( {
	    
	    defaults: {
		    "uuid"    :  null,
		    "password":  null,
		    "mail"    :  null
		},
	    
	    url : Config.services.base_url+ Config.services.auth.login
	    
    } );

    // Returns the Model class
    return LoginModel;

} );
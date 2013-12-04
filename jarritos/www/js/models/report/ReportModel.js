define([ "jquery", "backbone" ,"config" ], function( $, Backbone, Config ) {

    // The Model constructor
    var ReportModel = Backbone.Model.extend( {
	    
	    url : Config.services.base_url+ Config.services.code.register
	    
    } );

    // Returns the Model class
    return ReportModel;

} );
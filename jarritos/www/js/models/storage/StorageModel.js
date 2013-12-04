define([
  'underscore',
  'backbone',
  'backboneLocalstorage'
], function(_, Backbone) {
  
  var StorageModel = Backbone.Model.extend({
	  
	  defaults: {
	     
	  },
	  
	  localStorage: new Store("jarritos-storage"),
	  
	  initialize: function() {
	    
	    this.fetch();
	    
	 }
	 
  });

  return StorageModel;

});

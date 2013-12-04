define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/legal/LegalTemplate.html'
], function($, _, Backbone, LegalTemplate){

  var LegalView = Backbone.View.extend({
    
    el: $("#legal_stuff_content"),

    initialize: function() {

	    this.render();

    },
    
	events: {
		"click .title" : function(obj){
			
			$(obj.target).next().slideToggle();
		}
	},

    render: function(){
          
      var compiledTemplate = _.template( LegalTemplate );
      this.$el.html(compiledTemplate);
    }

  });

  return LegalView;
  
});

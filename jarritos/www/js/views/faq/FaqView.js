define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/faq/FaqTemplate.html'
], function($, _, Backbone, FaqTemplate){

  var FaqView = Backbone.View.extend({
    
    el: $("#faq_content"),

    initialize: function() {

	    this.render();

    },
    
	events: {
		"click .title" : function(obj){
			
			$(obj.target).next().slideToggle();
		}
	},

    render: function(){
          
      var compiledTemplate = _.template( FaqTemplate );
      this.$el.html(compiledTemplate);
    }

  });

  return FaqView;
  
});

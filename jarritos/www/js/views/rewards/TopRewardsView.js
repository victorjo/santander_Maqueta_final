define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'collections/rewards/TopRewardsCollection',
  'text!templates/rewards/TopRewardsTemplate.html'
], function($, _ , Backbone, Config, TopRewardsCollection, TopRewardsTemplate){

  var TopRewardsView = Backbone.View.extend({
  
    initialize: function() {

	    this.render();
	    var trc = new TopRewardsCollection([]);
	    
    },
    
    render: function(){
          
      var compiledTemplate = _.template( TopRewardsTemplate );
      this.$el.html(compiledTemplate);
      
    }

  });

  return TopRewardsView;
  
});

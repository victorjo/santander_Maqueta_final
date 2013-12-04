define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'collections/rewards/RewardsCollection',
  'text!templates/rewards/RewardsTemplate.html'
], function($, _ , Backbone, Config, RewardsCollection, RewardsTemplate){

  var RewardsView = Backbone.View.extend({
  
    el: $("#rewards_page_content"),
    initialize: function(category_id) {
	    
	    var _this = this;
	    var rewards = new RewardsCollection([]);
	    if(typeof category_id!=="undefined")
		    rewards.attributes.category = category_id;
	    rewards.fetch({success:function(collection){
		    _this.render(collection);
	    }});
	    
	    //console.log(this.rewards);
	    
    },
    
    render: function(collection){
	  var data = {
        rewards: collection.models,
        _: _ 
      };
      var compiledTemplate = _.template( RewardsTemplate,data);
      this.$el.html(compiledTemplate);
  
    }

  });

  return RewardsView;
  
});

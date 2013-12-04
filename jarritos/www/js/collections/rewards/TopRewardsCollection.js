define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'models/reward/TopRewardModel',
], function($, _, Backbone, Config, TopRewardModel){

  var TopRewardsCollection = Backbone.Collection.extend({
    
    attributes : {
	    
	    category : "top"
    },
    
    url : Config.services.base_url + Config.services.reward.getRewards,
    
    model: TopRewardModel,
    
    initialize: function(){

    }

  });
 
  return TopRewardsCollection;
});

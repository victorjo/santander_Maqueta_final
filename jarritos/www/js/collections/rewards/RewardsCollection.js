define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'models/reward/RewardModel',
], function($, _, Backbone, Config, RewardModel){

  var RewardsCollection = Backbone.Collection.extend({
    
    attributes : {
	    
	    category : ""
    },
    
    url : Config.services.base_url + Config.services.reward.getRewards,
    
    model: RewardModel,
    
    initialize: function(){

    }

  });
 
  return RewardsCollection;
});

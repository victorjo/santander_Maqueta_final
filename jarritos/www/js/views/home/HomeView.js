define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/home/HomeTemplate.html',
  'views/rewards/TopRewardsView',
  'views/rewards/MenuRewardsView'
], function($, _ , Backbone, Config , HomeTemplate, TopRewardsView , MenuRewardsView){

  var HomeView = Backbone.View.extend({
    
    el: $("#home_content"),

    initialize: function() {
    
	    this.render();
	    
    },
    
    render: function(){
          
      var HomeCompiledTemplate = _.template( HomeTemplate );
      this.$el.html(HomeCompiledTemplate);
     
      new TopRewardsView({el   : '#top_rewards_wrapper'}); /*Genera y renderea el módulo del top rewards del home*/
      
    }

  });

  return HomeView;
  
});

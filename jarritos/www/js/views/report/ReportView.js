define([
  'jquery',
  'underscore',
  'backbone',
  'form',
  'config',
  'text!templates/report/ReportTemplate.html',
  'models/report/ReportModel'
], function($, _, Backbone, Form, Config , ReportTemplate, ReportModel){

  var ReportView = Backbone.View.extend({
    
    el: $("#report_a_code_content"),

    initialize: function() {
    
	    this.render();
	    
    },
    
    events: {
		"change .select_brand" : function(obj){
			
			var id_brand = $(obj.target).val();
			var index_wrapper = $(obj.target).attr('index');
			
			if(id_brand!=0)
			{	
				var newSelect = this.render_new_select(id_brand , index_wrapper);
				$('.bottle_wrapper_'+index_wrapper).empty().html(newSelect);
				$('select').selectmenu();
			}
			else
			{
				$('.bottle_wrapper_'+index_wrapper).empty();
			}			
		},
		
		"submit #report_code_form" : function(e){
		
			e.preventDefault();
			e.stopPropagation();
			
			var data = $(e.target).formParams()
			
			var report = new ReportModel();
			report.set(data);
			report.save();
		}
	},
	
	render_new_select : function(id_brand , index_wrapper){

		var select = '<select name="bottle[]" class="select_bottle" >';
			     _.each(Config.bottles[id_brand], function(bottle){ 
				     select += '<option value="'+bottle.id+'">'+bottle.description+'</option>';
				 }); 
		select += '</select>';
		return select;
		
	},
    
    render: function(){
          
      var data = {
        items  : Config.report.items,
        brands : Config.brands,
        _: _ 
      };
      
      var compiledTemplate = _.template( ReportTemplate , data );
      this.$el.html(compiledTemplate);
    }

  });

  return ReportView;
  
});

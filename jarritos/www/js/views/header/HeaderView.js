define([
  'jquery',
  'underscore',
  'backbone',
  'form',
  'models/login/LoginModel',
  'text!templates/header/HeaderTemplate.html'
], function($, _, Backbone, Form, LoginModel, headerTemplate){

  var HeaderView = Backbone.View.extend({
    
    el: $(".header"),

    initialize: function() {
	    
	     var token = window.appStore.get('token');
	     this.render(token);

	    this.render();

    },
    
    events: {
		"click #logo" : function(){
		
			$.mobile.back();
			
		},
		
		"submit #login_form" : function (e){
			
			e.preventDefault();
			e.stopPropagation();
			
			console.log(e)
			var data  = $(e.target).formParams();
			
			if(data.mail != "" && data.password != "")
			{
				
				var filter = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
				
		        if(filter.test(data.mail))
		        {
			        var login = new LoginModel();
					device_id = "F45AA07F-44C8-4546-8E36-3149E3F0744E";
					/*Phonegap
					device_id = device.uuid;
					*/
					login.save({mail : data.mail , password : data.password , uuid : device_id},{ success : this.response });
		        }
		        else
		        {
			        /*Phonegap
					navigator.notification.alert(
					    'Check your email',  
					    true,
					    'Email error',
					    'Done'
					);
					*/
					
					alert('Check your email');
					$('#email').focus();
					$('#email').select();											
				}
			}
			else
			{
				/*Phonegap
				navigator.notification.alert(
				    'enter your email and password',  
				    true,
				    'Email error',
				    'Done'
				);
				*/
				
				alert('enter your email and password');
			}
		},
		
		'keypress #login_form':	function(e){
			
			if ( e.keyCode === 13 ) {
				$('#login_form').submit();
			}
		}
	},

	response : function(model){
		
		if(model.get('status') == 'success')
		{
			
		}
		else
		{
			/*Phonegap
			navigator.notification.alert(
			    model.get('msg'),  
			    true,
			    'Login error',
			    'Done'
			);
			*/
			alert(model.get('msg'));
		}
		
	},

    render: function(token){
          
      if(token)
      {
	      console.log('tiene sesión');
      }
      else
      {
	  	var compiledTemplate = _.template( headerTemplate );
	  	this.$el.html(compiledTemplate);    
      }
      
    }

  });

  return HeaderView;
  
});


(function(){
				construyeSwitch("switch_OC");
				var js = [{
			        text: "Elemento 0",
			        value: 1,
			        selected: false			    
			    }];

				$(".select_OC").ddslick({
			    data:js,
			    width:300,
			    imagePosition:"left",
			    onSelected: function(selectedData){
			       
			    }   
		    });
			})();
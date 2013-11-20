	$(function(){
			$("#navegador ul li").click(function(){
				$("#navegador").find(".active").attr("class"," ");
				$(this).addClass('active');
			})

			$(".wra_Select3 select").ddslick({
                    width:"500"
                });
                
            $(".wra_Select2 select").ddslick({
                    width:"200"
                });
                
			$(".wra_Select4 select").ddslick({
                    width:"250"
                    
                });
            $("#infobtn").click(function(){
            	$("#info").fadeOut("slow");
            	$("#info2").fadeOut("slow");
            	$("#info").fadeToggle("slow");
            	 });
            	 
            $("#infobtn2").click(function(){
            	$("#info").fadeOut("slow");
            	$("#info2").fadeOut("slow");
            	$("#info2").fadeToggle("slow");
            	 });

            	   

	})
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

                
               

	})
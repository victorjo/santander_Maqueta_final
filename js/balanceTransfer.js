	$(function(){
			$("#navegador ul li").click(function(){
				$("#navegador").find(".active").attr("class"," ");
				$(this).addClass('active');
			})

			$("select").ddslick({
                    width:"200"
                });

	})
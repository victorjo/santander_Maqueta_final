$(document).on("ready",function(){
						
			function openClose(objetoEvento,clasemenos,ocultaobjeto,slideup){
				$(objetoEvento).click(function(){ 
					if ($(this).hasClass(clasemenos)) {
						$(this).removeClass(clasemenos);
					}else{
						$(this).addClass(clasemenos);
					}
					$(ocultaobjeto).slideToggle("slow","easeOutBounce");
					$(slideup).slideUp("slow","easeOutBounce",function(){
						$(".btnactionx").removeClass("btnactionx");
						$(".btnactionx").addClass("btnaction2");
						
					});
				});

			}

			function openClose2(objetoEvento,clasemenos,ocultaobjeto,slideup){
				$(objetoEvento).click(function(){
					if ($(this).hasClass(clasemenos)) {
						$(this).removeClass(clasemenos);
					}else{
						$(this).addClass(clasemenos);
					}
					$(ocultaobjeto).slideToggle("slow","easeOutBounce");
					$(slideup).slideUp("slow","easeOutBounce",function(){
						$(".btnaction").addClass("btnaction2");
					});
				});

			}
			function recorrer(){
				var card1 = "<img src='widgets/max/w_16/imagenes/card1.png'>";
				var card2 = "<img src='widgets/max/w_16/imagenes/iconos/card2.png'>";
				var card3 = "<img src='widgets/max/w_16/imagenes/iconos/card3.png'>";
				var targets = new Array(card1, card2, card3);
				
				for(i=0;i<6;i++){
				$("#concardstc ul").append("<li></li>");
				}
				
				for(i=0;i<targets.length;i++){
					$(this).css(".cardstc:before");
						
						$("#concardstc ul" ).append("<li>"+targets[i]+"</li>");
						
					if (targets.length>3) {
						$("#concardstc").css("overflow","auto");
						$(".colcardstc").css("margin-left","20px");
					}
				
				}

			}
			function slidernext(evento,parametro1,parametro2){

				$(evento).click(function(){
					$(parametro1).appendTo(parametro2)
				});

			}
			function sliderbefore(evento,parametro1,parametro2){
				$(evento).click(function(){
					$(parametro1).prependTo(parametro2)
				});

			}

			slidernext("#nextarscts","#concardstarrec ul li:first","#concardstarrec ul:first");
			sliderbefore("#beftarscts","#concardstarrec ul li:last","#concardstarrec ul:first");
			slidernext("#cardsstc a","#slidestc li:first","#slidestc:first");
			sliderbefore("#befscts a","#slidestc li:last","#slidestc:first");
			openClose(".btnaction","btnaction2",".selcardstc",".selcardstc2");
			openClose2(".btnaction2","btnactionx",".selcardstc2",".selcardstc");
			
		
			$("#concardstc ul li").click(function(){
           
	          if ($(this).hasClass("ll")) {
	            $(this).removeClass("ll");
	          }else{
	          	$(this).addClass("ll");
	          	setTimeout(function(){
	          		$("#concardstc ul li").removeClass("ll");
	          	},10000);
				$(".frcts").slideUp();
	          	$("#cpcard").slideDown();
	            $(this).clone().appendTo("#cpcard ul");
				$("#cpcard ul li").css("cursor","pointer");
				$("#cpcard ul li").click(function(){
	            	$(this).fadeOut("fast	");
	            });
	          

	        }

       });
			
			
								
	});
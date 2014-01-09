
			function ocultaAsset(){
		    $("#WA_pasos>img").fadeOut(1);
			}

			function muestraAsset(){
			    $("#WA_pasos>img").fadeIn(1);
			}
			
			function openClose(objetoEvento,clasemenos,ocultaobjeto,slideup){
				$(objetoEvento).click(function(){ 
					if ($(this).hasClass(clasemenos)) {
						$(this).removeClass(clasemenos);
					}else{
						$(this).addClass(clasemenos);
					}
					$(ocultaobjeto).slideToggle("slow");
					$(slideup).slideUp("slow",function(){
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
					$(ocultaobjeto).slideToggle("slow");
					$(slideup).slideUp("slow",function(){
						$(".btnaction").addClass("btnaction2");
					});
				});

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

			slidernext(".nextarscts",".concardstarrec ul li:first",".concardstarrec ul:first");
			sliderbefore(".beftarscts",".concardstarrec ul li:last",".concardstarrec ul:first");
			slidernext("#cardsstc a","#slidestc li:first","#slidestc:first");
			sliderbefore("#befscts a","#slidestc li:last","#slidestc:first");

			openClose(".btnaction","btnaction2",".selcardstc,#submits",".selcardstc2");
			openClose2(".btnaction2","btnactionx",".selcardstc2",".selcardstc,#submits");

			slidernext("#next","#concardstarrec ul li:first","#concardstarrec ul:first");
			sliderbefore("#bef","#concardstarrec ul li:last","#concardstarrec ul:first");

			slidernext("#nexttwo","#concardstarrectwo ul li:first","#concardstarrectwo ul:first");
			sliderbefore("#beftwo","#concardstarrectwo ul li:last","#concardstarrectwo ul:first");
			
		
			$("#concardstc ul li").click(function(){
				           
				console.log($("#cpcard ul li ").length);
	          if ($(this).hasClass("ll")) {
	            $(this).removeClass("ll");
	          }else{
	          	$(this).addClass("ll");
	          	setTimeout(function(){
	          		$("#concardstc ul li").removeClass("ll");
	          	},10000);
				$(".frcts").slideUp();
	          	$("#cpcard").slideDown();
	          	var objectF = $(this).clone();
	          	var delButton = "<div class='delete'><img style='width:100% !important;height:100% !important' src='widgets/max/w_17/imagenes/close.png'></div>";
	          	$(delButton).appendTo(objectF);
	            objectF.appendTo("#cpcard ul");
	           // $("#cpcard ul li").addClass("opacity");

				$("#cpcard ul li").css("cursor","pointer");
				//$("#cpcard ul li:first").css("width","130px");
				$("#cpcard ul li:first").css("margin-bottom","300px;");
				$("#cpcard ul li:first").removeClass("ll")
				$("#cpcard ul li:first img").css("width","130px");
				$("#cpcard ul li:first img").css("height","70px");
				if($("#cpcard ul li ").length == 1) $("#cpcard ul li:first .delete").fadeOut("fast");
				else if($("#cpcard ul li ").length > 1) $("#cpcard ul li:first .delete").fadeIn("fast");
				$("#cpcard ul li:first .delete").css("height","15px");
				$("#cpcard ul li:first .delete").css("height","14px");
				$("#cpcard ul li:first img").css("margin-left","20px");
				$("#cpcard ul li:first .sometextcardstc").css("margin-top","11px");
				$("#cpcard ul li:first .sometextcardstc").css("width","170px");
				
				if ($("#cpcard ul li").length>1) {
					$("#cpcard ul li:first img").css("margin-left","2px");
					$("#cpcard ul li:first .sometextcardstc").css("margin-top","-15px");
					$("#cpcard ul li:first img").css("width","53px");
					$("#cpcard ul li:first img").css("height","30px");
					$("#cpcard ul li:first").addClass("ll")
					$("#cpcard ul li:first .sometextcardstc").css("margin-top","-34px");
					$("#cpcard ul li:first .sometextcardstc").css("width","144px");
				}
				/*if ($("#cpcard ul li ").length == 0) {

					alert("Hola");
					//$(".frcts").slideUp();

				}*/
				


				$("#cpcard ul li").click(function(){
					/*if ($(this).hasClass("opacity")) {
		            $(this).removeClass("opacity");
		          	}else{*/
		          	//$(this).addClass("opacity");
		          	$(this).css("opacity","0.6");
		          //}
					
				});

				$("#cpcard ul li > .delete").click(function(){
					$(this).parent().remove();
	            	if ($("#cpcard ul li").length) {
	            		
	            	}else{
	            		$("#cpcard").slideUp();
	            		$(".frcts").slideDown();
	            	}
	            });
	          

	        }

       });

			$("#stcr1").click(function(){
				$("#stcr2").css("background","red");
			});
			
			$(".infopermod").click(function(){
				alert("Hola");
				$(".msgper").css("display","none");
			});

			$("#tdcad1").click(function(){
				$("#tdf1").attr("placeholder","Antonio Cruz Martinez");
				$("#tdf2").attr("placeholder","RORR890319HSCKB");
				$("#tdf3").attr("placeholder","juanp@webmail.com");
				$("#tdf4").attr("placeholder","Hermano");
				$("#tdf5").attr("placeholder","55-30764419");
			});
			/*$("#tdcad2").click(function(){
				$("#tdf1").attr("placeholder","Ana Cruz Peña");
				$("#tdf2").attr("placeholder","AOCR890319HSCKB");
				$("#tdf3").attr("placeholder","Anap@webmail.com");
				$("#tdf4").attr("placeholder","Hermana");
				$("#tdf5").attr("placeholder","55-10734419");
			});
			$("#tdcad3").click(function(){
				$("#tdf1").attr("placeholder","Eduardo Margarito Aguilar");
				$("#tdf2").attr("placeholder","EOMR790314TGCKB");
				$("#tdf3").attr("placeholder","Margarito@webmail.com");
				$("#tdf4").attr("placeholder","Cuñado");
				$("#tdf5").attr("placeholder","55-30546719");
			});
			$("#tdcad4").click(function(){
				$("#tdf1").attr("placeholder","Pamela Agulara Solis");
				$("#tdf2").attr("placeholder","POAS890319HSCKB");
				$("#tdf3").attr("placeholder","paguilar@webmail.com");
				$("#tdf4").attr("placeholder","Esposa");
				$("#tdf5").attr("placeholder","55-13363719");
			});*/
			//$("button").click(function(){


				//alert($("#cpcard ul li").length);
				
			//});
				$("#rx1").click(function(){
					$("#rx1").css("background","#000");
					$("#rx2").css("background","transparent");
				});
				$("#rx2").click(function(){
					$("#rx2").css("background","#000");
					$("#rx1").css("background","transparent");
				});

				$(function() {
				    $( "#ransstc" ).slider({
				    	range:"min",
				    	value:65,
				    	miun:0,	
				    	max:100,
				    	slide: function(event,ui){
				    		 $("#valuestc").html(ui.value);
				    	}
				    });
				    var value = $("#ransstc").slider("value");
				    $("#valuestc").html(value);
				});
				$("#m1").click(function(){
					//$("#headerStc").css("display","none");
					//$("#headerStc2").css("display","none");
					//$("#headerStc3").css("display","none");
					$("#headerStc").css("display","inline");
				})
				$("#m2").click(function(){
					$("#headerStc").css("display","none");
					$("#headerStc2").css("display","inline");
				})
				$("#m3").click(function(){
					//$("#headerStc").css("display","none");
					$("#headerStc2").css("display","none");
					$("#headerStc3").css("display","inline");
				})
				$("#m4").click(function(){
					//$("#headerStc").css("display","none");
					//$("#headerStc2").css("display","none");
					$("#headerStc3").css("display","none");
					$("#headerStc4").css("display","inline");
				})
					
								
	
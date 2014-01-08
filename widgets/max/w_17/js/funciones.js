
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
				//$("#cpcard ul li:first").css("width","130px");
				$("#cpcard ul li:first").css("margin-bottom","300px;");
				$("#cpcard ul li:first").removeClass("ll")
				$("#cpcard ul li:first img").css("width","130px");
				$("#cpcard ul li:first img").css("height","70px");
				$("#cpcard ul li:first img").css("margin-left","20px");
				$("#cpcard ul li:first .sometextcardstc").css("margin-top","11px");
				$("#cpcard ul li:first .sometextcardstc").css("width","170px");
				if ($("#cpcard ul li").length>1) {
					
					$("#cpcard ul li:first").fadeOut();
				}
				if ($("#cpcard ul li").length == null) {

					alert("Hola");
					//$(".frcts").slideUp();

				}
				$("#cpcard ul li").click(function(){
	            	$(this).remove();
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
				$("#tdf1").attr("placeholder","Juan Perez Jolote");
				$("#tdf2").attr("placeholder","RORR890319HSCKB");
				$("#tdf3").attr("placeholder","juanp@webmail.com");
				$("#tdf4").attr("placeholder","Hermano");
				$("#tdf5").attr("placeholder","55-30764419");
			});
			$("#tdcad2").click(function(){
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
			});
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
				    $( "#ransstc" ).slider();
				});
								
	
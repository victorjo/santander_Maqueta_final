
var globalVarOfVal = 0;
var globalFlah = 0;
var normal = 1610;
var altoVentana = $(window).height();
var responsiveFlag = 0;
var tamanoWidget = 587;


$(document).ready(function(){
	$("body").append("<div style='position:fixed;left:50%;top:50%;z-index:800;display:none' class='loader'><img style='position:relative;left:-110px' src='img/loader.gif'></div>");
	//if(typeof window.chrome =="undefined") reject();
	posWidgets(0);
	$(".widget-min").click(function(){
		getInstance(this);
	});
	$(".btnHeader").click(function(){
		globalFlah++;
		console.log(globalFlah);
	});

		genFooterHeight();
		ajustaBannerHeight();


		setInterval(function(){ motorSuperbanner(); },15000);
		
});



//para commit
window.onresize = function(){
	posWidgets(1);
}

function reject(){
	alert("Para visualizar este sitio debe usar chrome");
	window.location.href = "https://www.google.com/intl/es-419/chrome/browser/"
}

// GENERADOR DE LA BOTONERA
function obtieneAltoTotal(){
	var altoContenedor = $("#wrappWidgets")[0].scrollHeight;
	var numeroDeBtns = Math.floor(altoContenedor / tamanoWidget);
	$("#navContent").html("");
	for(var i=0;i < numeroDeBtns;i++){
		btnDiv = creaBtn();
		$("#navContent").append(btnDiv);
	}

	$("#navContent .btnNavWidget:first-child").removeClass("noActiveNav").addClass("ActiveNav");
	$("#navContent").css({"left":20+$("#wrappWidgets").width()+$("#wrappWidgets").offset().left+"px","top":"200px"});
}

function creaBtn(){
		var btnDiv = $("<div>");
		btnDiv.attr("class","Fright noActiveNav btnNavWidget");
			return btnDiv;
}



function genFooterHeight(){
		if(altoVentana > tamanoWidget){
			var restaElementos = $("#avatarNavPrin").height();
			restaElementos += $("#wr_btnNav").height();
			restaElementos += $("#tipoServ").height();
			restaElementos +=60;
			restaElementos = altoVentana - restaElementos;
			$("#footer").height(restaElementos);
		}
}


function ajustaBannerHeight(){
		if(altoVentana > tamanoWidget){
			var restaElementos = $("#wr_SuperBanner").height();
			restaElementos += $("#tipoServ").height();
			restaElementos += 10;
			restaElementos = altoVentana - restaElementos;
			//$("#wr_SuperBanner").height($("#wr_SuperBanner").height() + restaElementos);
			$("#wr_SuperBanner").height(600);
			

		}


}


var widgets = [
				{
					id:1,
					type:2,
					order:1,
					contentMin:'',
					contentMax:''
				},
				{
					id:5,
					type:2,
					order:2,
					contentMin:'',
					contentMax:''
				},{
					id:8,
					type:2,
					order:3,
					contentMin:'',
					contentMax:''
				},
				{
					id:6,
					type:3,
					order:5,
					contentMin:'',
					contentMax:''
				},
				{
					id:2,
					type:2,
					order:4,
					contentMin:'',
					contentMax:''
				},
				{
					id:7,
					type:2,
					order:6,
					contentMin:'',
					contentMax:''
				},
				{
					id:4,
					type:1,
					order:8,
					contentMin:'',
					contentMax:''
				},
				{
					id:9,
					type:3,
					order:7,
					contentMin:'',
					contentMax:''
				},

				{
					id:10,
					type:1,
					order:0,
					contentMin:'',
					contentMax:''
				},

				{
					id:11,
					type:2,
					order:1000,
					contentMin:'asdasdasdasd',
					contentMax:''
				}


			];




function posWidgets(qwerty){
	console.log("entro y calculo");
	var absoluteW = $("#absoluteWrapper");
	if(qwerty==1) $("#loginWrapper").hide();
	if(qwerty==0) absoluteW.css({'position':'absolute','left':$(window).width(),'display':'none'});
	var wrapper = $("#wrappWidgets");
	if(qwerty==0) wrapper.children(".widget-min").remove();
	else if(qwerty==1) $("[data-pos='codom']").remove();
	wrapper.css('height',altoVentana-50);
	$("#dataClient").css("width", $(window).width()-830);
	var widgetTypes = {
					1:{
						styles: ['widget-min','col1','altoTotal']
					},
					2:{
						styles: ['widget-min','col1','alto2']
					},
					3:{
						styles:['widget-min','col2','alto2']
					}
				};

	var parser = 0;
	//fatal hardcode
    //end of fatal hardcode
    if(qwerty==0){
    wids = sortByKey(widgets, 'order');
	$.each(wids,function(i,v){
		var newWidget = $('<div>');
		var c = fillStyles(v.type);
		newWidget.attr("class",c);
		if(v.id==null) newWidget.html(v.contentMin);
		else{
			$.ajax({
				url:'widgets/min/w_'+v.id+'/index.html',
		        type:'GET',
		        dataType:'html',
		        success: function(res){
		        	newWidget.html(res);
		        }
		    });
			$.ajax({
				url:'widgets/max/w_'+v.id+'/index.html',
				type:'GET',
				dataType:'html',
				success: function(res){
					newWidget.attr("data-max","true");
				},
				error: function(){
					newWidget.attr("data-max","false");
				}
			}); 
		}
		wrapper.append(newWidget);
		newWidget.attr({"data-pos":parser+1,"data-id":v.id});
		//if((parser%3)==0 && parser!=0) newWidget.css('float','right');
		var posWid = newWidget.offset();
		var posWra = wrapper.offset()
		var a = posWid.top-posWra.top; 
		var b = posWid.left-posWra.left;
		newWidget.css({'top': a+"px",'left':b+"px"});
		parser++;
	});
	}//end of validate of resize param
	function sortByKey(array, key) {
	    return array.sort(function(a, b) {
	        var x = a[key]; var y = b[key];
	        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	    });
	}

	function fillStyles(type){
		var attrClass = "";
		$.each(widgetTypes[type].styles,function(i,v){
			attrClass += v+" ";	
		});
		return attrClass;
	}

	(function (wrapper){

		if($(window).width()>1490 || !spDisplay ) 
		{
			$("#wrappWidgets").css("width","1022px");

			//$("[data-pos='3']").after('<div class="widget-min col1 alto2"  data-max="false" data-pos="codom"><img src="img/fake/carrito.jpg" height="275"/></div>');
			
			$("[data-pos='7']").css('float','left');
			var alen = 1030;
		/*}else if($(window).width()<=768){ ****CHANGE FOR TOUCH EVENT***
			$("body").mousemove(function(e){
				if(e.pageX<=0){
					moveResObs();
				}else if( $(".wr_NavPrin").offset().left==900 ) $(".wr_NavPrin").animate({'left':'-190px'});
			});
		}*/}
			else{
			$("#wrappWidgets").css("width","771px");

		}

		
		var obj = $("#navContent");
		var posLeft = wrapper.offset().left;
		posLeft += alen || 790;
		var posTop =  wrapper.height()/2;
		obj.css({'left':posLeft,'top':(posTop-obj.height())});
		var c;
		var altoScrolling = $("#wrappWidgets")[0].scrollHeight;
		var altosScroll = [];

		obtieneAltoTotal();

		c = $('.btnNavWidget').size();
		punteroC = c;
		
		altoScrolling = altoScrolling/(c);
		for (c;c>=0;c--){altosScroll.push(Math.round(altoScrolling*c));}
		altosScroll.reverse();
		$('.btnNavWidget').each(function(i,v){
			$(this).attr('onclick','moveScroll(this,'+altosScroll[i]+')');
		});

		banPosSelect = 1;
		posScroll = 0;
		dirScroll=false;


		/*function disableWhell(e){
    		e.preventDefault();
    	}
 
	var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" 
 
		if (document.attachEvent) 
    document.attachEvent("on"+mousewheelevt, disableWhell)
	else if (document.addEventListener) 
    document.addEventListener(mousewheelevt, disableWhell, false)
 */
		
		wrapper.scroll(function(e){
			//preventDefault(e);

			if(globalVarOfVal>0) return false;
			var thisS = $(this);
			altoScrollTop = $("#wrappWidgets").height()+ thisS.scrollTop();
			if(posScroll > thisS.scrollTop()){
					dirScroll =false;
			}else if(posScroll < thisS.scrollTop()){
					dirScroll = true;
			}
			posScroll = thisS.scrollTop();


			if(altoScrollTop >= altosScroll[(banPosSelect+1)] && dirScroll){
				if(banPosSelect>3){
					banPosSelect=2;
					
				}else{
					banPosSelect++;
				}

			}else if((altoScrollTop-($("#wrappWidgets").height()/2))  <= altosScroll[(banPosSelect-1)] && !dirScroll)
			{

				if(banPosSelect<=1){
					banPosSelect = 1 ;
				}else{
					banPosSelect--;
				}
			}

				if(banPosSelect==0){
					banPosSelect=1;
				}

				activaBtn($('#navContent > div:nth-child('+banPosSelect+')'));

		});
		wrapper.animate({'opacity':'1'});
	})(wrapper);
}

function moveResObs(){
	if(responsiveFlag!=0) return returnMenu();
	$(".wr_NavPrin,#dataClient,#wrappWidgets,.butter").animate({'left':'+=190px'},'slow');
	$("#logo").animate({'left':'224px'},'slow');
	$("#tipoServ").animate({'left':'199px'},'slow');
	responsiveFlag++;
}
function returnMenu(){
	$(".wr_NavPrin,#dataClient,#wrappWidgets,.butter").animate({'left':'-=190px'},'slow');
	$("#logo").animate({'left':'33px'},'slow');
	$("#tipoServ").animate({'left':'17px'},'slow');
	responsiveFlag=0;
	return false;
}

function moveScroll(obj,math){

	if($(obj).hasClass('ActiveNav')) return false;
	globalVarOfVal++;
	if($(obj).next().hasClass('ActiveNav')) ope = '-';
	else ope = '+';
	$("#wrappWidgets").animate({'scrollTop': math+'px'},'slow',function(){ globalVarOfVal=0; });
	activaBtn(obj);
}

function getInstance(obj){
	var thisW = $(obj);
	if(typeof thisW.data("instanced") == 'undefined' || thisW.data("instanced") == 'undefined') thisW.data("instanced",new newWidgetInstance(thisW));
	else thisW.find(".btnHeader").click(function(){thisW.data('instanced').routerAction()});
}

function newWidgetInstance(obj)
{
	this.obj = obj;
	this.topPos = this.obj.offset().top;
	this.leftPos = this.obj.offset().left;
	this.topPosIn = this.obj.css('top');
	this.leftPosIn = this.obj.css('left');
	this.width = this.obj.width();
	this.height = this.obj.height();
	this.chPost = function () {
			if(this.obj.attr("data-max")=="false") return false;
			this.obj.attr({"instanced":"true"});
			this.obj.css({'position':'fixed','top':this.topPos,'left':this.leftPos,'z-index':50});
			var forA = this.obj;
			forA.children().fadeOut(600);
			this.obj.animate({width:'935px',height:'541px',left: ($(window).width()/2)-467+'px',top:'10%'},600,function(){creaOverlay('#000',document.body,0); forA.children().fadeOut('fast'); var scope = $(this);  /*}).animate({width:'935px',height:'541px'},800,function(){*/
				$.ajax({
					url:'widgets/max/w_'+forA.attr("data-id")+'/index.html',
			        type:'GET',
			        dataType:'html',
			        success: function(res){
			        	forA.html(res);
			        	forA.children().fadeIn('slow');
			        }
		    	}); 
			});
			};
	this.routerAction = function(positionMax){
						if(globalFlah>0) return false;
						destruyeOverlay();
						var forA = this.obj;
						forA.children().hide(300);
						this.obj.animate({'top':(this.topPos)-10,'left':(this.leftPos),'width':this.width+'px','height':this.height+'px',},800,function(){ /*$("#wrappWidgets").animate({scrollTop:'0px'}); }).animate({'top':'+='+$("#wrappWidgets").offset().top,'left':'+='+$("#wrappWidgets").offset().left},300,function(){*/
							var io = $(this);
							$.ajax({
								url:'widgets/min/w_'+io.attr("data-id")+'/index.html',
								type:'GET',
								dataType:'html',
								success: function(res){
									io.html(res);
									forA.children().fadeIn('slow');
								}
							});
							io.css({'top':'-='+$("#wrappWidgets").offset().top,'left':'-='+$("#wrappWidgets").offset().left,'position':'static','z-index':0});
							io.attr({"instanced":"false"});
							io.data('instanced','undefined')
						});
						globalFlah = 0;
					};
	this.chPost();

}




function valToForm(){
	var absoluteW = $("#absoluteWrapper");
	absoluteW.show();
	$("#loginWrapper").animate({"background-position":"+=50px"},"slow");
	$("#wr_SuperBanner").css({"position":"relative",'background-image':'url(img/superbanner/1.png)'}).animate({'left':'-255px'},800,function(){ $("#titleLogin").next().html('<h4>EN SANTANDER LE DAMOS VIDA A TUS IDEAS</h4><h1 class="tituloBold">Bienvenido a SUPERNET <br> la banca mas personal que nunca.</h1><div class="btnaceptar" style="width:180px;margin-left:0px;margin-right:15px" onclick="outaLogin()">Saltar Intro</div><p style="font-weight:bold;font-size:11px;margin-top: 18px;">Omitir en: <span class="seger" style="">04</span></p>');$("#titleLogin").next().fadeIn(); });
	$("#titleLogin").next().fadeOut('fast');
	setTimeout(function(){ $(".seger").text("03"); },1000);
	setTimeout(function(){ $(".seger").text("02"); },2000);
	setTimeout(function(){ $(".seger").text("01"); },3000);
	setTimeout(function(){ $(".seger").text("00"); $(".seger").parent().remove();},4000);
	setTimeout(function(){ outaLogin() },4500);

}


function outaLogin(){
	var absoluteW = $("#absoluteWrapper");
	$("#loginWrapper").animate({"left":"-="+$(this).width()},1500,function(){$(this).hide();});
	absoluteW.animate({"left":"0px"},1500,function(){obtieneAltoTotal();});
	setTimeout(function(){$("#wr_SuperBanner").animate({"left":"0px"},0);},0);
	var outLoginBan = false;
	
}
var i=1;
function motorSuperbanner(){
/*
		i++;
		if( i>4){
		i=1  
		}

		$("#wr_SuperBanner").fadeOut("slow",function(){
				$("#wr_SuperBanner").css({
				  "background":"no-repeat",
			  		"background-image":"url(img/superbanner/"+i+".png)"		
				  		}).fadeIn("slow");

		})

		*/
}
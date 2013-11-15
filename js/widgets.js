
$(document).ready(function(){
	posWidgets();
	$(".widget-min").click(function(){
		getInstance(this);
	});
});
var globalVarOfVal = 0;
var widgets = [
				{
					type:1,
					contentMin:'<h3>Content Minified 1</h3>',
					contentMax:'<h2>Content Maxified 1</h2>'
				},
				{
					type:2,
					contentMin:'<h3>Content Minified 2</h3>',
					contentMax:'<h2>Content Maxified 2</h2>'
				},
				{
					type:2,
					contentMin:'<h3>Content Minified 3</h3>',
					contentMax:'<h2>Content Maxified 3</h2>'
				},
				{
					type:3,
					contentMin:'<h3>Content Minified 3</h3>',
					contentMax:'<h2>Content Maxified 3</h2>'
				},
				{
					type:1,
					contentMin:'<h3>Content Minified 3</h3>',
					contentMax:'<h2>Content Maxified 3</h2>'
				},
				{
					type:2,
					contentMin:'<h3>Content Minified 3</h3>',
					contentMax:'<h2>Content Maxified 3</h2>'
				},
				{
					type:2,
					contentMin:'<h3>Content Minified 3</h3>',
					contentMax:'<h2>Content Maxified 3</h2>'
				},
				{
					type:3,
					contentMin:'<h3>Content Minified 4</h3>',
					contentMax:'<h2>Content Maxified 4</h2>'
				}
			];

function posWidgets(){
	var wrapper = $("#wrappWidgets");
	wrapper.css('height',$(window).height()-wrapper.offset().top);
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
	$.each(widgets,function(i,v){
		var newWidget = $('<div>');
		var c = fillStyles(v.type);
		newWidget.attr("class",c);
		newWidget.html(v.contentMin);
		wrapper.append(newWidget);
		if((parser%3)==0) newWidget.css('float','right');
		var posWid = newWidget.offset();
		var posWra = wrapper.offset()
		var a = posWid.top-posWra.top;
		var b = posWid.left-posWra.left;
		newWidget.css({'top': a+"px",'left':b+"px"});
		parser++;
	});

	function fillStyles(type){
		var attrClass = "";
		$.each(widgetTypes[type].styles,function(i,v){
			attrClass += v+" ";	
		});
		return attrClass;
	}

	(function (wrapper){
		var obj = $("#navContent");
		var posLeft = wrapper.offset().left + 790;
		var posTop =  wrapper.height()/2;
		obj.css({'left':posLeft,'top':(posTop-obj.height())});
		var c = 1;
		$('.btnNavWidget').each(function(i,v){
			$(v).attr('onclick','moveScroll(this,'+Math.round(((wrapper[0].scrollHeight/3) ))*c+')');
			c++;
		});
		wrapper.scroll(function(){
			if(globalVarOfVal>0) return false;
			var thisS = $(this);
			var separator = Math.round(thisS.height());
			//Le falta dinamismo a esta parte pero despues se lo agrego AI
			if(thisS.scrollTop()>=((separator/4)+180)) activaBtn($('#navContent > div:nth-child(3)'));
			else if(thisS.scrollTop()>=(separator/4) && thisS.scrollTop() < ((separator/4)+90)) activaBtn($('#navContent > div:nth-child(2)'));
			else if(thisS.scrollTop()<20) activaBtn($('#navContent > div:nth-child(1)'));
		});
	})(wrapper);
}

function moveScroll(obj,math){
	globalVarOfVal++;
	if($(obj).next().hasClass('ActiveNav')) ope = '-';
	else ope = '+';
	$("#wrappWidgets").animate({'scrollTop': ope+'='+math+'px'},'slow',function(){ globalVarOfVal=0; });
	activaBtn(obj);
}

function getInstance(obj){
	var thisW = $(obj);
	if(typeof thisW.data("instanced") == 'undefined' || thisW.data("instanced") == 'undefined') thisW.data("instanced",new newWidgetInstance(thisW));
	else thisW.data('instanced').routerAction();
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
						this.obj.attr({"instanced":"true"});
						this.obj.css({'position':'fixed','top':this.topPos,'left':this.leftPos,'z-index':50});
						this.obj.animate({left:'10%',top:'10%'},300,function(){ creaOverlay('#000'); }).animate({width:'935px',height:'541px'},800);
					};
	this.routerAction = function(positionMax){
						destruyeOverlay();
						this.obj.animate({'top':this.topPosIn,'left':this.leftPosIn,'width':this.width+'px','height':this.height+'px'},800,function(){ $("#wrappWidgets").animate({scrollTop:'0px'}); }).animate({'top':'+='+$("#wrappWidgets").offset().top,'left':'+='+$("#wrappWidgets").offset().left},300,function(){
							var io = $(this);
							io.css({'top':'-='+$("#wrappWidgets").offset().top,'left':'-='+$("#wrappWidgets").offset().left,'position':'static','z-index':0});
							io.attr({"instanced":"false"});
							io.data('instanced','undefined')
						});
					};
	this.chPost();
}
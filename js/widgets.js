
$(document).ready(function(){
	posWidgets();
	$(".widget-min").click(function(){
		getInstance(this);
	});
});


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

	function fillStyles(type){
		var attrClass = "";
		$.each(widgetTypes[type].styles,function(i,v){
			attrClass += v+" ";	
		});
		return attrClass;
	}
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
		console.log(posWid);
		console.log(posWra);
		var a = posWid.top-posWra.top;
		var b = posWid.left-posWra.left;
		newWidget.css({'top': a+"px",'left':b+"px"});
		parser++;
	});
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
						this.obj.animate({left:'10%',top:'10%'},300,function(){ creaOverlay('#000'); }).animate({width:'80%',height:'80%'},800);
					};
	this.routerAction = function(positionMax){
						destruyeOverlay();
						this.obj.animate({'top':this.topPosIn,'left':this.leftPosIn,'width':this.width+'px','height':this.height+'px'},800,function(){ $("#wrappWidgets").animate({scrollTop:'0px'}); }).animate({'top':'+='+$("#wrappWidgets").offset().top,'left':'+='+$("#wrappWidgets").offset().left},300,function(){
							var io = $(this);
							io.css({'top':'-='+$("#wrappWidgets").offset().top,'left':'-='+$("#wrappWidgets").offset().left,'position':'static','z-index':0});
							//io.css({'top':'auto','left':'auto','position':'relative','z-index':0});
							io.attr({"instanced":"false"});
							io.data('instanced','undefined')
						});
					};
	this.chPost();
}
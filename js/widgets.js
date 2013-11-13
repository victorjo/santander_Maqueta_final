
$(document).ready(function(){
	$(".widget-min").click(function(){
		getInstance(this);
	});
});

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
						this.obj.animate({left:'10%',top:'10%'},300).animate({width:'80%',height:'80%'},800);
					};
	this.routerAction = function(positionMax){
						this.obj.animate({'top':this.topPosIn,'left':this.leftPosIn,'width':this.width+'px','height':this.height+'px'},800).animate({'top':'+='+$("#wrappWidgets").offset().top,'left':'+='+$("#wrappWidgets").offset().left},300,function(){
							var io = $(this);
							io.css({'top':'-='+$("#wrappWidgets").offset().top,'left':'-='+$("#wrappWidgets").offset().left,'position':'absolute','z-index':1});
							io.attr({"instanced":"false"});
							io.data('instanced','undefined')
						});
					};
	this.chPost();
}
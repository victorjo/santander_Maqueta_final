var spDisplay = true;
function shortcuts(){
	$('body').keypress(function(e){
    switch(e.which){
   			case 0:
   				destruyeOverlay();
   			break;

   			default:
   			break;
   		}
	});
}

function cierraWidget(){
    $(".widget-min").find(".btnHeader:last").click();
		return false;
	}

    function cierraSB(){
        $("#wr_SuperBanner").animate({"width":"hide"},1200,function(){
            $("#wrappSB").css("display","none");
            spDisplay = false;
            posWidgets(1);
           // muestraSb2();
           //posWidgets(1);

        });
    }

    function muestraSb2(){

        $("#wr_SuperBanner2").animate({"bottom":"30px"},1500);

    }

    /*function cierraSB2(){

        $("#wr_SuperBanner2").animate({"bottom":"-615px"},1500,function(){
            $("#wrappSB").css("display","block");
            $("#wr_SuperBanner").animate({"width":"show"},1200);
        });


    }*/

    /*
    $(function(){
    $.ajax({
    url:'balance_maquetas/informativo.html',
    type:'GET',
    dataType:'html',
    success: function(res){
    $('.off').html(res);
    }
    })
    $("select").ddslick({
    width:"200"
    });
    

    //$("#wrappWidgets").mCustomScrollbar();


    });*/
    function activaBtn(obj){
    $(".ActiveNav").each(function(){
    $(this).removeClass('ActiveNav').addClass('noActiveNav');
    });
    $(obj).addClass('ActiveNav').removeClass('noActiveNav');
    }

    

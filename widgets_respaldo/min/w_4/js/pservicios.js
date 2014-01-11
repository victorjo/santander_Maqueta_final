$(document).ready(function(){
	$(".selector").click(function(){
		$(".selector").removeClass("carselect");
		$(this).addClass("carselect");
		$(".imgservicio").fadeOut("slow",function(){
			$(".imgservicio").fadeIn("slow");
			});
		
	});
	
});

//Dropdown plugin data
var ddData = [
    {
        text: "Seleccionar",
        value: 1,
        selected: false,
    },
    {
        text: "Seleccionar",
        value: 2,
        selected: false,
        
    },
    {
        text: "Seleccionar",
        value: 3,
        selected: true,
    },
    {
        text: "Seleccionar",
        value: 4,
        selected: false,
    }
];

$(function(){		
        $(".wra_Select select").ddslick({
   		 data: ddData,
   		 width: 223,
   		 background: "#f7f7f7",
    	imagePosition: "left",
    	selectText: "Seleccionar",
   		 onSelected: function (data) {
        console.log(data);
    }
});

});

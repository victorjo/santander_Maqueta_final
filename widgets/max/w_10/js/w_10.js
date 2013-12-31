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
        selected: false,
    },
    {
        text: "Seleccionar",
        value: 4,
        selected: false,
    }
];

$(function(){		
        $(".w10_HPG_wra_Select select").ddslick({
   		 data: ddData,
   		 width: 140,
   		 background: "#f7f7f7",
    	imagePosition: "left",
    	selectText: "Seleccionar",
   		 onSelected: function (data) {
        console.log(data);
    	}
		});
});










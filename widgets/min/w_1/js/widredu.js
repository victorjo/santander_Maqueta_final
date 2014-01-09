//Dropdown plugin data
var ddData = [
    {
        text: "N° de Contrato:        1234567890",
        value: 1,
        selected: false,
    },
    {
        text: "N° de Contrato:        1234567890",
        value: 2,
        selected: false,
        
    },
    {
        text: "N° de Contrato:        1234567890",
        value: 3,
        selected: true,
    },
    {
        text: "N° de Contrato:        1234567890",
        value: 4,
        selected: false,
    }
];

$(function(){		
        $(".wra_Select_wr select").ddslick({
   		 data: ddData,
   		 width: 225,
   		 background: "#f7f7f7",
    	imagePosition: "left",
    	selectText: "N° de Contrato:        1234567890",
   		 onSelected: function (data) {
        console.log(data);
    }
});

});

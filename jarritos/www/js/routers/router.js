define([ 
	"jquery",
	"backbone", 
	"views/footer/FooterView",
	"views/header/HeaderView",
	"views/home/HomeView",
	"views/faq/FaqView",
	"views/legal/LegalView",
	"views/report/ReportView",
	"views/rewards/RewardsView",
], function( $, Backbone , FooterView, HeaderView, HomeView,  FaqView, LegalView, ReportView, RewardsView ) {

    var appRouter = Backbone.Router.extend( {

        initialize: function() {
	        
	        new HeaderView();
	        new FooterView();
	        new HomeView();
	        Backbone.history.start();

        },

        routes: {

            ""				        : "home",
            "faq"  					: "faq",
            "report_a_code" 		: "report",
            "legal_stuff"   		: "legal",
            "rewards?:category_id"  : "rewards",
            "reward?:product_id"    : "reward"
            
        },

        home: function() {
	        
        },
        
        faq: function() {
        
	        if(!$('#faq_content').hasClass('loaded'))
	        {
		        $('#faq_content').addClass('loaded');
		        new FaqView();
		        
	        }
            $.mobile.changePage( "#faq_page" , { reverse: false, changeHash: false} );
            
        },
        
        report: function() {
        
	        if(!$('#report_a_code_content').hasClass('loaded'))
	        {
		        $('#report_a_code_content').addClass('loaded');
		        new ReportView();
		        
	        }
            $.mobile.changePage( "#report_a_code_page" , { reverse: false, changeHash: false} );
            
        },
        
        legal: function() {
        	
        	if(!$('#legal_stuff_page').hasClass('loaded'))
	        {
		        $('#legal_stuff_page').addClass('loaded');
		        new LegalView();
		        
	        }
            $.mobile.changePage( "#legal_stuff_page" , { reverse: false, changeHash: false} );
            
        },
        
        rewards: function(category_id) {
        	//console.log(category_id);
            $.mobile.changePage( "#rewards_page" , { reverse: false, changeHash: false} );
            new RewardsView(category_id);
        },
        
        reward: function(product_id) {
        
            $.mobile.changePage( "#reward_page" , { reverse: false, changeHash: false} );
            
        }


    } );


    return appRouter;

} );
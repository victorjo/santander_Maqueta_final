/*Referencia completa de servicios en https://bitbucket.org/hyunkeln/club-jarritos/wiki/Home */

define({

    language :{
	    "default" : "ES"
    },
    
    services :{
	    "base_url" : "http://dev.clubjarritas.com/api/",
	    
	    "reward"   : {
		    "getCategories" : "reward/getCategories", 
		    "getRewards"    : "reward/getRewards",    /*vars opcionales = category points*/
		    "getReward"     : "reward/getReward"      /*var = idItem */
	    },
	    
	    "register" : {
		    "user"         : "register/user", /* vars = u_name u_lname u_address u_state u_city u_zipcode u_celular u_phone u_mail u_pass u_sex[0 o 1] idiom[0 o 1] */
		    "device"       : "register/device" /* vars =  user uuid token  */
		    
	    },
	    
	    "auth"    : {
		    "setCredentials" : "auth/setCredentials",  /* vars = uuid  token */
		    "login"          : "auth/login"  /*password  mail  uuid*/
	    },
	    
	    "code"  :{
		 	"register"       : "code/register" /*registra nueva solicitud de reporte de códigos inválidos*/  
	    }
	    
    },
    
    brands : [
    	{
		    "id" : 10,
		    "description" : "nombre de la marca 1"
	    },
	    {
		    "id" : 20,
		    "description" : "nombre de la marca 2"
	    },
	    {
		    "id" : 30,
		    "description" : "nombre de la marca 3"
	    },
	    {
		    "id" : 40,
		    "description" : "nombre de la marca 4"
	    }
	],
	    
	bottles : {
		
		10 : [
				{
					"id" : 100,
					"description" : "botella 1"
				},
				{
					"id" : 200,
					"description" : "botella 2"
				}
			 ],
		20 : [
				{
					"id" : 100,
					"description" : "botella 21"
				},
				{
					"id" : 200,
					"description" : "botella 22"
				}
			],
	   30 : [
				{
					"id" : 100,
					"description" : "botella 31"
				},
				{
					"id" : 200,
					"description" : "botella 32"
				}
			],
	   40 : [
				{
					"id" : 100,
					"description" : "botella 41"
				},
				{
					"id" : 200,
					"description" : "botella 42"
				}
			]
			
	},
    
    report :{
	    
	    items : 5
	    
    }
    
});
define(function(require, exports, module){

	require(['director'],function(director,$){

	  	var routes = {
	  		'/index' : function(){
	  			require(["index"],function(page){
		    		page && page.render();
		    	});
	  		},
		    '/pointsCommodity' : function () { 
				require(["pointsCommodity"],function(page){
		    		page && page.render();
		    	});
			},
		    '/pointsExchange' : function () { 
		    	require(["pointsExchange"],function(page){
		    		page && page.render();
		    	});
		    },
		    '/cydetail' : function () { 
		    	require(["cydetail"],function(page){
		    		page && page.render();
		    	});
		    },
		    '/confirmOrder' : function(){
		    	require(["confirmOrder"],function(page){
		    		page && page.render();
		    	});
		    },
		    '/exsuccess' : function(){
				require(["exsuccess"],function(page){
		    		page && page.render();
		    	});
		    },
		    '/exchangeRecord' : function(){
		    	require(["exchangeRecord"],function(page){
		    		page && page.render();
		    	});
		    },
		    '/orderDetail' : function(){
		    	require(["orderDetail"],function(page){
		    		page && page.render();
		    	});
		    },
		    '/exchangeQrcode' : function(){
		    	require(["exchangeQrcode"],function(page){
		    		page && page.render();
		    	});
		    },
		    '/bottom' : function(){
		    	require(["bottom"],function(page){
		    		page && page.render();
		    	});
		    }
	  	};
		var options = {
	  		before : function(){
	  			require(["util"],function(util){
	  				util.revInterceptor(function(res){
	  					if(!util.isEqualObj(__EBT__.CACHE["revManifest"],res)){
        					history.go(0)
        				}
	  				});
        		});
	  		},
	  		on : function(a){
	  		},
	  		after : function(){
	  		},
	  		once : function(){
	  		},
	  		notfound : function(){
	  			require(["util"],function(util){
	  				util.requestHtml("/exchangeShop/404.html",function(html){
	  					$("#pointsMall").html(html);
	  				})
	  			})
	  		}
	  	}
		var router = Router(routes).configure(options);

		router.init();
	});
});
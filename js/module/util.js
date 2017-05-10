define(function() {
	function isEqualObj( x, y ) { 
		//判断是否对象x，全等于对象y
		if ( x === y ) { 
		 	return true; 
		} 
		//判断x，y是否同为Object
		if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) { 
		 	return false; 
		} 
		//比对x,y的构造函数是否相等
		if ( x.constructor !== y.constructor ) { 
		 	return false; 
		} 
		//判断x，y对象的value值，和key值是否相等
		for ( var p in x ) { 
		 	
		 	if ( x.hasOwnProperty( p ) ) { 
				if ( ! y.hasOwnProperty( p ) ) { 
					return false; 
			 	} 
				
				if ( x[ p ] === y[ p ] ) { 
				  	continue; 
				} 
				 
				if ( typeof( x[ p ] ) !== "object" ) { 
				  	return false; 
				} 
				 
				if ( ! Object.equals( x[ p ], y[ p ] ) ) { 
				  	return false; 
				} 
			}
		}
		for ( p in y ) { 
		 	if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) { 
		 		return false; 
		 	} 
		} 
		return true; 
	};

	function revInterceptor(cb){
		//版本控制拦截器

		var path = window.document.location.pathname.indexOf("underwriting") > -1 ? "underwriting" : "exchangeShop"
		
		$.ajax({
			url:__EBT__.BASEPATH+"/rev/"+path+"/rev-manifest.json",
	        type:"get",
	        async:false,
	        cache :false,
	        dataType:"json",
	        success:function(res){
	        	cb(res);
	        },
	        error:function(){
	            alert("请求超时")
	        }
		})	
	}

	function requestHtml(url,cb){
		$.ajax({
			url:__EBT__.BASEPATH+"/"+url,
	        type:"get",
	        async:true,
	        dataType:"html",
	        cache :false,
	        success:function(res){
	        	cb(res);
	        },
	        error:function(){
	            alert("请求超时")
	        }
		})	
	}

	function wxConfig(cb){
		var page_url = location.href.split('#')[0];

		require(["jweixin"],function(wx){
			$.ajax({
		        type: "post",
		        url:  "/point/auth/wechatSign.htm",
		        dataType: "json",
		        data: {
		            pageurl: page_url
		        },
		        success: function (data) {
		            if (data.success) {
		                var wakeUp = data.wakeUp;
		                var isHide = true;
		                wx.config({
		                    debug: false,
		                    appId: wakeUp.appid,
		                    timestamp: wakeUp.timestamp,
		                    nonceStr: wakeUp.nonceStr,
		                    signature: wakeUp.signature,
		                    jsApiList: [
		                        'scanQRCode'
		                    ]
		                });
		                cb();
		            }
		        },
		        error: function (msg) {
		            alert(msg)
		        }
		    })
		});
		
	}
	return {
		isEqualObj : isEqualObj,
		revInterceptor : revInterceptor,
		requestHtml : requestHtml,
		pathname : window.location.pathname,
		wxConfig : wxConfig
	}
})
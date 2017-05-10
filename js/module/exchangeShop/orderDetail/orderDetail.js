define(["zepto","util"],function($,util){
	var _require = require;
	return {
		//渲染页面
		render : function(){

			var _self = this;
			
			util.requestHtml("/exchangeShop/orderDetail.html",function(html){
				$("#pointsMall").html(html);
				$(document).prop("title","订单详情");
	  			_self.loadDidView();
			})

		},
		//加载页面所需要做的事情
		loadDidView : function(){
		}
	}
})


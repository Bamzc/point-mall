define(["util"],function(util){
	return {
		//渲染页面
		render : function(){

			var _self = this;
			
			util.requestHtml("/exchangeShop/main.html",function(html){
				$("#pointsMall").html(html);
				$(document).prop("title","我的店铺");
	  			_self.loadDidView();
			})

		},
		//加载页面所需要做的事情
		loadDidView : function(){
		}
	}
})
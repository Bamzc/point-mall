define(["util"],function(util){
	var _require = require;
	return {
		//渲染页面
		render : function(){

			var _self = this;
			
			util.requestHtml("/underwriting/main.html",function(html){
				$("#pointsMall").html(html);
				$(document).prop("title","我的积分");
	  			_self.loadDidView();
			})

		},
		//加载页面所需要做的事情
		loadDidView : function(){
			
		}
	}
})
define(["util"],function(util){
	var _require = require;
	return {
		//渲染页面
		render : function(){

			var _self = this;
			
			util.requestHtml("/underwriting/exsuccess.html",function(html){
				
				$("#pointsMall").html(html);
				$(document).prop("title","兑换成功");

	  			_self.loadDidView();
			})

		},
		//加载页面所需要做的事情
		loadDidView : function(){
		}
	}
})

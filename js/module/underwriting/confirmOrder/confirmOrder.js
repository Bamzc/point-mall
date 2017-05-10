define(["util","text!js/module/underwriting/confirmOrder/confirmOrder.art","common","template","store"],function(util,art,common,template,store){

	function exchange(cb,param){
		$.ajax({
			url:'/point/exchange/exchange.htm',
	        type:"post",
	        dataType:"json",
	        data:{
	        	commodityid : param.commodityid || "",
	        	number : param.number || ""
	        },
	        success:function(res){
	        	if(res.code == "000000"){
	        		cb();
	        	}else{
	        		mui.alert(res.msg)
	        	}
	        	
	        },
	        error:function(){
	            mui.alert("请求失败")
	        }
		})
	}

	function bindEvents(){
		$("#confirmOrder").on("tap",".confirmPayBtn",function(){
			var data = {
				commodityid : store.get(common.COOKIE_COMMODITY_ID),
				number : store.get(common.COOKIE_COMMODITY_EXCHANGE_SUM)
			};
			//exchange(function(){
				mui.openWindow({
					url : "#/exsuccess"
				});
			//},data)
		})
	}

	function loadDidView(){

		var data = {
			integration : store.get(common.COOKIE_COMMODITY_POINT),
			commodityname : store.get(common.COOKIE_COMMODITY_NAME),
			price : store.get(common.COOKIE_COMMODITY_PRICE),
			exchangeSum : store.get(common.COOKIE_COMMODITY_EXCHANGE_SUM),
			pointSum : store.get(common.COOKIE_COMMODITY_EXCHANGE_SUM)*store.get(common.COOKIE_COMMODITY_POINT),
			thumbnail : store.get(common.COOKIE_COMMODITY_THUMBNAIL)
		}
		var _html = template.render(art,data);

		$("#confirmOrder").html(_html);

		bindEvents();
	}
	return {
		//渲染页面
		render : function(){

			var _self = this;
			
			util.requestHtml("/underwriting/confirmOrder.html",function(html){
				
				$("#pointsMall").html(html);

				$(document).prop("title","订单确认");

	  			_self.loadDidView();
			})

		},
		//加载页面所需要做的事情
		loadDidView : loadDidView
	}
})

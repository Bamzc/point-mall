define(["util","template","text!js/module/underwriting/orderDetail/orderDetail.art","common","store"],function(util,template,art,common,store){
	
	function getOrderDetail(cb){
		
		$.ajax({
			url:'/point-mall/data/orderDetail.json',
	        type:"get",
	        dataType:"json",
	        data:{
	        },
	        success:function(res){

	        	if(res.code == "000000"){

	        		cb(res);

	        	}else{
	        		alert(res.msg)
	        	}
	        	
	        },
	        fail:function(){
	            alert("请求失败")
	        }
		})	
	}

	function bindEvents(){
		$("#orderDetail").on("tap",".exchange-code li",function(){

			store.set(common.COOKIE_COMMODITY_QRCODE,$(this).attr("data-exchangeCode"))
			mui.openWindow({
			    url:"#/exchangeQrcode"
			});

		})
	}

	function loadDidView(){
		getOrderDetail(function(data){

			var _html = template.render(art,data);

			$("#orderDetail").html(_html);
		})
		

		bindEvents();
	}
	return {
		//渲染页面
		render : function(){

			var _self = this;
			
			util.requestHtml("/underwriting/orderDetail.html",function(html){
				$("#pointsMall").html(html);
				$(document).prop("title","订单详情");
	  			_self.loadDidView();
			})

		},
		//加载页面所需要做的事情
		loadDidView : loadDidView
	}
})


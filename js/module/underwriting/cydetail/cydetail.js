define(["util","text!js/module/underwriting/cydetail/cydetail.art","common","template","store"],function(util,art,common,template,store){

	function getCommodityDetail(cb,commodityid){
		$.ajax({
			url:'/point-mall/data/cydetail.json',
	        type:"get",
	        dataType:"json",
	        data:{
	        	commodityid : commodityid || ""
	        },
	        success:function(res){

	        	if(res.success){

	        		res.data.imgbaseurl = res.imgbaseurl;

	        		cb(res.data);
	        	}else{
	        		alert(res.message)
	        	}
	        	
	        },
	        error:function(){
	            alert("请求失败")
	        }
		})
	}

	function bindEvents(){
		$("#commodityDetail").on("tap",".exchangeBtn",function(){

			var sum = $("#commodityDetail").find(".mui-numbox input").val();

			if(sum <= 0){
				mui.alert("请选择兑换数量！")
				return;
			}

			store.set(common.COOKIE_COMMODITY_EXCHANGE_SUM,sum);

			window.location.href = util.pathname+"#/confirmOrder"
		})
	}

	function loadDidView(){
		
		getCommodityDetail(function(data){

			var _html = template.render(art,data);

			$("#commodityDetail").html(_html);

			mui(".cy-list > .card-content > .card-content-inner > .mui-numbox").numbox();

			store.set(common.COOKIE_COMMODITY_POINT,data.integration);

			store.set(common.COOKIE_COMMODITY_PRICE,data.price);

			store.set(common.COOKIE_COMMODITY_NAME,data.commodityname)

			store.set(common.COOKIE_COMMODITY_THUMBNAIL,data.imgbaseurl+data.thumbnail);

		},store.get(common.COOKIE_COMMODITY_ID));

		bindEvents();
	}
	return {
		//渲染页面
		render : function(){

			var _self = this;
			
			util.requestHtml("/underwriting/cydetail.html",function(html){

				$("#pointsMall").html(html);

				$(document).prop("title","商品详情");

	  			_self.loadDidView();
			})

		},
		//加载页面所需要做的事情
		loadDidView : loadDidView
	}
})
define(["util","text!js/module/exchangeShop/cydetail/cydetail.art","common","template","store"],function(util,art,common,template,store){

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
	        fail:function(){
	            alert("请求失败")
	        }
		})
	}

	function loadDidView(){
		
		getCommodityDetail(function(data){

			var _html = template.render(art,data);

			$("#commodityDetail").html(_html);

		},store.get(common.COOKIE_COMMODITY_ID));

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
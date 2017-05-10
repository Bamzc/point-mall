define(["util","template","text!js/module/exchangeShop/checkRecord/checkRecord.art","common","store"],function(util,template,art,common,store){

	function getCommodityList(cb,options){
		$.ajax({
			url:'/point-mall/data/checkRecord.json',
	        type:"get",
	        dataType:"json",
	        data:{
	        	pageNumber:options && options.pageNumber || 1,
	        	pageSize: options && options.pageSize || 20
	        },
	        success:function(res){

	        	if(res.success){

	        		res.data.imgbaseurl = res.imgbaseurl;

	        		cb(res.data);
	        	}else{
	        		mui.alert(res.message)
	        	}
	        	
	        },
	        error:function(){
	            mui.alert("请求失败")
	        }
		})	
	}
	
	var refresh = {
		initRefresh : function(){

			var _self = this;

			this.options = {
				pageNumber : 1
				//,
				//pageSize : 7
			};
			
			mui("#checkRecord").pullRefresh({
			    down : {
				    height:50,//可选,默认50.触发下拉刷新拖动距离,
				    auto: true,//可选,默认false.自动下拉刷新一次
				    contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
				    contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
				    contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
				    callback : _self.pulldownRefresh
			  	},
			  	up : {
			      	height:50,//可选.默认50.触发上拉加载拖动距离
			      	auto:false,//可选,默认false.自动上拉加载一次
			      	contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
			      	contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
			      	callback : _self.pullupRefresh
			    }
			});

			if (mui.os.plus) {
				mui.plusReady(function() {
					setTimeout(function() {
						mui('#checkRecord').pullRefresh().pullupLoading();
					}, 1000);

				});
			} else {
				mui.ready(function() {
					mui('#checkRecord').pullRefresh().pullupLoading();
				});
			}

		},
		/**
		 * 下拉刷新具体业务实现
		 */
		pulldownRefresh : function () {
			refresh.options.pageNumber = 1; //页数初始化
			getCommodityList(function(data){

				if(data == ""){
					mui('#checkRecord').pullRefresh().endPulldownToRefresh();
				}else{
					var _html = template.render(art,data);

					$("#checkRecord").find(".ck-list").html(_html);

					mui('#checkRecord').pullRefresh().endPulldownToRefresh(); //refresh completed
					
					mui('#checkRecord').pullRefresh().refresh(true);
				}
				
			},refresh.options)
						
		},
		/**
		 * 上拉加载具体业务实现
		 */
		pullupRefresh : function() {
			refresh.options.pageNumber++;
			console.log(1)
			getCommodityList(function(data){
				console.log(data.lastPage == data.pageNum ? true : false)
				mui('#checkRecord').pullRefresh().endPullupToRefresh(data.lastPage == data.pageNum ? true : false); //参数为true代表没有更多数据了。

				var _html = template.render(art,data);

				$("#checkRecord").find(".ck-list").append(_html);
				

			},refresh.options)
		}
	}
	function loadDidView(){
		
		refresh.initRefresh();
		
	}
	return {
		//渲染页面
		render : function(){

			var _self = this;
			
			util.requestHtml("/exchangeShop/checkRecord.html",function(html){
				
				$(document).prop("title","验证记录");

				$("#pointsMall").html(html);

	  			_self.loadDidView();
			})

		},
		//加载页面所需要做的事情
		loadDidView : loadDidView
	}
})
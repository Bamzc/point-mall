define(["util","template","text!js/module/underwriting/pointsExchange/pointsExchange.art","common","store"],function(e,t,i,n,o){function u(e,t){$.ajax({url:"/point-mall/data/list.json",type:"get",dataType:"json",data:{pageNumber:t&&t.pageNumber||1,pageSize:t&&t.pageSize||20},success:function(t){t.success?(t.data.imgbaseurl=t.imgbaseurl,e(t.data)):alert(t.message)},fail:function(){alert("请求失败")}})}function s(){$("#commodityList").find(".cy-list").on("tap","li",function(t){o.set(n.COOKIE_COMMODITY_ID,$(this).attr("data-commodityid")),window.location.href=e.pathname+"#/cydetail"})}function l(){a.initRefresh(),s()}var a={initRefresh:function(){var e=this;this.options={pageNumber:1,pageSize:7},mui("#commodityList").pullRefresh({down:{height:50,auto:!0,contentdown:"下拉可以刷新",contentover:"释放立即刷新",contentrefresh:"正在刷新...",callback:e.pulldownRefresh},up:{height:50,auto:!1,contentrefresh:"正在加载...",contentnomore:"没有更多数据了",callback:e.pullupRefresh}}),mui.os.plus?mui.plusReady(function(){setTimeout(function(){mui("#commodityList").pullRefresh().pullupLoading()},1e3)}):mui.ready(function(){mui("#commodityList").pullRefresh().pullupLoading()})},pulldownRefresh:function(){a.options.pageNumber=1,u(function(e){if(""==e)mui("#commodityList").pullRefresh().endPulldownToRefresh();else{var n=t.render(i,e);$("#commodityList").find(".cy-list").html(n),mui("#commodityList").pullRefresh().endPulldownToRefresh(),mui("#commodityList").pullRefresh().refresh(!0)}},a.options)},pullupRefresh:function(){a.options.pageNumber++,u(function(e){mui("#commodityList").pullRefresh().endPullupToRefresh(e.lastPage==e.pageNum);var n=t.render(i,e);$("#commodityList").find(".cy-list").append(n)},a.options)}};return{render:function(){var t=this;e.requestHtml("/underwriting/pointsExchange.html",function(e){$(document).prop("title","兑换中心"),$("#pointsMall").html(e),t.loadDidView()})},loadDidView:l}});
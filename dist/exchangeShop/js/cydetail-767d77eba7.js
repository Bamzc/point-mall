define(["util","text!js/module/exchangeShop/cydetail/cydetail.art","common","template","store"],function(t,e,a,i,n){function l(t,e){$.ajax({url:"/point-mall/data/cydetail.json",type:"get",dataType:"json",data:{commodityid:e||""},success:function(e){e.success?(e.data.imgbaseurl=e.imgbaseurl,t(e.data)):alert(e.message)},fail:function(){alert("请求失败")}})}function o(){l(function(t){var a=i.render(e,t);$("#commodityDetail").html(a)},n.get(a.COOKIE_COMMODITY_ID))}return{render:function(){var e=this;t.requestHtml("/underwriting/cydetail.html",function(t){$("#pointsMall").html(t),$(document).prop("title","商品详情"),e.loadDidView()})},loadDidView:o}});
define(["util","template","text!js/module/underwriting/orderDetail/orderDetail.art","common","store"],function(e,t,n,i,o){function r(e){$.ajax({url:"/point-mall/data/orderDetail.json",type:"get",dataType:"json",data:{},success:function(t){"000000"==t.code?e(t):alert(t.msg)},fail:function(){alert("请求失败")}})}function a(){$("#orderDetail").on("tap",".exchange-code li",function(){o.set(i.COOKIE_COMMODITY_QRCODE,$(this).attr("data-exchangeCode")),mui.openWindow({url:"#/exchangeQrcode"})})}function d(){r(function(e){var i=t.render(n,e);$("#orderDetail").html(i)}),a()}return{render:function(){var t=this;e.requestHtml("/underwriting/orderDetail.html",function(e){$("#pointsMall").html(e),$(document).prop("title","订单详情"),t.loadDidView()})},loadDidView:d}});
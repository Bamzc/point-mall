define(["util","text!js/module/underwriting/confirmOrder/confirmOrder.art","common","template","store"],function(e,t,O,n,r){function i(){$("#confirmOrder").on("tap",".confirmPayBtn",function(){({commodityid:r.get(O.COOKIE_COMMODITY_ID),number:r.get(O.COOKIE_COMMODITY_EXCHANGE_SUM)});mui.openWindow({url:"#/exsuccess"})})}function o(){var e={integration:r.get(O.COOKIE_COMMODITY_POINT),commodityname:r.get(O.COOKIE_COMMODITY_NAME),price:r.get(O.COOKIE_COMMODITY_PRICE),exchangeSum:r.get(O.COOKIE_COMMODITY_EXCHANGE_SUM),pointSum:r.get(O.COOKIE_COMMODITY_EXCHANGE_SUM)*r.get(O.COOKIE_COMMODITY_POINT),thumbnail:r.get(O.COOKIE_COMMODITY_THUMBNAIL)},o=n.render(t,e);$("#confirmOrder").html(o),i()}return{render:function(){var t=this;e.requestHtml("/underwriting/confirmOrder.html",function(e){$("#pointsMall").html(e),$(document).prop("title","订单确认"),t.loadDidView()})},loadDidView:o}});
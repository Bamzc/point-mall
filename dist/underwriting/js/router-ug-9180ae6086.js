define(function(n,e,o){n(["director"],function(e,o){var t={"/index":function(){n(["index"],function(n){n&&n.render()})},"/pointsCommodity":function(){n(["pointsCommodity"],function(n){n&&n.render()})},"/pointsExchange":function(){n(["pointsExchange"],function(n){n&&n.render()})},"/cydetail":function(){n(["cydetail"],function(n){n&&n.render()})},"/confirmOrder":function(){n(["confirmOrder"],function(n){n&&n.render()})},"/exsuccess":function(){n(["exsuccess"],function(n){n&&n.render()})},"/exchangeRecord":function(){n(["exchangeRecord"],function(n){n&&n.render()})},"/orderDetail":function(){n(["orderDetail"],function(n){n&&n.render()})},"/exchangeQrcode":function(){n(["exchangeQrcode"],function(n){n&&n.render()})},"/bottom":function(){n(["bottom"],function(n){n&&n.render()})}},i={before:function(){n(["util"],function(n){n.revInterceptor(function(e){n.isEqualObj(__EBT__.CACHE.revManifest,e)||history.go(0)})})},on:function(n){},after:function(){},once:function(){},notfound:function(){n(["util"],function(n){n.requestHtml("/exchangeShop/404.html",function(n){o("#pointsMall").html(n)})})}},c=Router(t).configure(i);c.init()})});
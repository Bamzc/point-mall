define(function(n,e,o){n(["director"],function(e){var o={"/index":function(){n(["index"],function(n){n&&n.render()})},"/pointsCommodity":function(){n(["pointsCommodity"],function(n){n&&n.render()})},"/pointsExchange":function(){n(["pointsExchange"],function(n){n&&n.render()})},"/validatecode":function(){n(["validatecode"],function(n){n&&n.render()})},"/cydetail":function(){n(["cydetail"],function(n){n&&n.render()})},"/checkRecord":function(){n(["checkRecord"],function(n){n&&n.render()})},"/exsuccess":function(){n(["exsuccess"],function(n){n&&n.render()})},"/exchangeRecord":function(){n(["exchangeRecord"],function(n){n&&n.render()})},"/orderDetail":function(){n(["orderDetail"],function(n){n&&n.render()})},"/userCenter":function(){n(["userCenter"],function(n){n&&n.render()})},"/bottom":function(){n(["bottom"],function(n){n&&n.render()})}},t={before:function(){n(["util"],function(n){n.revInterceptor(function(e){n.isEqualObj(__EBT__.CACHE.revManifest,e)||history.go(0)})})},on:function(n){console.log(2)},after:function(){},once:function(){},notfound:function(){n(["util"],function(n){n.requestHtml("/exchangeShop/404.html",function(n){$("#pointsMall").html(n)})})}},c=Router(o).configure(t);c.init()})});
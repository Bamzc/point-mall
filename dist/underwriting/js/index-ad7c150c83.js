define(["util"],function(i){require;return{render:function(){var n=this;i.requestHtml("/underwriting/main.html",function(i){$("#pointsMall").html(i),$(document).prop("title","我的积分"),n.loadDidView()})},loadDidView:function(){}}});
define(["zepto","util"],function(t,i){require;return{render:function(){var n=this;i.requestHtml("/underwriting/pointsCommodity.html",function(i){t("#pointsMall").html(i),t(document).prop("title","积分商品"),n.loadDidView()})},loadDidView:function(){}}});
define(["qrcode","util","common","store"],function(e,t,r,o){var n=e.QRErrorCorrectLevel,d=e.QRCode;return function(e){e.fn.qrcode=function(t){"string"==typeof t&&(t={text:t}),t=e.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:n.H,background:"#ffffff",foreground:"#000000"},t);var r=function(){var e=new d(t.typeNumber,t.correctLevel);e.addData(t.text),e.make();var r=document.createElement("canvas");r.width=t.width,r.height=t.height;for(var o=r.getContext("2d"),n=t.width/e.getModuleCount(),a=t.height/e.getModuleCount(),c=0;c<e.getModuleCount();c++)for(var u=0;u<e.getModuleCount();u++){o.fillStyle=e.isDark(c,u)?t.foreground:t.background;var i=Math.ceil((u+1)*n)-Math.floor(u*n),l=Math.ceil((c+1)*n)-Math.floor(c*n);o.fillRect(Math.round(u*n),Math.round(c*a),i,l)}return r},o=function(){var r=new d(t.typeNumber,t.correctLevel);r.addData(t.text),r.make();for(var o=e("<table></table>").css("width",t.width+"px").css("height",t.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",t.background),n=t.width/r.getModuleCount(),a=t.height/r.getModuleCount(),c=0;c<r.getModuleCount();c++)for(var u=e("<tr></tr>").css("height",a+"px").appendTo(o),i=0;i<r.getModuleCount();i++)e("<td></td>").css("width",n+"px").css("background-color",r.isDark(c,i)?t.foreground:t.background).appendTo(u);return o};return this.each(function(){var n="canvas"==t.render?r():o();e(n).appendTo(this)})}}($),{render:function(){var e=this;t.requestHtml("/underwriting/exchangeQrcode.html",function(t){$("#pointsMall").html(t),$(document).prop("title","兑换二维码"),e.loadDidView()})},loadDidView:function(){var e=o.get(r.COOKIE_COMMODITY_QRCODE);$("#exchangeQrcode").find(".code").qrcode(e)}}});
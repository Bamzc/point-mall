!function(){function e(){var e=window.document.location.href,i=window.document.location.pathname,n=e.indexOf(i),t=e.substring(0,n),r=i.substring(0,i.substr(1).indexOf("/")+1);return t+r}!location.hash&&(window.location.href=window.location.href.replace(/index.html/g,"#/index"));var i={baseUrl:"/point-mall/",paths:{jquery:"js/lib/jquery-1.11.3.min",text:"js/base/text.min",css:"js/base/css.min",director:"js/lib/director/director.min",template:"js/lib/template-web",store:"js/lib/store.min",qrcode:"js/lib/qrcode.min",jweixin:"js/lib/jweixin-1.2.0.min"},urlArgs:"r="+(new Date).getTime(),map:{"*":{}},shim:{},waitSeconds:15},n=function(i){$.ajax({url:e()+"/rev/"+r+"/rev-manifest.json",type:"get",async:!1,dataType:"json",cache:!1,success:function(e){i(e)},fail:function(){alert("请求失败")}})},t=window.document.location.pathname.indexOf("underwriting"),r=t>-1?"underwriting":"exchangeShop";n(function(n){var o={};for(var s in n)o[s.split(".")[0]||s]=e()+"/dist/"+r+"/js/"+n[s];i.map["*"]=o,__EBT__.CACHE.revManifest=n,__EBT__.BASEPATH=e(),require.config(i),require([t>-1?"router-ug":"router-ep"])})}();
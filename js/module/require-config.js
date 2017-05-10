 //js劫持页面跳转
(function(){
    !location.hash &&　(window.location.href = window.location.href.replace(/index.html/g,'#/index'));

    //require config 配置
    var options = {
        baseUrl: "/point-mall/",//项目根目录
        paths: {
            "jquery" : "js/lib/jquery-1.11.3.min",
            'text': 'js/base/text.min',
            'css' : 'js/base/css.min',
            'director' : 'js/lib/director/director.min',
            'template' : 'js/lib/template-web',
            'store' : 'js/lib/store.min',
            'qrcode' : 'js/lib/qrcode.min',
            'jweixin' : 'js/lib/jweixin-1.2.0.min'
        },
        urlArgs: "r=" + (new Date()).getTime(),
        map: {
            '*': {
                
            }
        },
        shim: {
            /*mui: {
                deps: ['css!source/plugins/mui/css/mui.min']
            }*/
        },
        waitSeconds: 15
    },
    requestMap = function(cb){
        $.ajax({
            url:getRootPath()+"/rev/"+h+"/rev-manifest.json",
            type:"get",
            async:false,
            dataType:"json",
            cache :false,
            success:function(res){
                cb(res);
            },
            fail:function(){
                alert("请求失败")
            }
        })
    },

    p = window.document.location.pathname.indexOf("underwriting"),

    h = p > -1 ? "underwriting" : "exchangeShop";

    function getRootPath() {
        //获取当前网址，如： http://localhost:8083/pointsMall/underwriting/#/index
        var curWwwPath = window.document.location.href;
        //获取主机地址之后的目录，如： pointsMall/underwriting/#/index
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        //获取主机地址，如： http://localhost:8083
        var localhostPaht = curWwwPath.substring(0, pos);
        //获取带"/"的项目名，如：/pointsMall
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);

        return (localhostPaht + projectName);
    }
    requestMap(function(res){
        var newMap = {};

        for(var k in res){
            newMap[k.split(".")[0] || k] = getRootPath()+"/dist/"+h+"/js/"+res[k];
        }

        options.map["*"] = newMap;

        __EBT__.CACHE["revManifest"] = res;

        __EBT__.BASEPATH = getRootPath();

        require.config(options);

        //配置路由器
        require([ p > -1 ? "router-ug" : "router-ep"]);
    });
    
})()



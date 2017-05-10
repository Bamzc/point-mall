~function (window) {

    var ver = {
	    js : {/* <version> */
	        "mui.min": "js/lib/mui/js/|d168add7",
	        "require": "js/base/|d168add7",
	        "require-config": "js/module/|d168add7",
	        "zepto.min": "js/lib/|03a59277"
	        /* </version> */
    	},
    	css : {/* <version> */
	        "mui.min": "js/lib/mui/js/|d168add7",
	        "require": "js/base/|d168add7",
	        "style": "dist/css/|d168add7",
	        "require-config": "dist/js/|d168add7",
	        "zepto.min": "201704/20/|03a59277"
	        /* </version> */
    	}
    };

    var __EBT__ = window.__EBT__ = window.__EBT__ || {};

    __EBT__.CACHE =__EBT__.CACHE || {};

    /*
     * 解决requirejs，刷新页面，js资源全部重新加载问题
     * 注：本方法不支持异步加载
     **/
    window.__loadjs = function(js){
    	var i=0,
    		script = "",
    		_ver = ver.js;
    	if(js instanceof Array){
    		for(i; i<js.length; i++){
    			(function(n){
    				script += '<script type="text/javascript" src="../'+
            		_ver[js[i]].split("|")[0]+js[i]+'.js?v='+_ver[js[i]].split("|")[1]+'"></scr'+'ipt>'
    			})(i)
    			
    		}
    		document.write(script || "")
    	}else{
	        document.write('<script type="text/javascript" src="../'+
	            _ver[js].split("|")[0]+js+'.js?v='+_ver[js].split("|")[1]+'"></scr'+'ipt>');
	    }
    }
    /*
     * 解决requirejs，刷新页面，css资源全部重新加载问题
     * 注：本方法不支持异步加载
     **/
    window.__loadcss = function(css){
    	var i=0,
    		link = "",
    		_ver = ver.css;
    	if(css instanceof Array){
    		for(i; i<css.length; i++){
    			(function(n){
    				link += '<link rel="stylesheet" href="../'+
	        		_ver[css].split("|")[0]+css+'.css?v='+_ver[css].split("|")[1]+'">'
    			})(i)
    			
    		}
    		document.write(script || "")
    	}else{
	        document.write('<link rel="stylesheet" href="../'+
	        	_ver[css].split("|")[0]+css+'.css?v='+_ver[css].split("|")[1]+'">');
	    }
    }

}(window);
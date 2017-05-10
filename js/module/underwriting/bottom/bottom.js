define(["util"],function(util){
	var _require = require;
	return {
		//渲染页面
		render : function(){

			var _self = this;
			
			util.requestHtml("/underwriting/bottom.html",function(html){

				$(".mui-content").append(html);
				
	  			_self.loadDidView();
			})

		},
		//加载页面所需要做的事情
		loadDidView : function(){
			//底部导航栏操作
		    /**
		     * 获取随机数
		     */
		    function getRandomValue(len){
		        var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		        var v_len = len;
		        if(len == undefined || len == 0){
		            v_len = 20;
		        }
		        var res = "";
		        for(var i = 0; i < v_len ; i ++) {
		            var id = Math.ceil(Math.random()*35);
		            res += chars[id];
		        }
		        return res;
		    }
		    var flag = false;
		    $(function(){
		        //header事件
		        document.getElementById('host').addEventListener('tap',function(e){
		            var randomValue = getRandomValue();
		            var host = "/wxauth/index.htm?r="+randomValue;
		            if(window.location.pathname != host){
		                mui.openWindow({
		                    url:host,
		                    id:'tag',
		                    createNew:false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		                    show:{
		                      autoShow:true//页面loaded事件发生后自动显示，默认为true
		                    },
		                    waiting:{
		                      autoShow:true,//自动显示等待框，默认为true
		                      title:'正在加载...'//等待对话框上显示的提示内容
		                    }
		                });
		            }
		        });
		        //bottom监听
		        document.getElementById('back').addEventListener('tap',function(e){
		            var host = "/wxauth/index.htm";
		            if(window.location.pathname != host){
		                /*eUtil.storage.removeCache("_insure_confirm");
		                eUtil.storage.removeCache("__quote");
		                eUtil.storage.removeCache("vehicleInsuranceData");*/
		                if(!flag){
		                    flag = true;
		                    mui.back();
		                    setTimeout(function(){
		                        flag = false;
		                    },300);
		                }
		            }
		            return false;
		        });
		        document.getElementById('goUserCenter').addEventListener('tap',function(e){
		            var randomValue = getRandomValue();
		            window.location.href = "/wxuser/userCenter.htm?r="+randomValue;
		        });
		        
		        document.getElementById('square').addEventListener('tap',function(e){
		            var randomValue = getRandomValue();
		            window.location.href = "/wxchat/findWorld.htm?r="+randomValue;
		        });

		    })
		}
	}
})
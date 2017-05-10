define(["util","jweixin"],function(util,wx){

	function verifyCode(exchangeCode){
		$.ajax({
	        type: "post",
	        url:  "/point/valid/validCode.htm",
	        dataType: "json",
	        data: {
	            exchangeCode: exchangeCode
	        },
	        success: function (data) {
	            if (data && data.code == "000000") {
	                mui.openWindow({
	                	url:"#/exsuccess"
	                });
	            }else{
	            	mui.alert(data.msg)
	            }
	        },
	        error: function (msg) {
	        }
	    })
	}

	function bindEvents(){
		$("#validateCode").on("tap",".confirmBtn",function(){
			var v = $("#validateCode").find(".exchangeCode").val();

			if(/^\+?[1-9][0-9]*$/.test(v)){
				verifyCode(v);
			}else{
				mui.alert("请输入正确的兑换码！")
			}

		});
		$("#validateCode").on("tap",".scanQRCodeBtn",function(){

			util.wxConfig(function(){
				wx.scanQRCode({
				    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
				    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
				    success: function (res) {
				    	var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
				    	verifyCode(result)
					}
				});
			})
		});
	}

	function loadDidView(){
		bindEvents();
	}


	return {
		//渲染页面
		render : function(){

			var _self = this;
			
			util.requestHtml("/exchangeShop/validatecode.html",function(html){
				
				$("#pointsMall").html(html);
				$(document).prop("title","验证兑换码");

	  			_self.loadDidView();
			});

		},
		//加载页面所需要做的事情
		loadDidView : loadDidView
	}
})

var wx = require('weixin-js-sdk');


//定义公共方法
exports.install = function (Vue, options) {

  Vue.prototype.isWeiXin = function (){
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }

  };

  //微信分享内容自定义 －－供内部分享调用的方法
  Vue.prototype.wxInit= function (data){
    if(data.link){
      data.link = data.link.replace(/[(\?)|(&)]openId=.*/, "").replace(/[(\?)|(&)]code=.*/, "");
    }
    // 分享前过滤掉当前用户的openId,防止微信中出现“下单账号和支付账号不一致的问题”。
    //    console.log('weixin--data:',data)
    //    if(!sessionStorage.canShare && !sessionStorage.reload){
    //     sessionStorage.reload = true;
    //     location.reload();
    //    }
    setTimeout(()=>{
      wx.ready(function () {

        //分享到朋友圈
        wx.onMenuShareTimeline({

          title: data.titleQuan,
          imgUrl: data.imgUrl,
          link:data.link,

          success: function () {
            console.log("分享到朋友圈成功")
          },
          cancel: function () {
            console.log("分享失败,您取消了分享!")
          }
        });
        //分享给朋友
        wx.onMenuShareAppMessage({

          title: data.title,
          desc: data.desc,
          imgUrl: data.imgUrl,
          link: data.link,

          success: function () {
            console.log("成功分享给朋友")
          },
          cancel: function () {
            console.log("分享失败,您取消了分享!")
          }
        });





      });

      wx.error(function(res){
        console.log('error:',res)
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      });
    },500)

  }










};

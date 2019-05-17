<template>
    <div>

    </div>
</template>

<script>
  import api from '@/constant/api.js'
  export default {
    name: "wxlogin",
    data(){
      return{

      }
    },
    created(){
      if(window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
        if(localStorage.getItem("userId")){
          this.$router.replace({path: '/index'});
          return
        }else{
          let urlCode = window.location.hash;
          if(urlCode.indexOf("?") == -1){
            //第一次进来的时候，没有携带code,则获取code
            var qs = require('qs');
            let param={url:'http://shufa.xuebuapp.com',appDefineId:7}
            this.axios.post(api.generateSign, qs.stringify(param))
              .then(res=>{
                var Data = res.data;
                console.log(Data)
                window.localStorage.setItem('appId',Data.appId)
                // 跳转到一个空白页，截取code传给后台
                var reUrl = encodeURIComponent("http://shufa.xuebuapp.com/static/wxauth.html")
                var redirect = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+Data.appId+"&redirect_uri="
                  + reUrl + "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
                console.log("微信浏览器登录，跳转 " + redirect)
                window.location = redirect
                return false;
              })
          }else{
            let objUrl = this.$route.query;
            let code = objUrl.code;
            var qs = require('qs');
            let param = {appId:localStorage.getItem("appId"),code:code}
            this.axios.post(api.code2UserInfo, qs.stringify(param))
              .then(res=>{
                console.log(res)
                if(res.status==200){
                  localStorage.setItem('userId',res.data.user.unionid)
                  this.$router.replace({path: '/index'});
                  return
                }else{
                  alert('授权失败')
                }
              })
          }
        }
      }else{
        alert('请在微信客户端访问本页面');
        // 以下代码是用javascript强行关闭当前页面
        var opened = window.open('about:blank', '_self');
        opened.opener = null;
        opened.close();
        return false
      }

    },
    methods:{

    }
  }
</script>

<style scoped>

</style>

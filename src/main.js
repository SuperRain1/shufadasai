// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入微信
import wx from 'weixin-js-sdk';
import wxShare from './components/common/js/wxShare'
Vue.use(wxShare);

//引入axios
import axios from './http'

//安装vuex
import store from './store'//引入store

import api from '@/constant/api.js'

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  render: h => h(App),
  mounted(){
    console.log(window.location.href,111)
    // if(window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
    //   var qs = require('qs');
    //   var server = axios.defaults.baseURL+'/yuenr/wallet/weixin/js/signature'
    //   var param={url:window.location.href}
    //   this.axios.post(server, qs.stringify(param))
    //     .then(res=>{
    //
    //       var Data = res.data;
    //       wx.config({
    //         debug: false, // 调试模式
    //         // appId: 'wx0c1892e730375307',   // 公众号的唯一标识
    //         appId: store.state.appid,   // 公众号的唯一标识
    //         timestamp: Data.timestamp, // 时间戳
    //         nonceStr: Data.nonceStr,    // 随机串
    //         signature: Data.signature,   //签名
    //         jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
    //       });
    //
    //
    //     })
    // }



  }

}).$mount('#app')

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={//要设置的全局访问的state对象
  // baseUrl:'http://112.126.82.150:8805/handwriting'
  baseUrl:'http://101.200.77.126:8805/handwriting',
  appid:'wx069d38bc58b8f8e8',
  //要设置的初始属性值
};
const store = new Vuex.Store({
  state
});

export default store;

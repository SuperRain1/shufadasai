/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
import router from './router'

// axios 配置
axios.defaults.timeout = 10000;

axios.defaults.baseURL = 'http://101.200.77.126:8805/handwriting';//正式
// axios.defaults.baseURL = 'http://112.126.82.150:8805/handwriting/';//test112
// axios.defaults.baseURL = 'http://192.168.10.68:8080/';//ip局域网


export default axios;

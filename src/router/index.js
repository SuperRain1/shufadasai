import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/signUp/index.vue'
import login from '../pages/signUp/login.vue'
import introduce from '../pages/signUp/introduce.vue'
import form from '../pages/signUp/form.vue'
import formList from '../pages/signUp/formList.vue'
import formDetail from '../pages/signUp/formDetail.vue'
import wxlogin from '../pages/signUp/wxlogin.vue'
import success from '../pages/signUp/success.vue'
import vote from '../pages/vote/index.vue'


Vue.use(Router)

const routes = [
    {path: '/',component:wxlogin},
    {path: '/index',meta:{title:'第三届中华好书法大赛线上报名'},component: index},//首页入口
    {path: '/login',meta:{title:'第三届中华好书法大赛线上报名'},component: login},//身份
    {path: '/introduce',meta:{title:'活动介绍'},component: introduce},//活动介绍
    {path: '/form',meta:{title:'第三届中华好书法大赛线上报名'},component:form},//报名表
    {path: '/formList',meta:{title:'我的报名列表'},component:formList},//我的报名列表
    {path: '/formDetail',meta:{title:'报名详情'},component: formDetail},//报名表详情
    {path: '/wxlogin',component: wxlogin},//微信授权页
    {path: '/success',meta:{title:'报名成功'},component: success},//报名成功提示页
    {path: '/vote',meta:{title:'第三届中华好书法大赛线上投票'},component: vote},//中华好书法投票
  ]

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
})
export default router;

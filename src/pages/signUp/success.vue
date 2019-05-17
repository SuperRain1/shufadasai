<template>
    <div>
      <div class="page msg_success js_show">
        <div class="weui-msg">
          <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
          <div class="weui-msg__text-area">
            <h2 class="weui-msg__title">报名成功</h2>
            <p class="weui-msg__desc">如需查看报名信息，请返回首页后，点击查看我提交的报名表即可</p>
          </div>
          <div class="weui-msg__opr-area">
            <p class="weui-btn-area">
              <a href="javascript:;" class="weui-btn weui-btn_default" @click="download">下载报名表</a>
              <a href="javascript:;" class="weui-btn weui-btn_primary" @click="goHome">返回首页</a>
            </p>
          </div>
          <div class="weui-msg__extra-area">
            <div class="weui-footer">
              <p class="weui-footer__links">
                <!--<a href="javascript:void(0);" class="weui-footer__link">底部链接文本</a>-->
              </p>
              <p class="weui-footer__text">Copyright © 2008-2016 xuebuapp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "success",
      data(){
          return{
            address:'',
          }
      },
      mounted(){
        var obj = this.$route.query;
        // console.log(obj)
        this.address = obj.address;
      },
      methods:{
        goHome(){
          this.$router.replace({path:'/login'})
        },
        download(){
          console.log(this.$store.state.baseUrl)
          window.location = this.$store.state.baseUrl+'/'+this.address
        }
      }

    }
</script>

<style scoped>

</style>

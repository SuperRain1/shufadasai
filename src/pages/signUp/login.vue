<template>
  <div class="hello">
    <div class="box">
      <img src="./img/icon13.jpg" alt="">
    </div>
    <div class="buttonBox">
      <img src="./img/icon14.png" @click="goForm(0)" alt="">
      <img src="./img/icon15.png" @click="goForm(2)" alt="">
      <img src="./img/icon16.png" @click="goForm(0)" alt="">
      <!--<a class="weui-btn weui-btn_plain-primary" @click="goForm(0)">小学入口</a>-->
      <!--<a class="weui-btn weui-btn_plain-primary" @click="goForm(1)">中学入口</a>-->
      <!--<a class="weui-btn weui-btn_plain-primary" @click="goForm(2)">教师入口</a>-->
    </div>

  </div>
</template>

<script>
  import api from '@/constant/api.js'
  import {Indicator} from 'mint-ui'
  export default {
    components:{

    },
    data () {
      return {
        type:'',
        userId:'',
      }
    },
    created(){
      this.userId = localStorage.getItem("userId")
    },
    methods:{
      goForm(type){
        this.type = type;
        this.formLength()
      },
      // goFormList(){
      //   this.$router.push({path: '/formList'});
      // }
      formLength(){
        Indicator.open({
          text: 'Loading...',
          spinnerType: 'snake'
        });
        let params ={
          unionId:this.userId,
          offset:0,
          pageSize:20,
        }
        this.axios.get(api.obtainTeacherList,{params: params})
          .then(res =>{
            console.log(res.data.data.resultList,'teacher')
            if (res.data.status == 'suc'){
                if(res.data.data.resultList.length!=0){
                  this.$router.push({path: '/formList', query: {type: this.type}});
                }else{
                  this.axios.get(api.obtainStudentList,{params: params})
                    .then(res =>{
                      console.log(res.data.data.resultList,'student')
                      if (res.data.status == 'suc'){
                        setTimeout(res=>{
                          Indicator.close()
                        },1000)
                        if(res.data.data.resultList.length!=0){
                          this.$router.push({path: '/formList', query: {type: this.type}});
                        }else{
                          this.$router.push({path: '/form', query: {type: this.type}});
                        }
                      }else{
                        alert(res.msg)
                      }
                    })
                }
            }else{
              alert(res.msg)
            }
          })
      }
    }
  }
</script>

<style scoped lang="less">
  img{
    width: 100%;
    display: block;
  }
  .box{
    background: #b8c9c3;
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
  }
  .buttonBox{
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    bottom: 36%;
    margin: auto;
    height: 100px;
    img{
      width: 50%;
      margin: 0 auto;
      padding: 15px 0;
    }
  }
</style>

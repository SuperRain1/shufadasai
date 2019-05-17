<template>
  <div class="box">
    <div class="list-box">
      <p>我的报名列表</p>
      <div class="list">
        <div>
          <h3>姓名</h3>
          <h3>项目</h3>
          <h3>身份</h3>
        </div>
        <div v-for="item in arr"  @click="goFormDetail(item.vocation,item.studentId,item.teacherId)">
          <span>{{item.name}}</span>
          <span>{{item.typeName}}</span>
          <span>{{item.vocation}}</span>
        </div>
      </div>
      <div class="btn">
        <div>
          <img src="./img/icon21.png" @click="goForm(type)">
          <img src="./img/icon22.png" alt="" @click="showCourse">
        </div>
        <img src="./img/icon23.png" alt="" @click="showDown">
      </div>
    </div>
    <div class="down" v-show="down || course" @click.stop="downLoad"></div>
    <div class="downForm" v-show="down">
      <img src="./img/icon26.png" alt="">
      <input v-model="email" type="text" placeholder="请输入接收邮件的邮箱">
      <span @click="spendEmail">确定</span>
    </div>
    <div class="course" v-show="course">
      <img src="./img/icon25.png" alt="">
    </div>
    <!--<div class="weui-cells__title">学生的报名列表</div>-->
    <!--<div class="weui-cells">-->
      <!--<a class="weui-cell weui-cell_access" v-for="item in studentList" @click="goFormDetail(0,item.id)" href="javascript:;">-->
        <!--<div class="weui-cell__bd">-->
          <!--<p>{{item.name}}</p>-->
        <!--</div>-->
        <!--<div class="weui-cell__ft">-->
        <!--</div>-->
      <!--</a>-->
      <!--<p v-if="studentList.length==0" class="weui-cell">无 </p>-->
    <!--</div>-->
    <!--<div class="weui-cells__title">教师的报名列表</div>-->
    <!--<div class="weui-cells">-->
      <!--<a class="weui-cell weui-cell_access" v-for="item in teacherList" @click="goFormDetail(2,item.id)" href="javascript:;">-->
        <!--<div class="weui-cell__bd">-->
          <!--<p>{{item.name}}</p>-->
        <!--</div>-->
        <!--<div class="weui-cell__ft">-->
        <!--</div>-->
      <!--</a>-->
      <!--<p v-if="teacherList.length==0" class="weui-cell">无 </p>-->
    <!--</div>-->
    <!--<a href="javascript:;" class="newBtn weui-btn weui-btn_primary" @click="goForm(type)">新增报名人员</a>-->
  </div>
</template>

<script>
  import api from '@/constant/api.js'
  import {Indicator} from 'mint-ui'
  import qs from 'qs'
  export default {
    data () {
      return {
        userId:'',
        arr:[],
        type:'',
        down:false,
        course:false,
        email:'',
      }
    },
    created(){
      Indicator.open({
        text: 'Loading...',
        spinnerType: 'snake'
      });
      this.userId = localStorage.getItem("userId")
      this.obtainList();
    },
    mounted () {
      var obj = this.$route.query;
      // console.log(obj)
      this.type = obj.type;
    },
    methods: {
      goForm(type){
        this.$router.push({path: '/form', query: {type: this.type}});
      },
      showCourse(){
        this.course = true
      },
      showDown(){
        this.down = true
      },
      downLoad(){
        this.down = false
        this.course = false
        console.log(1111)

      },
      spendEmail(){
        Indicator.open({
          text: 'Loading...',
          spinnerType: 'snake'
        });
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(reg.test(this.email)){
          let params ={
            unionId:this.userId,
            email:this.email
          }
          this.axios.get(api.downloadWorks,{params: params})
            .then(res =>{
              if (res.data.status == 'suc'){
                console.log(res.data)
                Indicator.close()
                alert('报名表已发送到您的邮箱！')
                this.down = false
              }else{
                Indicator.close()
                alert(res.msg)
              }
            })
        }else{
          alert("邮箱格式不正确");
        }

      },
      obtainList(){
        let params ={
          unionId:this.userId,
        }
        this.axios.get(api.getWorksByLoginUser,{params: params})
          .then(res =>{
            console.log(res.data,'list')
            if (res.data.status == 'suc'){
              this.arr = res.data.list
              Indicator.close()
            }else{
              alert(res.msg)
            }
          })
      },
      goFormDetail(vocation,studentId,teacherId){
        let id;
        if(vocation=='学生'){
          id = studentId
          this.$router.push({path: '/formDetail', query: {type: 0,id:id}});
        }else{
          id = teacherId
          this.$router.push({path: '/formDetail', query: {type: 2,id:id}});
        }

      },
    }
  }
</script>

<style scoped lang="less">
  .box{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:#b8c9c3 url("./img/icon17.jpg") no-repeat center center;
    background-size: 100%;
  }
  .list-box{
    position: absolute;
    width: 80%;
    top: 18%;
    bottom: 18%;
    left: 0;
    right: 0;
    margin: auto;
    p{
      text-align: center;
      font-size: 22px;
    }
    .list{
      height: 70%;
      overflow: auto;
      margin-top: 8px;
      div{
        display: flex;
        margin-top: 3px;
      }
      h3{
        font-size: 20px;
        flex: 1;
        text-align: center;
      }
      span{
        font-size: 16px;
        flex: 1;
        text-align: center;
      }
    }
  }
  .btn{
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    overflow: hidden;
    width: 80%;
    margin: auto;
    div img:first-child{
      width: 48%;
      float: left;
    }
    div img:last-child{
      width: 48%;
      float: right;
    }
    img{
      width: 100%;
      padding-bottom: 10px;
    }
  }
  .down {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .downForm{
      position: fixed;
      top: 0;
      width: 100%;
      img{
        position: relative;
        width: 92%;
        margin: 100px auto 0;
        display: block;
      }
      input{
        top: 178px;
        position: absolute;
        width: 70%;
        left: 15%;
        border: 1px solid #e5e5e5;
        height: 30px;
        padding-left: 10px;
        display: block;
      }
      span{
        position: absolute;
        top: 220px;
        margin: auto;
        right: 0;
        left: 0;
        text-align: center;
        line-height: 30px;
        display: block;
        color: #ffffff;
        background: #b8c9c3;
        width: 80px;
        height: 30px;
      }
  }
  .course{
    position: fixed;
    img{
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      display: block;
      margin: auto;
      width: 320px;
      height: 320px;
    }
  }
</style>

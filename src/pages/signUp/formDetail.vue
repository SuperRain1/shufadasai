<template>
    <div class="formBox">
      <div class="weui-cells">
        <div class="weuiBox">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <div class="weui-uploader">
              <div class="weui-uploader__bd" style="position: relative;">
                <ul class="weui-uploader__files">
                  <img style="display: block" class="picture" :src="user.profileUrl">
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">参赛编号：</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" v-model="num" type="text" readonly>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">姓名：</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" v-model="user.name" type="text" readonly>
          </div>
        </div>
        <!--<div class="weui-cell">-->
          <!--<div class="weui-cell__hd"><label class="weui-label">性别</label></div>-->
          <!--<div class="weui-cell__bd">-->
            <!--<input class="weui-input" v-if="user.gender==1" value="男" type="text" readonly>-->
            <!--<input class="weui-input" v-else value="女" type="text" readonly>-->
          <!--</div>-->
        <!--</div>-->
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">年龄：</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" v-model="user.age" type="text" readonly>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">地区：</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" v-model="user.province+user.city" type="text" readonly>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">所在学校：</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" v-model="user.school" type="text" readonly>
          </div>
        </div>
        <!--<div class="weui-cell" v-if="type!=2">-->
          <!--<div class="weui-cell__hd"><label class="weui-label">班级</label></div>-->
          <!--<div class="weui-cell__bd">-->
            <!--<input class="weui-input" v-model="user.gradeCalsss" type="text" readonly>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="weui-cell">-->
          <!--<div class="weui-cell__hd"><label class="weui-label">邮编</label></div>-->
          <!--<div class="weui-cell__bd">-->
            <!--<input class="weui-input" v-model="user.postcode" type="text" readonly>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="weui-cell">-->
          <!--<div class="weui-cell__hd"><label class="weui-label">联系地址</label></div>-->
          <!--<div class="weui-cell__bd">-->
            <!--<input class="weui-input" v-model="user.address" type="text" readonly>-->
          <!--</div>-->
        <!--</div>-->
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">联系电话：</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" v-model="user.phone" type="text" readonly>
          </div>
        </div>
        <!--<div class="weui-cell eMail">-->
          <!--<div class="weui-cell__hd"><label class="weui-label">邮箱</label></div>-->
          <!--<div class="weui-cell__bd">-->
            <!--<input class="weui-input" v-model="user.mail" type="text" readonly>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="weui-cell">-->
          <!--<div class="weui-cell__bd">-->
            <!--<div class="weui-uploader">-->
              <!--<div class="weui-uploader__hd">-->
                <!--<p class="weui-uploader__title">个人照片</p>-->
              <!--</div>-->
              <!--<div class="weui-uploader__bd" style="position: relative;">-->
                <!--<ul class="weui-uploader__files">-->
                  <!--<img class="picture" :src="user.profileUrl">-->
                <!--</ul>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <div v-if="works" v-for="(item,index) in works">
          <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">参赛作品名称：</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" v-model="item.name" type="text" readonly>
            </div>
          </div>
          <div class="weui-cell" v-if="type!=2">
            <div class="weui-cell__hd"><label class="weui-label">指导教师姓名：</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" v-model="item.teacher" type="text" readonly>
            </div>
          </div>
          <div class="weui-cell" v-if="type!=2">
            <div class="weui-cell__hd"><label class="weui-label">指导教师电话：</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" v-model="item.teacherPhone" type="text" readonly>
            </div>
          </div>
          <div class="weui-cell" v-if="type!=2">
            <div class="weui-cell__hd"><label class="weui-label">指导教师单位：</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" v-model="item.teacherOffice" type="text" readonly>
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">参赛项目：</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" v-if="item.groupType==1" value="小学硬笔" type="text" readonly>
              <input class="weui-input" v-if="item.groupType==2" value="小学软笔" type="text" readonly>
              <input class="weui-input" v-if="item.groupType==3" value="中学硬笔" type="text" readonly>
              <input class="weui-input" v-if="item.groupType==4" value="中学软笔" type="text" readonly>
              <input class="weui-input" v-if="item.groupType==5" value="教师硬笔" type="text" readonly>
              <input class="weui-input" v-if="item.groupType==6" value="教师毛笔" type="text" readonly>
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">参赛字体：</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" v-if="item.font==1" value="楷书" type="text" readonly>
              <input class="weui-input" v-if="item.font==2" value="行书" type="text" readonly>
              <input class="weui-input" v-if="item.font==3" value="隶书" type="text" readonly>
              <input class="weui-input" v-if="item.font==4" value="其他" type="text" readonly>
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <div class="weui-uploader">
                <div class="weui-uploader__hd">
                  <p class="weui-uploader__title">参赛作品：</p>
                </div>
                <div class="weui-uploader__bd">
                  <ul class="weui-uploader__files">
                    <template v-for="img in item.url">
                      <img class="picture" style="border-radius: 0;margin-right: 5px" :src="img">
                    </template>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--<a href="javascript:;" v-show="!newWork" class="weui-btn weui-btn_plain-primary" @click="creatNewWork">新增参赛作品</a>-->

        <!--<a href="javascript:;" class="weui-btn weui-btn_primary">提交</a>-->
        <!--<div v-show="newWork">-->
          <!--<div data-v-1604758e="" class="weui-cells__title" style="padding: 20px 0px; text-align: center;">新增参赛作品</div>-->
          <!--<div class="weui-cell">-->
            <!--<div class="weui-cell__hd"><label class="weui-label">作品名称<i>*</i></label></div>-->
            <!--<div class="weui-cell__bd">-->
              <!--<input class="weui-input" v-model="newWorkName" type="text" placeholder="请输入作品名称">-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="weui-cell" v-if="type ==0||type==1">-->
            <!--<div class="weui-cell__hd"><label class="weui-label">指导教师<i>*</i></label></div>-->
            <!--<div class="weui-cell__bd">-->
              <!--<input class="weui-input" v-model="newTeacherName" type="text" placeholder="请输入指导教师的姓名">-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="weui-cell" v-if="type ==0||type==1">-->
            <!--<div class="weui-cell__hd"><label class="weui-label">教师电话<i>*</i></label></div>-->
            <!--<div class="weui-cell__bd">-->
              <!--<input class="weui-input" v-model="newTeacherPhone" type="text" placeholder="请输入指导教师的联系电话">-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="weui-cell" v-if="type == 2">-->
            <!--<div class="weui-cell__hd"><label class="weui-label">单位名称<i>*</i></label></div>-->
            <!--<div class="weui-cell__bd">-->
              <!--<input class="weui-input" type="text" placeholder="请输入您的单位名称">-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="weui-cell weui-cell_select weui-cell_select-after">-->
            <!--<div class="weui-cell__hd">-->
              <!--<label for="select1" class="weui-label">参赛项目<i>*</i></label>-->
            <!--</div>-->
            <!--<div class="weui-cell__bd">-->
              <!--<select class="weui-select" name="select1" v-model="newGroupType">-->
                <!--<option v-if="type == 0" value="1" selected="selected">小学硬笔</option>-->
                <!--<option v-if="type == 0" value="2">小学软笔</option>-->
                <!--<option v-if="type == 1" value="3" selected="selected">中学硬笔</option>-->
                <!--<option v-if="type == 1" value="4">中学软笔</option>-->
                <!--<option v-if="type == 2" value="5" selected="selected">硬笔</option>-->
                <!--<option v-if="type == 2" value="6">毛笔</option>-->
              <!--</select>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="weui-cell weui-cell_select weui-cell_select-after">-->
            <!--<div class="weui-cell__hd">-->
              <!--<label for="select2" class="weui-label">参赛字体<i>*</i></label>-->
            <!--</div>-->
            <!--<div class="weui-cell__bd">-->
              <!--<select class="weui-select" name="select2" v-model="newFont">-->
                <!--<option value="1" v-show="cjGroupType!=newGroupType||cjFont!=1">楷书</option>-->
                <!--<option value="2" v-show="cjGroupType!=newGroupType||cjFont!=2">行书</option>-->
                <!--<option value="3" v-show="cjGroupType!=newGroupType||cjFont!=3">隶书</option>-->
                <!--<option value="4" v-show="cjGroupType!=newGroupType||cjFont!=4">其他</option>-->
              <!--</select>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="weui-cell" id="uploader">-->
            <!--<div class="weui-cell__bd">-->
              <!--<div class="weui-uploader">-->
                <!--<div class="weui-uploader__hd">-->
                  <!--<p class="weui-uploader__title">作品上传<i>*</i></p>-->
                  <!--<div class="weui-uploader__info"><span>{{imgNub}}</span>/5</div>-->
                <!--</div>-->
                <!--<div class="weui-uploader__bd">-->
                  <!--<ul class="weui-uploader__files" id="uploaderFiles">-->
                    <!--<div v-for="(item,index) in images" style="position: relative;float: left;">-->
                      <!--<li class="weui-uploader__file"  :style="'backgroundImage:url('+item.src+');'"></li>-->
                      <!--<img class="closeImg" src="../../assets/closeImg.png" @click="deleteImg(index)">-->
                    <!--</div>-->
                  <!--</ul>-->
                  <!--<div class="weui-uploader__input-box">-->
                    <!--<input id="uploaderInput" @click="maxImgNub(5)" @change="update" class="weui-uploader__input" type="file" accept="image/*" multiple="" />-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<p class="warning">注意：请仔细填写报名表，提交成功后不可修改。</p>-->
          <!--<a href="javascript:;" class="weui-btn weui-btn_primary" @click="newForm">提交</a>-->
        <!--</div>-->
        </div>

      </div>
  </div>
</template>

<script>
  import api from '@/constant/api.js'
  import {Indicator} from 'mint-ui'

  export default {
    props: {},
    data(){
      return{
        picTx:false,
        num:'',
        picValue:'',
        userId:'',//用户ID
        type:1,
        id:'',
        user:'',
        works:[],
        newWork:false,
        imgNub:0,//已上传的作品数量
        maxImg:1,//最大上传数量
        uploadImgBox:[],
        headerImage:'',
        headerImageBase:'',//上传的头像的key
        showUrl:'',
        domain:'',
        files:'',
        images:[],//上传的作品图片；
        imagesBase:[],
        cjGroupType:9,
        cjFont:9,

        newWorkName:'',
        newTeacherName:'',
        newTeacherPhone:'',
        newTeacherOffice:'',
        newGroupType:'',
        newFont:'',
      }
    },
    created(){
      this.userId = localStorage.getItem("userId")
      this.domain = 'yuenr-oss';
      this.showUrl = 'http://static.qiniu.yuenr.com/';
      // var host = (window.location && (window.location.hostname.search('xuebuapp.com') < 0));
      // if(host){
      //   this.domain = 'yuenr-oss-test';
      //   this.showUrl = 'http://oa6vgpw61.bkt.clouddn.com/';
      // } else {
      //   this.domain = 'yuenr-oss'; //七牛的地址,有可能会改变,需要修改
      //   this.showUrl = 'http://7xtd8e.com1.z0.glb.clouddn.com/';
      // }
      var obj = this.$route.query;
      console.log(obj)
      this.type = obj.type;
      this.id = obj.id;
      this.init()
    },
    mounted() {
      this.userId = localStorage.getItem("userId")
    },
    methods:{
      init(){
        console.log(this.type,this.id)
        if(this.type == 2){//教师
          this.axios.get(api.teacherWorks,{params:{teacherId:this.id}})
            .then(res =>{
              console.log(res.data,'jiaoshi')
              this.user = res.data.user
              let works = res.data.data
              this.num = res.data.data[0].num
              works.forEach(item => {
                item.url = item.url.split('|')
              })
              this.works = works
              if(this.works.length!=0){
                this.cjGroupType = works[0].groupType
                this.cjFont = works[0].font
              }
              if(this.works.length>=2){
                this.newWork = true;
              }
            })
        }else{//学生
          this.axios.get(api.studentWorks,{params:{studentId:this.id}})
            .then(res =>{
              console.log(res.data,'xuesheng')
              this.user = res.data.user
              let works = res.data.data
              this.num = res.data.data[0].num
              works.forEach(item => {
                item.url = item.url.split('|')
              })
              this.works = works
              if(this.works.length!=0){
                this.cjGroupType = works[0].groupType
                this.cjFont = works[0].font
              }
              if(this.works.length>=2){
                this.newWork = true;
              }
            })
        }
      },
      deleteImg(index){
        console.log(index)
        let newImgBase = this.imagesBase
        let newImg = this.images
        newImg.splice(index,1)
        newImgBase.splice(index,1)
        this.images = newImg
        this.imagesBase = newImgBase
      },
      newForm(){
        Indicator.open({
          text: '提交中...',
          spinnerType: 'snake'
        });
        let params={
          font:parseInt(this.newFont),
          groupType:parseInt(this.newGroupType),
          url:this.imagesBase.join('|'),
          name:this.newWorkName
        }
        console.log(params)
        return
        if(this.type==2){//教师
          params.teacherId = parseInt(this.id)
          console.log(params,'教师')
          let isHaveNull = Object.values(params);//获取对象中的值
          if(isHaveNull.indexOf('')>-1){
            setTimeout(res=>{
              Indicator.close();
            },1000)
            alert('请确认表单是否全部填写完成')
            return false
          }else {
            this.axios.post(api.createTeacherWorks,params)
              .then( res =>{
                console.log(res.data)
                if(res.data.status == 'suc'){
                  setTimeout(res=>{
                    Indicator.close();
                  },1000)
                  this.$router.replace({path:'/success'})
                }else{
                  alert(res.data.msg+',请联系管理员')
                }
              })
          }
        }else{//学生
          params.studentId = parseInt(this.id);
          params.teacher = this.newTeacherName
          params.teacherOffice = this.newTeacherOffice
          params.teacherPhone = this.newTeacherPhone
          console.log(params,'学生')
          let isHaveNull = Object.values(params);//获取对象中的值
          if(isHaveNull.indexOf('')>-1){
            setTimeout(res=>{
              Indicator.close();
            },1000)
            alert('请确认表单是否全部填写完成')
            return false
          }else {
            this.axios.post(api.createStudentWorks,params)
              .then( res =>{
                console.log(res.data)
                if(res.data.status == 'suc'){
                  setTimeout(res=>{
                    Indicator.close();
                  },1000)
                  this.$router.replace({path:'/success'})
                }else{
                  alert(res.data.msg+',请联系管理员')
                }
              })
          }
        }
        setTimeout(res=>{
          Indicator.close();
        },1000)

      },
      creatNewWork(){
        this.newWork = true;
        console.log(this.cjFont,this.cjGroupType)
      },
      maxImgNub(nub){
        //修改最大上传图片的数量
        this.maxImg = nub
      },
      update(e){
        console.log(e)
        var qs = require('qs');
        let file = e.target.files[0];
        let d = new Date();
        let type = file.name.split('.');
        let tokenParem = {
          'putPolicy':'{\"name\":\"$(fname)\",\"size\":\"$(fsize)\",\"w\":\"$(imageInfo.width)\",\"h\":\"$(imageInfo.height)\",\"hash\":\"$(etag)\"}',
          'key':'calligraphy/'+d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate()+'/'+d.valueOf()+'.'+type[type.length-1],
          'bucket':this.domain,
        };
        let param = new FormData(); //创建form对象
        param.append('key',tokenParem.key);
        param.append('chunk','0');//断点传输
        param.append('chunks','1');
        param.append('file',file,file.name)
        console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        };
        this.axios.post('http://api.xuebuapp.com/yuenr/qiniu/uploadToken',qs.stringify(tokenParem))
          .then(response=>{
            this.token = response.data.uploadToken;
            param.append('token',this.token);
            if(this.images.length>4){
              alert('不能超过5张');
              return;
            }
            this.uploading(param,config,file.name);
            return;
          })
      },
      uploading(param,config,pathName){
        this.axios.post('http://upload.qiniup.com/',param,config)
          .then(response=>{
            console.log(response.data);
            let localArr = this.images.map((val,index,arr)=>{
              return arr[index].localSrc;
            })
            if(!~localArr.indexOf(pathName)){
              if(this.maxImg == 1){//如果是头像上传
                this.picTx = true;
                this.$refs.picInput.style='position:absolute;top:0;opacity:0;'
                this.headerImage = this.showUrl+response.data.key
                this.headerImageBase = response.data.key
              }else {
                this.images.push({'src':this.showUrl+response.data.key,'localSrc':pathName});
                this.imagesBase.push(response.data.key);
                this.imgNub = this.imagesBase.length
              }
              console.log(this.images,1,this.imagesBase,2,this.headerImageBase)
            }else{
              alert('已上传该图片');
            }
          })
      },

    }
  }
</script>

<style scoped lang="less">
  .weui-label i,.weui-uploader__title i{
    color: red;
    font-style: normal;
    font-size: 10px;
  }
  .formBox{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("./img/icon17.jpg")no-repeat center center;
    background-size: cover;
  }
  .weui-cell{
    padding: 12px 15px;
  }
  .weui-cells{
    position: absolute;
    background: none;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 92%;
    overflow: auto;
    right: 0;
    .weuiBox{
      width: 80%;
      height: 70%;
      margin: 27% auto 0;
      overflow: auto;
    }
  }
  .region-popup{
    width: 100%;
  }
  .cityButton{
    width: 100%;
    height: 40px;
    p{
      color: #09BB07;
      font-size: 16px;
      float: right;
      padding-right: 8px;
      line-height: 40px;
    }
  }
  .picture {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 6px auto 0;
  }
  #upload{
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .next-btn{
    display: block;
    width: 90%;
    margin: 0 auto;
    height: 50px;
    padding-top: 20px;
    background: none;
    border: none;
    img{
      height: 30px;
      display: block;
      margin: 0 auto;
    }
  }
  .closeImg{
    position: absolute;
    top: 4px;
    right: -4px;
    width: 22px;
    height: 22px;
    display: block;
  }
  .weui-uploader__input-box,.weui-uploader__file{
    margin: 9px 0 0 8px!important;
  }
  .weui-uploader__bd {
    margin-top: -4px!important;
    margin-left: -8px!important;
  }
  .eMail:after{
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #e5e5e5;
    color: #e5e5e5;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    left: 15px;
    z-index: 2;
  }
  .warning{
    font-size: 12px;
    color: #aba8a8;
    padding-left: 15px;
    padding-top: 10px;
    display: block;
    margin: 0 auto;
  }
  .tx{
    width:75px;
    height: 75px;
    margin: 6px auto 0;
    background: #fff url("./img/icon19.png")no-repeat center center;
    background-size: 70%;
    border-radius: 50%;
  }
</style>

<template>
    <div>
      <div class="formBox">
        <div class="weui-cells">
          <div class="weuiBox">
            <div class="weui-cell">
              <div class="weui-cell__bd">
                <div class="weui-uploader">
                  <div class="weui-uploader__bd" style="position: relative;">
                    <ul class="weui-uploader__files">
                      <div class="picture" v-show="picTx" :style="'backgroundImage:url('+headerImage+');'"></div>
                    </ul>
                    <div class="" ref="picInput" class="tx">
                      <input type="file" id="upload" accept="image/*" @click="maxImgNub(1)" @change="update">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="weui-cell">
              <div class="weui-cell__hd"><label class="weui-label">姓名<i>*</i></label></div>
              <div class="weui-cell__bd">
                <input class="weui-input" v-model="fName" type="text" placeholder="请输入姓名">
              </div>
            </div>
            <!--<div class="weui-cell weui-cell_select weui-cell_select-after">-->
              <!--<div class="weui-cell__hd">-->
                <!--<label for="sex" class="weui-label">性别<i>*</i></label>-->
              <!--</div>-->
              <!--<div class="weui-cell__bd">-->
                <!--<select class="weui-select" v-model="fGender" name="sex">-->
                  <!--<option value="1" selected="selected">男</option>-->
                  <!--<option value="0">女</option>-->
                <!--</select>-->
              <!--</div>-->
            <!--</div>-->
            <div class="weui-cell">
              <div class="weui-cell__hd"><label class="weui-label">年龄<i>*</i></label></div>
              <div class="weui-cell__bd">
                <input class="weui-input" v-model="fAge" type="number" placeholder="请输入年龄">
              </div>
            </div>
            <div class="weui-cell">
              <div class="weui-cell__hd"><label class="weui-label">地区<i>*</i></label></div>
              <div class="weui-cell__bd">
                <input type="text" class="weui-input" placeholder="请选择地址" v-model="region" maxlength="80" readonly="readonly" @click="showAddressPicker" />
              </div>
            </div>
            <mt-popup v-model="regionVisible" position="bottom" class="region-popup">
              <div class="cityButton">
                <p @click="closeCity">确定</p>
              </div>
              <mt-picker :slots="myAddressSlots" valueKey="name" @change="addressChange"></mt-picker>
            </mt-popup>
            <div class="weui-cell" v-if="type ==0||type==1">
              <div class="weui-cell__hd"><label class="weui-label">所在学校<i>*</i></label></div>
              <div class="weui-cell__bd">
                <input class="weui-input" v-model="fSchool" type="text" placeholder="请输入学校名称">
              </div>
            </div>
            <!--<div class="weui-cell" v-if="type ==0||type==1">-->
              <!--<div class="weui-cell__hd"><label class="weui-label">班级<i>*</i></label></div>-->
              <!--<div class="weui-cell__bd">-->
                <!--<input class="weui-input" v-model="fGradeCalsss" type="text" placeholder="例如：二年级、初一">-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="weui-cell">-->
              <!--<div class="weui-cell__hd"><label class="weui-label">邮编<i>*</i></label></div>-->
              <!--<div class="weui-cell__bd">-->
                <!--<input class="weui-input" v-model="fPostcode" type="number" placeholder="请输入邮编">-->
              <!--</div>-->
            <!--</div>-->
            <div class="weui-cell" v-if="type == 2">
              <div class="weui-cell__hd"><label class="weui-label">单位名称<i>*</i></label></div>
              <div class="weui-cell__bd">
                <input class="weui-input" v-model="fSchool" type="text" placeholder="请输入您的单位名称">
              </div>
            </div>
            <!--<div class="weui-cell">-->
              <!--<div class="weui-cell__hd"><label class="weui-label">联系地址<i>*</i></label></div>-->
              <!--<div class="weui-cell__bd">-->
                <!--<input class="weui-input" v-model="fAddress" type="text" placeholder="请输入联系地址">-->
              <!--</div>-->
            <!--</div>-->
            <div class="weui-cell">
              <div class="weui-cell__hd"><label class="weui-label">联系电话<i>*</i></label></div>
              <div class="weui-cell__bd">
                <input class="weui-input" v-model="fPhone" type="number" placeholder="请输入联系电话">
              </div>
            </div>
            <!--<div class="weui-cell eMail">-->
              <!--<div class="weui-cell__hd"><label class="weui-label">邮箱<i>*</i></label></div>-->
              <!--<div class="weui-cell__bd">-->
                <!--<input class="weui-input" v-model="fMail" type="text" placeholder="请输入邮箱">-->
              <!--</div>-->
            <!--</div>-->

            <a href="javascript:;" v-show="!newForm" class="next-btn " @click="nextBtn">
              <img src="./img/icon20.png" alt="">
            </a>
            <div v-show="newForm">
              <div class="weui-cell" v-if="type ==0||type==1">
                <div class="weui-cell__hd"><label class="weui-label">指导教师<i>*</i></label></div>
                <div class="weui-cell__bd">
                  <input class="weui-input" type="text" v-model="teacherName" placeholder="请输入指导教师的姓名">
                </div>
              </div>
              <div class="weui-cell" v-if="type ==0||type==1">
                <div class="weui-cell__hd"><label class="weui-label">联系电话<i>*</i></label></div>
                <div class="weui-cell__bd">
                  <input class="weui-input" type="text" v-model="teacherPhone" placeholder="请输入指导教师的联系电话">
                </div>
              </div>
              <div class="weui-cell" v-if="type==0||type==1">
                <div class="weui-cell__hd"><label class="weui-label">单位名称<i></i></label></div>
                <div class="weui-cell__bd">
                  <input class="weui-input" type="text" v-model="teacherCompany" placeholder="请输入指导教师的单位名称">
                </div>
              </div>
              <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                  <label for="select1" class="weui-label">参赛项目<i>*</i></label>
                </div>
                <div class="weui-cell__bd">
                  <select class="weui-select" name="select1" v-model="fGroupType">
                    <option v-if="type == 0" value="1" selected="selected">小学硬笔</option>
                    <option v-if="type == 0" value="2">小学毛笔</option>
                    <option v-if="type == 0" value="3" >中学硬笔</option>
                    <option v-if="type == 0" value="4">中学毛笔</option>
                    <option v-if="type == 2" value="5" selected="selected">硬笔</option>
                    <option v-if="type == 2" value="6">毛笔</option>
                  </select>
                </div>
              </div>
              <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                  <label for="select2" class="weui-label">参赛字体<i>*</i></label>
                </div>
                <div class="weui-cell__bd">
                  <select class="weui-select" name="select2" v-model="fFont">
                    <option value="1" selected="selected">楷书</option>
                    <option value="2">行书</option>
                    <option value="3">隶书</option>
                    <option value="4">其他</option>
                  </select>
                </div>
              </div>
              <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">作品名称<i>*</i></label></div>
                <div class="weui-cell__bd">
                  <input class="weui-input" type="text" v-model="zpName" placeholder="请输入作品名称">
                </div>
              </div>
              <div class="weui-cell" id="uploader">
                <div class="weui-cell__bd">
                  <div class="weui-uploader">
                    <div class="weui-uploader__hd">
                      <p class="weui-uploader__title">作品上传<i>*</i></p>
                      <div class="weui-uploader__info"><span>{{imgNub}}</span>/5</div>
                    </div>
                    <div class="weui-uploader__bd">
                      <ul class="weui-uploader__files" id="uploaderFiles">
                        <div v-for="(item,index) in images" style="position: relative;float: left;">
                          <li class="weui-uploader__file"  :style="'backgroundImage:url('+item.src+');'"></li>
                          <img class="closeImg" src="../../assets/closeImg.png" @click="deleteImg(index)">
                        </div>
                      </ul>
                      <div class="weui-uploader__input-box">
                        <input id="uploaderInput" @click="maxImgNub(5)" @change="update" class="weui-uploader__input" type="file" accept="image/*" multiple="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="warning">注意：请仔细填写报名表，提交成功后不可修改。</p>
              <a href="javascript:;"  class="next-btn " @click="submitBtn">
                <img src="./img/icon24.png" alt="">
              </a>
            </div>
          </div>

        </div>
      </div>
     </div>
</template>

<script>
  import { Picker,Popup,Indicator,Toast} from 'mint-ui'
  import api from '@/constant/api.js'
  import myaddress from '@/assets/city.json'     //引入省市区数据
  import qs from 'qs'
    export default {
      components: {
        'mt-picker': Picker,
        'mt-popup':Popup,
      },
      props: {},
      data(){
          return{
            fName:'',
            fAge:'',
            fGender:'',
            fSchool:'',
            fGradeCalsss:'',
            fPostcode:'',
            fAddress:'',
            fPhone:'',
            fMail:'',
            zpName:'',
            fFont:'',
            fGroupType:'',
            teacherCompany:'',
            teacherName:'',
            teacherPhone:'',


            picTx:false,
            picValue:'',
            newForm:false,//控制下面作品上传是否显示
            userId:"",//用户ID
            type:0,
            region:'北京市东城区',//二级地址
            province:'北京市',//省
            city:'东城区',//市
            provinceCode:'',//省级代码
            cityCode:'', //市级代码

            regionVisible:false,//弹出框是否可见
            regionInit:false,
            myAddressSlots: [
              {
                flex: 1,
                defaultIndex: 0,
                values: this.getProvinceArr(), //省份数组
                className: 'slot1',
                textAlign: 'center'
              }, {
                divider: true,
                content: '-',
                className: 'slot2'
              }, {
                flex: 1,
                values: this.getCityArr("北京市"),
                className: 'slot3',
                textAlign: 'center'
              },
            ],
            myAddressProvince:'省',
            myAddressCity:'市',

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
            studentId:'',
            teacherId:'',
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
      },
      mounted() {
        var obj = this.$route.query;
        // console.log(obj)
        this.type = obj.type;
      },
      methods:{
        nextBtn(){
          let params = {
            // address: this.fAddress,//联系地址
            age: parseInt(this.fAge),//年龄
            city: this.city,//城市
            name: this.fName,//姓名
            phone: this.fPhone,//联系电话
            profileUrl: this.headerImageBase,//头像
            province: this.province,//省份
            school: this.fSchool,//学校或者单位
            unionId: this.userId
          };

          if(this.type == 2){//教师报名接口
            let isHaveNull = Object.values(params);//获取对象中的值
            if(isHaveNull.indexOf('')>-1){
              alert('请确认表单是否全部填写完成')
              return false
            }else {
              Indicator.open({
                text: 'Loading...',
                spinnerType: 'snake'
              });
              console.log(params,'教师')
              this.axios.post(api.createTeacher,params)
                .then(res => {
                  console.log(res.data)
                  setTimeout(res=>{
                    Indicator.close();
                  },500)
                  if(res.data.status == 'suc'){
                    this.newForm = true;
                    this.teacherId = res.data.teacherId;
                  }else{
                    alert(res.data.msg+',如需帮助请联系管理员')
                  }
                })
            }
          }else{//学生报名接口
            params.type = this.type
            let isHaveNull = Object.values(params);//获取对象中的值
            if(isHaveNull.indexOf('')>-1){
              alert('请确认表单是否全部填写完成')
              return false
            }else {
              Indicator.open({
                text: 'Loading...',
                spinnerType: 'snake'
              });
              console.log(params,'学生')
              this.axios.post(api.createStudent,params)
                .then(res => {
                  console.log(res.data)
                  setTimeout(res=>{
                    Indicator.close();
                  },500)
                  if(res.data.status == 'suc'){
                    this.studentId = res.data.studentId;
                    this.newForm = true
                  }else{
                    alert(res.data.msg+',如需帮助请联系管理员')
                  }
                })
            }
          }
        },
        deleteImg(index){
          let newImgBase = this.imagesBase
          let newImg = this.images
          newImg.splice(index,1)
          newImgBase.splice(index,1)
          this.images = newImg
          this.imagesBase = newImgBase
        },
        submitBtn(){
          Indicator.open({
            text: '提交中...',
            spinnerType: 'snake'
          });
          let params = {
            font:parseInt(this.fFont),
            groupType:parseInt(this.fGroupType),
            url:this.imagesBase.join('|'),
            name : this.zpName
          }
          if(this.type == 2){//教师作品上传
            params.teacherId = parseInt(this.teacherId)
            console.log(params,'教师')
            let isHaveNull = Object.values(params);//获取对象中的值
            if(isHaveNull.indexOf('')>-1){
              setTimeout(res=>{
                Indicator.close();
              },500)
              alert('请确认表单是否全部填写完成')
              return false
            }else {
              this.axios.post(api.createTeacherWorks,params)
                .then( res =>{
                  console.log(res.data)
                  setTimeout(res=>{
                    Indicator.close();
                  },500)
                  if(res.data.status == 'suc'){
                    // this.$router.replace({path:'/success',query:{address:res.data.fileName}})
                    Toast({
                      message: '报名成功',
                      position: 'middle',
                      duration: 2000
                    });
                    setTimeout(()=>{
                      this.$router.replace({path:'/index'})
                    },2000)
                  }else{
                    alert(res.data.msg)
                  }
                })
            }
          }else{//学生作品上传
            params.studentId = parseInt(this.studentId);
            params.teacher = this.teacherName
            params.teacherPhone = this.teacherPhone
            console.log(params,'学生')
            let isHaveNull = Object.values(params);//获取对象中的值
            if(isHaveNull.indexOf('')>-1){
              setTimeout(res=>{
                Indicator.close();
              },1000)
              alert('请确认表单是否全部填写完成')
              return false
            }else {
              params.teacherOffice = this.teacherCompany
              this.axios.post(api.createStudentWorks,params)
                .then( res =>{
                  console.log(res.data)
                  setTimeout(res=>{
                    Indicator.close();
                  },500)
                  if(res.data.status == 'suc'){
                    Toast({
                      message: '报名成功',
                      position: 'middle',
                      duration: 2000
                    });
                    setTimeout(()=>{
                      this.$router.replace({path:'/index'})
                    },2000)
                  }else{
                    alert(res.data.msg)
                  }
                })
            }
          }
        },
        maxImgNub(nub){
          //修改最大上传图片的数量
          this.maxImg = nub
        },
        update(e){
          Indicator.open({
            text: '上传中..',
            spinnerType: 'snake'
          });
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
                Indicator.close();
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
                console.log(this.images,this.imagesBase,this.headerImageBase)
              }else{
                alert('已上传该图片');
              }
              Indicator.close();
            })
        },

        showAddressPicker(){
          this.regionVisible = true;
        },
        closeCity(){
          this.regionVisible = false;
        },
        addressChange(picker, values){
          if (this.regionInit){
            //取值并赋值
            this.region = values[0]["name"] + values[1]["name"] ;
            this.province = values[0]["name"];
            this.city = values[1]["name"];
            this.provinceCode = values[0]["code"];
            this.cityCode = values[1]["code"];
            //给市、县赋值
            picker.setSlotValues(1, this.getCityArr(values[0]["name"]));
          }else {
            this.regionInit = true;
          }
        },
        getProvinceArr() {
          let provinceArr = [];
          myaddress.forEach(function (item) {
            let obj = {};
            obj.name = item.name;
            obj.code = item.code;
            provinceArr.push(obj);
          });
          return provinceArr;
        },
        //遍历json，返回市级对象数组
        getCityArr(province) {
          // console.log("省：" + province);
          let cityArr = [];
          myaddress.forEach(function (item) {
            if (item.name === province) {
              item.children.forEach(function (args) {
                let obj = {};
                obj.name = args.name;
                obj.code = args.code;
                cityArr.push(obj);
              });
            }
          });
          return cityArr;
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
<style>

</style>

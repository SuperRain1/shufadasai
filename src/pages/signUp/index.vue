<template>
    <div>
      <div class="box">
        <div class="aud">
          <audio id='audio' src="/static/1.mp3" loop></audio>
        </div>
        <img v-show="isPlay" class="music musicAn" src="./img/music.png" alt="" @click.stop="musicBtn">
        <img v-show="!isPlay" class="music" src="./img/closeMusic.png" alt="" @click.stop="musicBtn">
        <img src="./img/icon1.jpg" alt="" class="js">
        <img src="./img/icon3.png" @click="goIntroduce" alt="" class="xq">
        <img src="./img/icon2.png" @click="onHide" alt="" class="lw">
        <div class="btn" @click="goLogin">
          <img src="./img/btn.jpg" alt="">
        </div>
      </div>
      <div class="mask" v-show="isShow" @click="onHide">
        <img src="./img/icon12.png" alt="">
      </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        isShow:false,
        isPlay:false,
      }
    },
    mounted(){
      var _this = this
      document.addEventListener('DOMContentLoaded', function () {
        function audioAutoPlay() {
          var audio = document.getElementById('audio');
          audio.play();
          _this.isPlay = true
          document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
            _this.isPlay = true
          }, false);
        }
        audioAutoPlay();
      });
      //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
      function audioAutoPlay() {
        var audio = document.getElementById('audio');
        audio.play();
        _this.isPlay = true
        document.removeEventListener('touchstart',audioAutoPlay);
      }
      document.addEventListener('touchstart', audioAutoPlay);
      this.init()
    },
    methods:{
      init(){
        //记录页面访问记录
        this.axios.get('http://api.xuebuapp.com/yuenr/statistics/pageCount',{params:{page:window.location.href}})
          .then( res =>{
            console.log(res.data)
          })
      },
      musicBtn() {
        let _this = this
        let audio = document.getElementById('audio');
        if (audio !== null) {
          //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
          if (audio.paused) {
            audio.play();//audio.play();// 这个就是播放
            _this.isPlay = true
          } else {
            audio.pause();// 这个就是暂停
            _this.isPlay = false
          }
        }
      },
      goLogin(){
        this.$router.push({path: '/login'});
      },
      goIntroduce(){
        this.$router.push({path: '/introduce'});
      },
      onHide(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped lang="less">
  .box{
    position: relative;
    padding-bottom: 30px;
    width: 100%;
    .js{
      width: 100%;
      display: block;
    }
    .xq{
      display: block;
      position: absolute;
      top: 40%;
      right: 0;
      left: 0;
      margin: auto;
      width: 40%;
    }
    .lw{
      position: fixed;
      right: 5%;
      bottom: 70px;
      display: block;
      width: 60px;
      display: block;
      animation: loop 0.8s linear infinite
    }
    .btn{
      position: fixed;
      bottom: 0;
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
  @keyframes loop {
    0%{
      transform: scale(1);
    }
    50%{
      transform: scale(0.9);
    }
    100%{
      transform: scale(1);
    }
  }
  .mask{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index:10;
    img{
      display: block;
      width: 80%;
      margin: auto;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
  }
  @keyframes imgRotate{
    0% {
      transform:rotate(0deg);
      -webkit-transform:rotate(0deg);
    }
    50% {
      transform:rotate(180deg);
      -webkit-transform:rotate(180deg);
    }
    100% {
      transform:rotate(360deg);
      -webkit-transform:rotate(360deg);
    }
  }
  .musicAn{
    animation:imgRotate 2s linear infinite
  }
  .music{
    width: 30px;
    height: 30px;
    position: fixed;
    top: 3%;
    right: 3%;
    z-index: 10;
  }
</style>

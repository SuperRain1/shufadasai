<template>
    <div>
      <div class="aud">
        <audio id='audio' src="/static/1.mp3" loop></audio>
      </div>
      <img v-show="isPlay" class="music musicAn" src="./img/music.png" alt="" @click.stop="musicBtn">
      <img v-show="!isPlay" class="music" src="./img/closeMusic.png" alt="" @click.stop="musicBtn">
      <div class="menu">
        <a href="javascript:;" @click="goAnchor('#anchor-1')">
          <img src="./img/btn1.png" alt="">
        </a>
        <a href="javascript:;" @click="goAnchor('#anchor-2')">
          <img src="./img/btn2.png" alt="">
        </a>
        <a href="javascript:;" @click="goAnchor('#anchor-3')">
          <img src="./img/btn3.png" alt="">
        </a>
      </div>
      <div class="menu">
        <a href="javascript:;" @click="goAnchor('#anchor-4')">
          <img src="./img/btn4.png" alt="">
        </a>
        <a href="javascript:;" @click="goAnchor('#anchor-5')">
          <img src="./img/btn5.png" alt="">
        </a>
        <a href="javascript:;" @click="goAnchor('#anchor-6')">
          <img src="./img/btn6.png" alt="">
        </a>
      </div>
      <div class="cont" id="anchor-1">
        <img src="./img/icon5.jpg" alt="">
      </div>
      <div class="cont" id="anchor-2">
        <img src="./img/icon6.jpg" alt="">
      </div>
      <div class="cont" id="anchor-3">
        <img src="./img/icon7.jpg" alt="">
      </div>
      <div class="cont" id="anchor-4">
        <img src="./img/icon8.jpg" alt="">
      </div>
      <div class="cont" id="anchor-5">
        <img src="./img/icon9.jpg" alt="">
      </div>
      <div class="cont" id="anchor-6">
        <img src="./img/icon9.1.jpg" alt="">
      </div>
      <div class="cont bottom">
        <a href="https://mp.weixin.qq.com/s/0L-N8Y15CACn35gnsN64Vw">
          <img src="./img/icon10.png" alt="">
        </a>
        <a href="https://mp.weixin.qq.com/s/MwXsvAe3Iv54klFHk35PIQ">
          <img src="./img/icon11.png" alt="">
        </a>
      </div>
      <div class="btn" @click="goLogin">
        <img src="./img/btn.jpg" alt="">
      </div>
    </div>
</template>

<script>
  export default {
    name: "introduce",
    data(){
      return{
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
    },
    methods:{
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
      goAnchor(selector) {
        var anchor = this.$el.querySelector(selector)
        console.log(anchor.offsetTop)
        document.body.scrollTop = anchor.offsetTop
      },
      goLogin(){
        this.$router.push({path: '/login'});
      },
    }
  }
</script>

<style scoped lang="less">

  img{
    width: 100%;
    display: block;
  }
  .cont{
    width: 100%;
    margin-top: 50px;
    img{
      width: 90%;
      margin: 0 auto;
    }
  }
  .menu{
    width: 100%;
    display: flex;
    margin-top: 20px;
    a{
      flex: 1;
      display: block;
      margin: 0 auto;
      img{
        display: block;
        width: 88%;
        margin: 0 auto;
      }
    }
  }
  .btn{
    position: fixed;
    bottom: 0;
    width: 100%;
    img{
      width: 100%;
    }
  }
  .bottom{
    width: 100%;
    padding-bottom: 100px;
    a{
      display: block;
    }
    a:first-child img{
      width: 70%;
    }
    a:last-child{
      margin-top: 20px;
      img{
        width: 60%;
      }
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

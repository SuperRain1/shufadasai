<template>
  <div id="all_user">

    <vueWaterfallEasy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData" height="600px">
      <div slot="waterfall-head">
        <img style="width: 100%;" src="http://cdn.weitoupiao.com/image/2/lvvbdsv1xQaStDTMzqLV_6ikaZ1C/l7dflngdvx3q7jj4.jpg/small">
        <p style="text-align: center;width: 100%;">苏宁易购∣亳州万达店2019届最具人气员工评选</p>
      </div>
      <template slot-scope="props">
        <div class="player_info">
          <div class="title"><i class="tt tt-quanburen"></i>{{props.value.info}}</div>

          <p class="num">{{props.index+1}}票</p>
        </div>
      </template>
    </vueWaterfallEasy>
  </div>
</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'

  export default {
    name: 'app',
    data() {
      return {
        imgsArr: [],
        fetchImgsArr: []
      }
    },
    components: {
      vueWaterfallEasy
    },
    methods: {
      // 假数据
      initImgsArr(n, m) { //num 图片数量
        var arr = []
        for (var i = n; i < m; i++) {
          arr.push({ id:i,src: `./src/assets/images_test/${i + 1}.jpg`, link: 'https://www.baidu.com', info: '一些图片描述文字' })
        }
        return arr
      },

      fetchImgsData() {
        this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
      },

      upLoadTicket(index){ //投票按钮
        console.log(index);
      }
    },
    created() {
      this.imgsArr = this.initImgsArr(0, 5)
      this.fetchImgsArr = this.initImgsArr(5, 10) // 模拟每次请求的新的图片的数据数据
    },

  }

</script>

<template>
  <div class="dynamic_replacement_image">
    <div class="img-wrapper">
      <div v-for="(item,index) in imgs"
        class=""
        :key='index'>
        <img @click='replacement(index)'
          ref="img"
          ondragstart="return false;"
          :src="item"
          alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      top: 0,
      imgs: [
        '/images/js/2018_10_28/images/01.png',
        '/images/js/2018_10_28/images/02.png',
        '/images/js/2018_10_28/images/03.png',
        '/images/js/2018_10_28/images/google_plus.png',
        '/images/js/2018_10_28/images/microblog.png',
        '/images/js/2018_10_28/images/qq.png',
        '/images/js/2018_10_28/images/Twitter.png',
        '/images/js/2018_10_28/images/WeChat.png',
      ],
      key: [37, 38, 39, 40],
    };
  },
  methods: {
    replacement(index) {
      for (let i = 0; i < 3; i++) {
        this.$refs.img[i].src = `/images/js/2018_10_28/images/0${i + 1}.png`;
      }
      this.$nextTick(() => {
        this.$refs.img[index].src = '/images/js/2018_10_28/images/04.png';
      });
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.img-wrapper {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.img-wrapper > div {
  flex: 0 0 100px;
  border: 1px solid;
}

img {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="other" v-show="ifShow">
    <div class="one" v-if="index === 1">
      <div class="left">
        Line 1
      </div>
      <div class="top">
        Line 1
      </div>
    </div>
    <div v-if="index === 2">
      <div class="top">
        Line 2
      </div>
    </div>
    <div v-if="index === 3">
      <div class="top">
        Line 3
      </div>
    </div>
    <div v-if="index === 4">
      <div class="top">
        Line 4
      </div>
      <div class="right">
        Line 5
      </div>
    </div>
    <div v-if="index === 5">
      <div class="left">
        Line 2
      </div>
    </div>
    <div v-if="index === 9">
      <div class="left">
        Line 3
      </div>
    </div>
    <div v-if="index === 13">
      <div class="left">
        Line 4
      </div>
      <div class="bottom">
        Line 6
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      ifShow: Boolean,
      index: Number
    }
  };
</script>
<style lang="less">
  .other {
    position: absolute;
    z-index: 11;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    & > div {
      position: relative;

      & > div {
        position: absolute;

      }

      .top {
        top: -50px;
        left: -20px;
      }

      .left {
        top: -10px;
        left: -75px;
      }
      .bottom {
        top: 89px;
        left: -75px;
      }

      .right {
        top: -50px;
        right: -19px;
        width: 45px;
      }
    }
  }
</style>

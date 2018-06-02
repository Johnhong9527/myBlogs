# picker

```html
<template>
  <div class="my-picker around">
    <transition name="picker-bg">
      <div v-show="showValue" class="my-picker-bg around" @click="showValue = !showValue"></div>
    </transition>
    <transition name="picker-animated" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <div v-show="showValue" class="my-picker-container">
        <div class="top_in">
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "my-picker",
  props: {
    showValue: Boolean,
  },
};
</script>
<style lang="less" scoped>
@import url("../../assets/common.less");
@import url("../../../node_modules/animate.css/animate.min.css");
.my-picker {
  .my-picker-bg {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .my-picker-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45vh;
    background-color: #fff;
  }
}
// 设置动画执行时间
.my-picker-container {
  animation-duration: 250ms;
  animation-timing-function: linear;
}
.my-picker-bg {
  animation-duration: 260ms;
  animation-timing-function: linear;
}
</style>
```
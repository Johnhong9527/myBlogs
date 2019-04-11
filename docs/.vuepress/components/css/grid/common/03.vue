<template>
  <div class="other" v-show="ifShow">
    {{index}}
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
  .other{
    position: absolute;
    z-index: 11;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

  }
</style>
<template>
  <div class="box-19">
    <css-grid-common-grid class="one-19"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-19 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      &.one-19 {
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        justify-items: start;
      }
    }
  }

</style>

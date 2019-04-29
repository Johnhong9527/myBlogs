<template>
  <div class="box-20">
    <css-grid-common-grid class="one-20"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-20 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-20 {
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        align-items: start;
      }
    }
  }

</style>

<template>
  <div class="box-24">
    <css-grid-common-grid class="one-24"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-24 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-24 {
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        justify-content: center;
        align-content: center;
      }
    }
  }

</style>

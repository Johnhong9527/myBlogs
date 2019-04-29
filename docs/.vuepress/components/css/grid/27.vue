<template>
  <div class="box-27">
    <css-grid-common-grid class="one-27"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-27 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-27 {
        grid-template-columns: repeat(3,100px);
        grid-template-rows: repeat(3, 100px);
        justify-content: space-between;
        align-content: space-between;
      }
    }
  }

</style>

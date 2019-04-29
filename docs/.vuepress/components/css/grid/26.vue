<template>
  <div class="box-26">
    <css-grid-common-grid class="one-26"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-26 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-26 {
        grid-template-columns: repeat(3,100px);
        grid-template-rows: repeat(3, 100px);
        justify-content: space-around;
        align-content: space-around;
      }
    }
  }

</style>

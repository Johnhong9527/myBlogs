<template>
  <div class="box-22">
    <css-grid-common-grid class="one-22"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-22 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-22 {
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        justify-content: start;
        align-content: start;
      }
    }
  }

</style>

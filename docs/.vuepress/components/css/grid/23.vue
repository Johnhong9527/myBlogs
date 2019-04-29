<template>
  <div class="box-23">
    <css-grid-common-grid class="one-23"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-23 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-23 {
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        justify-content: end;
        align-content: end;
      }
    }
  }

</style>

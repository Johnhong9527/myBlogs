<template>
  <div class="box">
    <css-grid-common-grid class="one"/>
  </div>
</template>

<style lang="less" scoped>
  @or: /;
  .box{
    padding: 5px;
    background-color: white;
    border: 1px solid black;
  }
  .container {
    &.one {
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px;
      grid-auto-flow: column;

      & > div {
        min-height: 100px;

        &:nth-child(1) {
          grid-column: 1 @or 3;
          grid-row: 1 @or 3;
        }

        &:nth-child(4) {
          grid-column: 3 @or 3;
          grid-row: 2 @or 4;
        }

        &:nth-child(9) {
          grid-column: 1 @or 5;
        }
      }
    }
  }
</style>

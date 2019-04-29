<template>
  <div class="four">
    <span class="text">foo</span>
    <css-grid-common-grid/>
    <span class="text">bar</span>
  </div>
</template>

<style lang="less" scoped>
  @or: /;
  .four {
    .container {
      display: inline-grid;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px;

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


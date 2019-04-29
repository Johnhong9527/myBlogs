<template>
  <div>
    <css-grid-common-grid class="one"/>
  </div>
</template>

<style lang="less" scoped>
  @or: /;
  .container {
    &.one {
      grid-template-columns: 70% 30%;
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

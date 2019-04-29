<template>
  <div>
    <css-grid-common-grid class="one"/>
  </div>
</template>

<style lang="less" scoped>
  @or: /;
  .container {
    &.one {
      grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
      grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];

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

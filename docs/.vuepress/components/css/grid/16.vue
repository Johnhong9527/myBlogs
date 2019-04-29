<template>
  <div class="box-16">
    <css-grid-common-grid class="one-16"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-16 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      &.one-16 {
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-auto-flow: row;

        & > div {
          min-height: 100px;

          &:nth-child(1) {
            grid-column-start: 1;
            grid-column-end: 3;
          }
          &:nth-child(2) {
            grid-column-start: 1;
            grid-column-end: 3;
          }
        }
      }
    }
  }

</style>

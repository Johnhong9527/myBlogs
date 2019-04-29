<template>
  <div class="box-30">
    <css-grid-common-grid class="one-30"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-30 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-30 {
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-auto-rows: 50px;

        div {
          &:nth-child(8) {
            grid-row-start: 4;
            grid-column-start: 2;
          }

          &:nth-child(9) {
            grid-row-start: 5;
            grid-column-start: 3;
          }
        }
      }
    }
  }

</style>

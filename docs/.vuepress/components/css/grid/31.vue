<template>
  <div class="box-31">
    <css-grid-common-grid class="one-31"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-31 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-31 {
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-auto-rows: 100px;

        div {
          &:nth-child(1) {
            grid-column-start: 2;
            grid-column-end: 4;
          }
        }
      }
    }
  }

</style>

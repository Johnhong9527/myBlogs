<template>
  <div class="box-32">
    <css-grid-common-grid class="one-32"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-32 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-32 {
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-auto-rows: 100px;

        div {
          &:nth-child(1) {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;
            grid-row-end: 4;
          }
        }
      }
    }
  }

</style>

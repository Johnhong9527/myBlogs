<template>
  <div class="box-36">
    <css-grid-common-grid class="one-36"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-36 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-36 {
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-auto-rows: 100px;
        /*grid-template-areas: 'a b c' 'd e f' 'g h i';*/

        div {
          &:nth-child(1) {
            grid-row-start: 1;
            grid-column-start: 1;
            grid-row-end: 3;
            grid-column-end: 3;
          }
        }
      }
    }
  }

</style>

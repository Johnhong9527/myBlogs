<template>
  <div class="box-35">
    <css-grid-common-grid class="one-35"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-35 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-35 {
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-auto-rows: 100px;
        grid-template-areas: 'a b c' 'd e f' 'g h i';

        div {
          &:nth-child(1) {
            grid-area: e;
          }
        }
      }
    }
  }

</style>

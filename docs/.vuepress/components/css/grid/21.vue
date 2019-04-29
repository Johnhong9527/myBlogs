<template>
  <div class="box-21">
    <css-grid-common-grid class="one-21"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-21 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-21 {
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        place-items: start end;
      }
    }
  }

</style>

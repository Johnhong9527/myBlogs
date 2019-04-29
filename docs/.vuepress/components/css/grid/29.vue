<template>
  <div class="box-29">
    <css-grid-common-grid class="one-29"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-29 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-29 {
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        place-content: space-around space-evenly;
      }
    }
  }

</style>

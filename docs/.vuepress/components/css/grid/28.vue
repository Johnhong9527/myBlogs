<template>
  <div class="box-28">
    <css-grid-common-grid class="one-28"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-28 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-28 {
        grid-template-columns: repeat(3,100px);
        grid-template-rows: repeat(3, 100px);
        justify-content: space-evenly;
        align-content: space-evenly;
      }
    }
  }

</style>

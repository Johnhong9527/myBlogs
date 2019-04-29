<template>
  <div class="box-25">
    <css-grid-common-grid class="one-25"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-25 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-25 {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        justify-content: stretch;
        align-content: stretch;
      }
    }
  }

</style>

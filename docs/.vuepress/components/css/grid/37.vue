<template>
  <div class="box-37">
    <css-grid-common-grid class="one-37"/>
  </div>
</template>

<style lang="less">
  @or: /;
  .box-37 {
    padding: 5px;
    background-color: white;
    border: 2px solid black;

    .container {
      margin-bottom: 0;

      &.one-37 {
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-auto-rows: 100px;

        div {
          &:nth-child(1) {
            justify-self: start;
          }
        }
      }
    }
  }

</style>

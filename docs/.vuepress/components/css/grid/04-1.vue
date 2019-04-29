<template>
  <div class="four">
    <css-grid-common-grid/>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
  @or: /;
  .four {
    .container {
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px;

      & > div {
        min-height: 100px;

        &:nth-child(1) {
          grid-column: 1 @or 3;
          grid-row: 1 @or 3;
        }

        &:nth-child(4) {
          grid-column: 3 @or 3;
          grid-row: 2 @or 4;
        }

        &:nth-child(9) {
          grid-column: 1 @or 5;
        }
      }
    }
  }

</style>


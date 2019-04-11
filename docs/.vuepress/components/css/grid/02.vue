<template>
  <div class=" two">
    <div class="row">1</div>
    <div class="colums">1</div>
    <div class="container">
      <div v-for="i in 25">
      </div>
    </div>
  </div>
</template>

<style lang="less">
  @or: /;
  @length: 1fr;
  .two {
    position: relative;

    .row, .colums {
      position: absolute;
      background-color: #4365a1;
      color: white;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 20px;

      &:before {
        content: "";
        width: 2px;
        height: 30px;
        background-color: #4365a1;
        display: block;
        position: absolute;
      }
    }

    .row {
      top: 145px;
      left: 20px;

      &:before {
        height: 57px;
        top: -8px;
        transform: rotate(-87deg);
        left: 52px;
      }
    }

    .colums {
      top: 30px;
      left: 180px;

      &:before {
        height: 44px;
        top: 27px;
        transform: rotate(-14deg);
        left: 22px;
      }
    }

    .container {
      padding-top: 100px;
      padding-left: 100px;
      grid-template-columns: repeat(1, 100px 30px 100px 30px 100px);
      grid-template-rows: repeat(1, 50px 30px 50px 30px 50px);

      & > div {
        border: 2px solid #545554;
        min-height: @length;

        &:nth-child(1), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
          background-color: white;
        }

        &:nth-child(2), &:nth-child(6), &:nth-child(7), &:nth-child(8), &:nth-child(9), &:nth-child(10), &:nth-child(12), &:nth-child(17), &:nth-child(22) {
          background-color: #4365a1;
        }
      }
    }
  }

</style>

<template>
  <div class="three">
    <div class="bg-green"></div>
    <div class="bg-line"></div>
    <div class="container">
      <div v-for="i in 16">
        <div class="bg"></div>
        <div class="row"></div>
        <div class="colums"></div>
        <css-grid-common-03 :ifShow="i|ifSHow" :index="i"/>
      </div>
    </div>
  </div>
</template>

<script>
  const { log: print } = console;
  export default {
    filters: {
      ifSHow: function (value) {
        let show = false;
        if (value < 6 || value === 9 || value === 13 || value === 17) {
          show = true;
        }
        return show;
      }
    }
  };
</script>

<style lang="less">
  .arrow{
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .three {
    border: 4px solid #ddd;
    border-radius: 10px;
    padding: 100px 20px 20px 100px;
    position: relative;

    .bg-green {
      top: 90px;
      right: 10px;
      bottom: 10px;
      left: 90px;
      position: absolute;
      background-color: #69b251;
    }

    .bg-line {
      top: 89px;
      right: 19px;
      bottom: 19px;
      left: 89px;
      position: absolute;
    }

    .container {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 100px);
      margin: 0;

      & > div {
        background-color: rgba(105, 178, 81, 0) !important;
        min-height: 100px;
        position: relative;
        border: 2px solid black;
        box-sizing: border-box;

        .bg {
          @removing: 10px;
          position: absolute;
          top: @removing;
          left: @removing;
          right: @removing;
          bottom: @removing;
          background-color: white;
          z-index: 10;
        }

        .row {
          position: absolute;
          .arrow();
          z-index: 12;

          &:before {
            position: absolute;
            top: -4px;
            left: -30px;
            content: "";
            display: block;
            height: 4px;
            width: calc(100% + 40px);
            background-color: black;
          }
          &:after {
            position: absolute;
            bottom: -4px;
            left: -30px;
            content: "";
            display: block;
            height: 4px;
            width: calc(100% + 40px);
            background-color: black;
          }

        }

        .colums {
          position: absolute;
          .arrow();
          z-index: 12;

          &:before {
            position: absolute;
            left: -4px;
            top: -30px;
            content: "";
            display: block;
            width: 4px;
            height: calc(100% + 40px);
            background-color: black;
          }
          &:after {
            position: absolute;
            right: -4px;
            top: -30px;
            content: "";
            display: block;
            width: 4px;
            height: calc(100% + 40px);
            background-color: black;
          }

        }

        &:nth-child(1) {

        }
      }
    }
  }
</style>


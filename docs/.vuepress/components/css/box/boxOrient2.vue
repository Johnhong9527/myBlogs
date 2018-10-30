<template>
  <div class="box-orient2">
    <section>01</section>
    <section>02</section>
    <section>03</section>
  </div>
</template>

<style>
.box-orient2{
  width:100%;
  height:200px;
  display:-moz-box;
  display:-webkit-box;
  display:box;
  -moz-box-orient:vertical;
  -webkit-box-orient:vertical;
  /*垂直排列*/
  box-orient:vertical;
}
.box-orient2 section{
  line-height: 200px;
  text-align: center;
  color:#fff;
  text-shadow: 1px 1px 1px rgb(0,0,0)
}
.box-orient2 section:nth-child(1){
  background:orange;
  -moz-box-flex:1;
  -webkit-box-flex:1;
  box-flex:1;
}
.box-orient2 section:nth-child(2){
  background:purple;
  -moz-box-flex:2;
  -webkit-box-flex:2;
  box-flex:2;
}
.box-orient2 section:nth-child(3){
  height:100px;
  background:green;
}
</style>


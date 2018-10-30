<template>
  <div class="acticle_3">
    <section>01</section>
    <section>02</section>
    <section>03</section>
  </div>
</template>

<style>
.acticle_3{
  display: box;
  display: -moz-box;
  display: -webkit-box;

  width: 100%;
  height: 50px;
}
.acticle_3 section{
  line-height: 50px;
  text-align: center;
  color:#fff;
  text-shadow: 1px 1px 1px rgb(0,0,0)
}
.acticle_3 section:nth-child(1){
  background:orange;
  -moz-box-flex:2;
  -webkit-box-flex:2;
  box-flex:2;
}
.acticle_3 section:nth-child(2){
  background:purple;
  -moz-box-flex:2;
  -webkit-box-flex:2;
  box-flex:2;
  /*添加margin属性*/
  margin:0 50px;
}
.acticle_3 section:nth-child(3){
  width:200px;
  background:green;
}
</style>


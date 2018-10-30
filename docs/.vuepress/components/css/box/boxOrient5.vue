<template>
  <div class="box-orient5">
    <section>01</section>
    <section>02</section>
    <section>03</section>
  </div>
</template>

<style>
.box-orient5{
  width:100%;
  height:200px;
  background: aquamarine;

  display:-moz-box;
  display:-webkit-box;
  display:box;
  
  -moz-box-pack:end;
  -webkit-box-pack:end;
  -o-box-pack:end;
  box-pack:end;
}

.box-orient5 section{
  line-height: 100px;
  width: 100px;
  text-align: center;
  color:#fff;
  text-shadow: 1px 1px 1px rgb(0,0,0)
}
.box-orient5 section:nth-child(1){
  background:orange;
}
.box-orient5 section:nth-child(2){
  background:purple;
}
.box-orient5 section:nth-child(3){
  background:green;
}
</style>


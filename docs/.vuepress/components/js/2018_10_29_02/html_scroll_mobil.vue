<template>
  <div>

    <h1 @click="os">OS:{{osStr}}</h1>
    <div id="btn-wrapper">
      <div>
        移动平台
      </div>
      <div>
        <button id="enable"
          @click=enableF>enable
          scrolling</button>
      </div>
      <div>
        <button id="disable"
          @click=disableF>disable
          scrolling</button>
      </div>
      <div>
        <strong id="status"
          :class="statusClassName">{{enabled}}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: '',
      osStr: '',
      enabled: 'enabled',
      statusClassName: 'enabled',
    };
  },
  methods: {
    enableF() {
      this.statusClassName = 'enabled';
      this.enabled = 'enabled';
      document.body.style.position = 'static';
      window.scrollTo(0, this.top);
    },
    disableF() {
      this.top = window.scrollY;
      this.statusClassName = 'disabled';
      this.enabled = 'disabled';
      // document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = -this.top + 'px';
    },
  },
};
</script>

<style scoped>
.article {
}
/*btn*/
#btn-wrapper {
  position: fixed;
  z-index: 100;
  bottom: 40%;
  right: 10%;
  border: 1px solid;
  padding: 5px;
  background-color: white;
}
#btn-wrapper > div {
  margin-bottom: 10px;
  text-align: center;
}
.enabled {
  color: green;
}
.disabled {
  color: red;
}
</style>

## V-APP

```html
<template>
  <div id="app">
     <h-title :id="id">Hello World</h-title>
    <button @click="next">下一个</button>
    <h-title2 :id="id">Hello World</h-title2>
    <vif :id="id">Hello World</vif>
    <vfor></vfor>
    <vmodel></vmodel>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Title from './components/item';
import Title2 from './components/item2';
import vif from './components/vif';
import vfor from './components/vfor';
import vmodel from './components/vmodel';

export default {
  name: 'app',
  data() {
    return {
      id: 1,
    };
  },
  components: {
    HelloWorld,
    'h-title': Title,
    'h-title2': Title2,
    vif: vif,
    vfor: vfor,
    vmodel: vmodel,
  },
  methods: {
    next() {
      if (this.id === 6) {
        this.id = 1;
      }
      ++this.id;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

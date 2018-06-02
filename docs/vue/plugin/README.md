# plugin

### 插件注册
```js
import PickerComponent from "./picker.vue";
let $vm;
export default {
  install(Vue, options) {
    if (!$vm) {
      const pickerPlugin = Vue.extend(PickerComponent);
      $vm = new pickerPlugin({
        el: document.createElement("div"),
      });
      document.body.appendChild($vm.$el);
    }
    $vm.showValue = false;
    let picker = {
      show(options) {
        console.log(15)
        $vm.showValue = true;
      },
      hide() {
        document.body.removeChild($vm.$el);
      },
    };

    if (!Vue.$picker) {
      Vue.$picker = picker;
    }

    Vue.mixin({
      created() {
        this.$picker = Vue.$picker;
      },
    });
  },
};
```
# 组件传值_props

####  父与子
> 父传值给子组件

父组件
```vue
<template>
  <div class="thread-section">
    <ul class="thread-list">
      <thread 
      :active="5 === 6"
      :phone="phone">
      </thread>
    </ul>
  </div>
</template>

<script>
import Thread from './Thread.vue'
export default {
  name: 'ThreadSection',
  data(){
    return{
      phone: '15868600329'
    }
  },
  components: { Thread },
}
</script>
```
子组件
```vue
<template>
  <li
    class="thread-list-item"
    :class="{ active: active }">
    <div>{{phone}}</div>
  </li>
</template>

<script>
export default {
  name: 'Thread',
  props: {
    active: Boolean,
    phone: Number
  }
}
</script>
```
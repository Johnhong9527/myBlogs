## jsx
参考文章:[在vue中使用jsx语法](https://juejin.im/post/5affa64df265da0b93488fdd#heading-0)

#### 什么是JSX?
---
JSX就是Javascript和XML结合的一种格式。React发明了JSX，利用HTML语法来创建虚拟DOM。当遇到<，JSX就当HTML解析，遇到{就当JavaScript解析.

#### 使用template
```html
// item.vue
<template>
 <div>
   <h1 v-if="id===1">
     <slot></slot>
   </h1>
   <h2 v-if="id===2">
     <slot></slot>
   </h2>
   <h3 v-if="id===3">
     <slot></slot>
   </h3>
   <h4 v-if="id===4">
     <slot></slot>
   </h4>
 </div>
</template>

<script>
   export default {
       name: "item",
       props:{
         id:{
           type:Number,
           default:1
         }
       }
   }
</script>
```
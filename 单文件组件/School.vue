<template>
    <div class="demo">
        <h2>{{ name }}</h2>
        <h2>{{ address }}</h2>
    </div>
</template>

<script>
/* 在创建JavaScript模块时，export 语句用于从模块中 //@导出函数、对象或原始值，
以便其他程序可以通过 import 语句使用它们。 */
// export default {};
// const school = Vue.extend({
//   name: "xuexiao",
//   //   对应上面的template
//   //   #region
//   //   template: `
//   //         <div>
//   //             <h2>{{name}}</h2>
//   //             <h2>{{address}}</h2>
//   //         </div>
//   //         `,
//   //   #endregion
//   data() {
//     return {
//       name: "尚硅谷",
//       address: "北京昌平",
//     };
//   },
// });
// // @一般默认导出方式
// export default school;

// ！简化写法
export default {
    name: "xuexiao",
    data() {
        return {
            name: "尚硅谷",
            address: "北京昌平",
        };
    },
    methods: {},
};
</script>

<style scoped>
/*! */
.demo {
    background-color: aqua;
}
</style>






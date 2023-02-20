<template >
    <div>
        <h2>{{ name }}</h2>
        <h2>{{ address }}</h2>
    </div>
</template>
<script>
export default {
    name: Student,
    data() {
        return {
        name: "tom",
        address: "上海",
        };
    },
};
</script>
<style >
</style>
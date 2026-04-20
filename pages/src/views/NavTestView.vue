<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goAbout = () => {
    router.push("/about");
}

const goBack = () => {
    router.back();
}

</script>
<template>
    <div>
        <h2>程式化導航測試</h2>
        <button @click="goAbout" class="btn btn-primary">用 JS 跳到關於頁</button>
        <button @click="goBack" class="btn btn-danger">返回上一頁</button>
        <button @click="router.push({ name: 'article', params: { id: 99 } })" class="btn btn-info">跳到文章 99</button>
    </div>
</template>

<style scoped></style>
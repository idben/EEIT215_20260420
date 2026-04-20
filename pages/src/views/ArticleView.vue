<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
    <h1>文章詳情</h1>
    <h2>文章ID(動態路由): {{ route.params.id }}</h2>
    <h3>目前路徑: {{ route.path }}</h3>
</template>
<style scoped></style>
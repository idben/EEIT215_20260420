<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
    <h1>文章詳情</h1>

    <nav>
        <RouterLink to="/article/a234">文章234</RouterLink>
        <RouterLink :to="{ name: 'article', params: { id: 'a456' } }">文章456</RouterLink>
        <RouterLink to="/article/a789">文章789</RouterLink>
    </nav>

    <h2>文章ID(動態路由): {{ route.params.id }}</h2>
    <h3>目前路徑: {{ route.path }}</h3>
</template>
<style scoped></style>
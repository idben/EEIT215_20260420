<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>
<template>
  <NavBar />
  <div class="container py3">
    <RouterView />
  </div>

</template>
<style scoped></style>
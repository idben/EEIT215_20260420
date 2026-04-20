<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <NavBar />
  <main class="container py3">
    <div class="card">
      <div class="card-body">
        <RouterView />
      </div>
    </div>

  </main>
  <footer class="container">
    <Footer />
  </footer>

</template>
<style scoped>
main .card {
  height: calc(100vh - 64px - 40px);
}
</style>
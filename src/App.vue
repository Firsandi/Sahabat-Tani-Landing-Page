<template>
  <div>
    <Navbar />
    <main class="smooth-scroll">
      <Home />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Home from './views/Home.vue'
</script>

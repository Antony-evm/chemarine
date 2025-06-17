<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
</script>

<template>

  <div id="app" class="min-h-screen bg-gradient-to-b from-[#1e3a8a] via-[#22577a] to-[#38b2ac]">
    <NavbarComponent />
    <router-view />
  </div>


</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

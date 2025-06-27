<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>
<template>
  <div class="relative min-h-screen overflow-hidden">

    <div class="absolute inset-0 z-0 bg-[#FEFAF0]" />
    <div class="relative z-30">
      <div class="min-h-screen">
        <NavbarComponent />
        <main id="main-content" role="main">
          <router-view />
        </main>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

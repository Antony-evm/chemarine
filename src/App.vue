<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>
<template>
  <div class="relative min-h-screen overflow-hidden">

    <div class="absolute inset-0 z-0 bg-gradient-to-b from-[#165482] via-[#189ab4] to-[#83c5be]" />
    <div class="pointer-events-none absolute inset-0 z-10" style="
      background: repeating-linear-gradient(120deg,rgba(255,255,255,0.05) 0 2px,transparent 2px 80px),
                  repeating-linear-gradient(60deg,rgba(255,255,255,0.07) 0 3px,transparent 3px 100px);
      mix-blend-mode: lighten;
    "></div>
    <div
      class="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent to-[#15516b]/80">
    </div>

    <div class="relative z-30">
      <div class="min-h-screen">
        <NavbarComponent />
        <router-view />
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

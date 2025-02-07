<script setup>
import HeaderAplicartion from '~/components/Header/headerAplicartion.vue'
</script>

<template>
  <v-app>
    <nav-bar-container />
    <v-main class="sc-bg-[#F6F2FF]">
      <div class="sc-p-10">
        <HeaderAplicartion />

        <slot />
      </div>
    </v-main>
  </v-app>
</template>

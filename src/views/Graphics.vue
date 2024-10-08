<script lang="ts" setup>
import etherLogo from "../assets/logo/ether_text_logo.svg"
</script>

<template>
  <main class="graphics__window">
    <etherLogo width="300px"></etherLogo>
  </main>
</template>

<style scoped>
.graphics__window {
  height: 100%;
  display: grid;
  place-items: center;

  background-color: rgba(0, 0, 0, 0.1);
  -webkit-app-region: drag;
}
</style>
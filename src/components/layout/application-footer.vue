<script setup lang="ts">
  const currentYear = new Date().getUTCFullYear();
</script>

<template>
  <footer>
    &copy; {{ currentYear }} <b>TimingWeb</b>. All rights reserved.
  </footer>
</template>

<style scoped>
  footer {
    padding: 8px 24px;
    background-color: var(--background-secondary);
    border-top: #656565 1px solid;
    font-size: .9rem;
  }
</style>
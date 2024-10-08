<script lang="ts" setup>
</script>

<template>
  <div class="dragZoneBox"></div>
</template>

<style scoped>
.dragZoneBox {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  height: 32px;
  background-color: var(--background-secondary);
  cursor: move; /* This will show the move cursor */
  -webkit-app-region: drag; /* This makes the region draggable */
}
</style>
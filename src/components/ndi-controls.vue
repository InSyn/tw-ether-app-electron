<script lang="ts" setup>
const ipcRenderer = window.ipcRenderer;

function startNDI() {
  ipcRenderer.invoke('start-ndi-stream', 'Display Graphics');  // Replace with actual window name
}

function stopNDI() {
  ipcRenderer.invoke('stop-ndi-stream');
}
</script>

<template>
  <div>
    <button @click="startNDI">Start NDI Stream</button>
    <button @click="stopNDI">Stop NDI Stream</button>
  </div>
</template>

<style scoped>

</style>
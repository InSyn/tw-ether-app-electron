<script lang="ts" setup>
import ApplicationHeader from "../components/layout/application-header.vue";
import ApplicationBody from "../components/layout/application-body.vue";
import ApplicationFooter from "../components/layout/application-footer.vue";
import Toolbar from "../components/layout/toolbar.vue";
</script>

<template>
  <div id="main__view">
    <toolbar></toolbar>
    <application-header></application-header>
    <application-body></application-body>
    <application-footer></application-footer>
  </div>
</template>

<style scoped>
#main__view {
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  overflow: hidden;
  background-color: var(--background-primary);

  //border-left: var(--accent-primary) 1px solid;
  //border-right: var(--accent-primary) 1px solid;
}
</style>
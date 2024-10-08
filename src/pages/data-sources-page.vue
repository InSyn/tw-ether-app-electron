<script lang="ts" setup>
import DataTypesList from "../components/dataPage/data-types-list.vue";
import DataItemsList from "../components/dataPage/data-items-list.vue";
import DataSetup from "../components/dataPage/data-setup.vue";
import NdiControls from "../components/ndi-controls.vue";

</script>

<template>
  <div class="dataPage__wrapper">
    <aside>
      <data-types-list></data-types-list>
      <data-items-list></data-items-list>
      <data-setup></data-setup>
    </aside>
    <div class="mainSection">
      main section
      <ndi-controls> </ndi-controls>
    </div>
  </div>
</template>

<style scoped>
.dataPage__wrapper {
  flex: 1 1 0;
  display: grid;
  grid-template-areas:'aside main'
                      'aside main';
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-gap: 16px;
  padding: 16px 24px;

  aside {
    grid-area: aside;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .mainSection {
    grid-area: main;
  }
}
</style>
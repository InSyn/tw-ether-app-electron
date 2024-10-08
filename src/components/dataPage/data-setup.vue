<script lang="ts" setup>

</script>

<template>
  <section class="dataSetup__wrapper">
    <h5>Настройка данных</h5>
    <div class="dataSetup__body">

    </div>
  </section>
</template>

<style scoped>
.dataSetup__wrapper {
  flex: 2 1 200px;
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  background-color: var(--background-secondary);
  border-radius: 4px;

  .dataSetup__body {
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
    background-color: var(--background-deep);
    border-radius: 4px;
  }
}
</style>
<script lang="ts" setup>

</script>

<template>
  <section class="dataItems__list__wrapper">
    <h5>Список данных</h5>
    <div class="dataItems__list"></div>
  </section>
</template>

<style scoped>
.dataItems__list__wrapper {
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  background-color: var(--background-secondary);
  border-radius: 4px;

  .dataItems__list {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
    background-color: var(--background-deep);
    border-radius: 4px;
  }
}
</style>
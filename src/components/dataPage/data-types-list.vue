<script lang="ts" setup>
import {useDataSourcesStore} from "../../store/data-sources";

const dataSourcesStore = useDataSourcesStore()
</script>

<template>
  <section class="dataTypes__list__wrapper">
    <h5>Тип источника данных</h5>
    <div class="dataTypes__list">
      <button class="dataTypes__list__item" v-for="type in dataSourcesStore.dataSources" :key="type" type="button">{{ type.toUpperCase() }}</button>
    </div>
  </section>
</template>

<style scoped>
.dataTypes__list__wrapper {
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  background-color: var(--background-secondary);
  border-radius: 4px;

  .dataTypes__list {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 8px;

    .dataTypes__list__item {
      padding: 4px .75rem;
      background-color: ;
      font-size: .75rem;
      font-weight: bold;
    }
  }
}
</style>
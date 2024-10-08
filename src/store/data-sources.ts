import { defineStore } from "pinia";

export const useDataSourcesStore = defineStore('data-sources', {
    state: () => ({
        dataSources: [
            'scoring',
            'timing',
            'play',
            'ai скан',
            'csv',
            'excel',
            'txt'
        ]
    }),
    actions: {
    },
    getters: {
    }
})
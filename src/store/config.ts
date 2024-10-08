import {defineStore} from "pinia";

export const useConfigStore = defineStore('config', {
    state: () => ({
        darkMode: false,
        hotkeys: {}
    }),
    actions: {
        initializeColorScheme() {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            this.darkMode = prefersDark
        },
        initializeHotkeys() {
            this.hotkeys = {
                test: 'ctrl+alt+t'
            }
            window.addEventListener('keydown', (event) => {
                if (event.ctrlKey && event.shiftKey && ['g','G'].includes(event.key) ) {
                    event.preventDefault();
                    window.ipcRenderer.invoke('open-win', 'graphics-win').catch()
                }
            });
        },

    }
})
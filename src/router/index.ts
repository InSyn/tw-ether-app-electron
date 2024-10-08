import { createRouter, createWebHistory } from 'vue-router'
import Main from "../views/Main.vue";
import DataSourcesPage from "../pages/data-sources-page.vue";
import Graphics from "../views/Graphics.vue";

const routes = [
    {
        path: '/',
        redirect: 'main-view'
    },
    {
        path: '/main-view',
        name: 'mainView',
        component: Main,
        children: [
            {
                path: '/title-editor',
                name: 'titleEditorPage',
                component: DataSourcesPage
            },
            {
                path: '/data-sources',
                name: 'dataSourcesPage',
                component: DataSourcesPage
            },
            {
                path: '/graphics-control',
                name: 'graphicsControlPage',
                component: DataSourcesPage
            }
        ]
    },
    {
        path: '/graphics-win',
        name: 'graphics',
        component: Graphics,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
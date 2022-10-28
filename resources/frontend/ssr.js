import '@/assets/tailwind.css'
import 'quasar/src/css/index.sass'

import { createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/svg-mdi-v6'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { modal } from 'momentum-modal'
import axios from 'axios'
import Notifications from '@kyvg/vue3-notification'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m'
import { renderToString } from '@vue/server-renderer'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'

createServer((page) =>
  createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup ({ el, app, props, plugin }) {
      return createSSRApp({ render: () => h(app, props) })
        .use(ZiggyVue, {
          ...page.props.ziggy,
          location: new URL(page.props.ziggy.location)
        })
        .use(createPinia())
        .use(Quasar, {
          iconSet: quasarIconSet
        })
        .use(plugin)
        .use(Notifications)
        .use(modal, {
          resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
        })
        .mixin({
          methods: {
            route: window.route
          }
        })
    }
  })
)

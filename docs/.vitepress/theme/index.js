// https://vitepress.dev/guide/custom-theme

import { h } from 'vue'
import Theme from 'vitepress/theme'
import NavUl from '../component/nav-ul/index.vue'
import Videos from '../component/videos-page/index.vue'
import Images from '../component/images-page/index.vue'
import Vue3Api from '../component/vue3-page/api.vue'
import TreeItem from '../component/vue3-page/comps/TreeItem.vue'
import Grid from '../component/vue3-page/comps/Grid.vue'
import './normalize.css';
import './style.css'
import './tailwind.css'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('NavUl', NavUl)
    app.component('Videos', Videos)
    app.component('Images', Images)
    app.component('Vue3Api', Vue3Api)
    app.component('TreeItem', TreeItem)
    app.component('Grid', Grid)
    app.use(Viewer, {
      defaultOptions: {
        zIndex: 9999,
        toolbar: false,
        title: false,
        navbar: false,
        scalable: false,
        rotatable: false,
        tooltip: false,
        inline: false,
      }
    })
  }
}

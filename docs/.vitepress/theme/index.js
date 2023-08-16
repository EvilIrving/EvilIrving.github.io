// https://vitepress.dev/guide/custom-theme

import { h } from 'vue'
import Theme from 'vitepress/theme'
import NavUl from '../component/nav-ul/index.vue'
import Videos from '../component/videos-page/index.vue'
import './normalize.css';
import './style.css'
import './tailwind.css'


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
  }
}

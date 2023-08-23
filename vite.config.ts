import { defineConfig } from 'vite'
/* eslint-disable  import/no-unresolved */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
/* eslint-enable */

// https://vitejs.dev/config/
export default defineConfig({
  // ignoreDeadLinks: true,
  plugins: [
    // vueJsx(),
    AutoImport({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        // presets
        'vue'
      ],
      resolvers: [AntDesignVueResolver()],
      eslintrc: {
        enabled: true // <-- this
      }
    }),
    Components({
      dirs: ['.vitepress/components'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [AntDesignVueResolver()]
    })
  ],
  ssr: { noExternal: ['ant-design-vue'] },
  server: {
    port: 3000
  },
  
})

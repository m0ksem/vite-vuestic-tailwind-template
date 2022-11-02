import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
// Tree-shake extra vuestic styles, so there is not conflict with Tailwind
// https://vuestic.dev/en/getting-started/tree-shaking#css-code-split
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import './style.css'

createApp(App)
  .use(createVuestic({
    config: {
      // https://vuestic.dev/en/services/global-config
    }
  }))
  .mount('#app')

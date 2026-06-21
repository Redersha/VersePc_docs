import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import InfoCard from './components/Card.vue'
import NCard from './components/NCard.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('InfoCard', InfoCard)
    app.component('NCard', NCard)
  }
} as Theme

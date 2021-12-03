import Vue from 'vue'
import Breaky from './components/Breaky.vue'
import { theme } from '~tailwind.config'

const BreakyCtor = Vue.extend(Breaky)

// Nuxt module options are added in here
const options = <%= JSON.stringify(options, null, 2) %>;

export default async function () {
  const instance = new BreakyCtor({
    propsData: {
      breakpoints: theme.screens,
      startingPosition: options.position,
      colorScheme: options.colorScheme,
      parseRaw: options.parseRaw,
    },
  }).$mount()
  document.querySelector('body').appendChild(instance.$el)
}

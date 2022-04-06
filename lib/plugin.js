// \@ts-nocheck
import Vue from 'vue'
import Breaky from './components/Breaky.vue'

const BreakyCtor = Vue.extend(Breaky)

/**
 * @type object
 * Nuxt module options are added in here
 */
const options = <%= JSON.stringify(options, null, 2) %>;

export default async function () {

  const instance = new BreakyCtor({
    propsData: {
      breakpoints: options.breakpoints,
      startingPosition: options.position,
      colorScheme: options.colorScheme,
      parseRaw: options.parseRaw,
    },
  }).$mount()
  document.body.appendChild(instance.$el)
}

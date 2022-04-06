const { resolve } = require('path')

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/nuxt-breaky/',
        },
      }
    : {}

module.exports = {
  ...routerBase,

  head: {
    title: 'breaky example nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    htmlAttrs: {
      lang: 'en',
    },
  },

  rootDir: resolve(__dirname),
  buildDir: resolve(__dirname, './.nuxt'),
  srcDir: __dirname,
  generate: {
    devtools: true,
    dir: resolve(__dirname, './dist'),
  },
  render: {
    resourceHints: false,
  },
  css: ['~/assets/css/tailwind.css'],
  buildModules: ['@nuxt/postcss8', { handler: require('../') }],
  build: {
    transpile: ['tailwindcss'],
    postcss: {
      plugins: {
        'tailwindcss/nesting': {},
        tailwindcss: { config: 'example/tailwind.config.js' },
        'postcss-nested': false,
      },
    },
  },
  breaky: {
    enabled: true,
    enableInProd: process.env.DEPLOY_ENV === 'GH_PAGES',
    position: 'bottomRight',
    colorScheme: 'auto',
    parseRaw: true,
  },

  purgeCSS: {
    enabled: false,
  },
}

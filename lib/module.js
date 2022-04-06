const { existsSync } = require('fs')
const { resolve } = require('path')

module.exports = function(moduleOptions) {
  const { nuxt } = this
  const defaults = {
    enabled: true,
    enableInProd: false,
    colorScheme: 'auto',
    position: 'bottomRight',
    configPath: '~~/tailwind.config.js',
  }

  const options = {
    ...defaults,
    ...this.options.breaky,
    ...moduleOptions,
  }

  const coreTemplates = [
    'components/Breaky.vue',
    'components/TransitionExpand.vue',
    'components/CurrentScreenIcon.vue',
    'assets/css/custom-props.css',
  ]
  const templates = []

  if (
    options.enableInProd ||
    (process.env.NODE_ENV === 'development' && options.enabled)
  ) {
    const configPath = nuxt.resolver.resolveAlias(options.configPath)
    let tailwindConfig = {}

    if (!options.breakpoints && existsSync(configPath)) {
      const clearModule = require('clear-module')

      clearModule(configPath)
      tailwindConfig = nuxt.resolver.requireModule(configPath)

      // console.log('tailwindConfig', tailwindConfig)
      // logger.info(`Merging Tailwind config from ~/${relative(this.options.srcDir, configPath)}`)
      const resolveConfig = require('tailwindcss/resolveConfig')
      const resolvedConfig = resolveConfig(tailwindConfig)

      options.breakpoints = resolvedConfig.theme.screens
    }

    this.addPlugin({
      src: resolve(__dirname, 'plugin.js'),
      fileName: 'nuxt-breaky.js',
      ssr: false,
      options,
    })

    coreTemplates.forEach((name) => {
      this.addTemplate({
        src: resolve(__dirname, name),
        fileName: name,
      })
    })
    templates.forEach((name) => {
      this.addTemplate({
        src: resolve(__dirname, name),
        fileName: name,
      })
    })

    console.info('Using Tailwind Breakpoints plugin')
  }
}

module.exports.meta = require('../package.json')

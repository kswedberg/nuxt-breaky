const { resolve } = require('path')

module.exports = function(moduleOptions) {
  const defaults = {
    enabled: true,
    enableInProd: false,
    colorScheme: 'auto',
    position: 'bottomRight',
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

    console.info('Tailwind Breakpoints plugin added')
  }
}

module.exports.meta = require('../package.json')

# nuxt-tailwind-breakpoints

[![npm version][npm-version-src]][npm-version-href]
[![License][license-src]][license-href]

<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
<!-- [![Circle CI][circle-ci-src]][circle-ci-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

> Show Tailwind CSS Breakpoints in Nuxtjs when using the [tailwindcss-module](https://github.com/nuxt-community/tailwindcss-module)

[📖 **Release Notes**](./CHANGELOG.md)

## Intro

**Note**: This is a simple fork of the [nuxt-breaky](https://github.com/teamnovu/nuxt-breaky) module. It should look and act pretty much the same as the original. Minor changes include removing the `node-sass` dependency to make the module usable with node.js >= 16 and adding a landmark `aria-role` attribute to the div.current-breakpoint element.

[DEMO](https://teamnovu.github.io/nuxt-breaky/)

breaky helps you create your responsive designs faster. It extends the awesome [tailwindcss-module](https://github.com/nuxt-community/tailwindcss-module). breaky reads your defined breakpoints within your tailwind config and shows the currently active breakpoint based on your browser window width.

The plugin will only be loaded during development mode and does not interfere with your production build.

![Demo GIF of window resizing](./example/assets/img/resizing.gif 'Resizing Browser Window')
![Demo GIF of dragging](./example/assets/img/dragging.gif 'Dragging Card to Corners')
![Demo GIF of toggling dark mode](./example/assets/img/toggle-dark-mode.gif 'Toggling between Dark and Light Mode')

## Requirements

Make sure `tailwindcss-module: ^1.4.0` (or higher) is installed.

## Setup

1. Add `nuxt-tailwind-breakpoints` as a dev-dependency to your project

```bash
yarn add nuxt-tailwind-breakpoints --dev

# or npm install nuxt-tailwind-breakpoints --save-dev
```

2. Add `nuxt-tailwind-breakpoints` to the `buildModules` section of `nuxt.config.js`

NOTE: Use the `modules` section if you are using Nuxt older than `v2.9`. [More Info](https://nuxtjs.org/guide/modules/#build-only-modules)

```js
{
  buildModules: [
    // Simple usage
    'nuxt-tailwind-breakpoints',

    // With options
    [
      'nuxt-tailwind-breakpoints',
      {
        enabled: true,
        enableInProd: false,
        colorScheme: 'auto',
        position: 'bottomRight'
      }
    ]
  ]
}
```

3. Add `exposeConfig: true` to the `tailwindcss` section of `nuxt.config.js`

```js
{
  tailwindcss: {
    exposeConfig: true
  }
}
```

NOTE: Please be aware this adds ~19.5KB (~3.5KB) to the client bundle size when you are in development mode. [More Info](https://github.com/nuxt-community/tailwindcss-module#referencing-in-javascript)

## Usage

The breaky module automatically adds the breaky plugin when in `development` mode.
No need to register or include it anywhere else.

### Configuration

You can pass options to the breaky using both the module options and the Nuxt config way.

```js
{
  buildModules: {
    ['nuxt-tailwind-breakpoints', { /* module options */ }]
  },

  breaky: {
    /* module options */
  }
}
```

#### Available Options

| Option         | Type      | Default         | Options                                                          | Description                                                                                                                                                                                                                                                          |
| -------------- | --------- | --------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`      | `Boolean` | `true`          | `true` \| `false`                                                | Enable/Disable breaky                                                                                                                                                                                                                                                |
| `enableInProd` | `Boolean` | `false`         | `true` \| `false`                                                | Enable breaky in production (overrides the enabled option; Please be aware this adds ~19.5KB (~3.5KB) to the client bundle size. [More Info](https://github.com/nuxt-community/tailwindcss-module#referencing-in-javascript))                                        |
| `colorScheme`  | `String`  | `auto`          | `'auto'` \| `'light'` \| `'dark'`                                | Switch between different color schemes                                                                                                                                                                                                                               |
| `position`     | `String`  | `'bottomRight'` | `'topLeft'` \| `'topRight'` \| `'bottomLeft'` \| `'bottomRight'` | Breakys starting position                                                                                                                                                                                                                                            |
| `parseRaw`     | `Boolean` | `false`         | `true` \| `false`                                                | (_Expiremental_) Enable parsing a screen's `raw` property and use a query's `min-width` pixel value if it specifies the device type as `screen` or doesn't specify device type at all. For example, `lg: {raw: print, (min-width: 1024px)}` would set `lg` to `1024` |

## Development

1. Clone this repository
2. Install dependencies using `yarn install`
3. Start development server using `yarn dev`

### Release

1. `yarn release`
2. `npm publish`

## License

[MIT License](./LICENSE)

Copyright (c) teamnovu

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-breaky/latest.svg?style=flat-square
[npm-version-href]: https://www.npmjs.com/package/nuxt-tailwind-breakpoints
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-breaky.svg?style=flat-square
[npm-downloads-href]: https://github.com/teamnovu/nuxt-breaky/releases
[circle-ci-src]: https://img.shields.io/circleci/project/github/teamnovu/nuxt-breaky.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/teamnovu/nuxt-breaky
[codecov-src]: https://img.shields.io/codecov/c/github/teamnovu/nuxt-breaky.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/teamnovu/nuxt-breaky
[license-src]: https://img.shields.io/npm/l/nuxt-breaky.svg?style=flat-square
[license-href]: https://github.com/teamnovu/nuxt-breaky/blob/master/LICENSE

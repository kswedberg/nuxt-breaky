import { join } from 'path'
import { get, setupTest } from '@nuxt/test-utils'

describe('module', () => {
  const rootDir = join(__dirname, '..', 'example')
  const configFile = join(__dirname, '..', 'example', 'tailwind.config.js')

  setupTest({
    server: true,
    rootDir,
    configFile,
  })

  test('render', async () => {
    const html = await get('/').then((r) => r.body)

    expect(html).toContain('breaky')
  })
})

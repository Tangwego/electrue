const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      experimentalNativeDepCheck: true,
      nodeModulesPath:['./node_modules']
    }
  }
})

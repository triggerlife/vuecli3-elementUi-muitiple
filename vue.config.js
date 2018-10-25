'use strict'
const titles = require('./title.js')
const glob = require('glob')
const path = require('path')
const pages = {}
glob.sync('./src/pages/**/app.js').forEach(path => {
    const chunk = path.split('./src/pages/')[1].split('/app.js')[0]
    pages[chunk] = {
        entry: path,
        template: 'public/index.html',
        title: titles[chunk],
        chunks: ['chunk-vendors', 'chunk-common', chunk]
    }
})
module.exports = {
    pages,

    chainWebpack: config => {
        config.plugins.delete('named-chunks');
        config.resolve.alias
            .set("@assets", path.resolve(__dirname, "src/assets"))

    },

    outputDir: process.env.outputDir,

    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },

    lintOnSave: true,

    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        open: true
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
            path.resolve(__dirname, "src/assets/css/global.less")
        ]
      }
    }
}

var path = require("path");

module.exports = [
    {
        entry: './wwwroot/js/src/site.js',
        output: {
            path: path.resolve(__dirname, "wwwroot/js/dist"),
            filename: 'site.bundle.js',
            library: 'clm',
            libraryTarget: 'umd'
        },
        entry: './wwwroot/js/src/site.js',
        mode: 'development',
        resolve: {
            alias: {
                vue: 'vue/dist/vue.js'
            }
        }
    },
    {
        entry: './wwwroot/js/src/site.js',
        output: {
            path: path.resolve(__dirname, "wwwroot/js/dist"),
            filename: 'site.bundle.min.js',
            library: 'clm',
            libraryTarget: 'umd'
        },
        entry: './wwwroot/js/src/site.js',
        mode: 'production',
        resolve: {
            alias: {
                vue: 'vue/dist/vue.js'
            }
        }
    }
]
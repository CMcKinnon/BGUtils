var path = require("path");

module.exports = [
    {
        entry: './wwwroot/js/src/site.js',
        output: {
            path: path.resolve(__dirname, "wwwroot/js/dist"),
            filename: 'site.bundle.js'
        },
        mode: 'development'
    },
    {
        entry: './wwwroot/js/src/site.js',
        output: {
            path: path.resolve(__dirname, "wwwroot/js/dist"),
            filename: 'site.bundle.min.js'
        },
        mode: 'production'
    }
]
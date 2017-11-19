const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'grapher.js',
        path: path.resolve(__dirname, 'dist')
    }
};
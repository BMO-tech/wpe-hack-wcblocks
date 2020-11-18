const path = require('path')
const defaultConfig = require('./node_modules/@wordpress/scripts/config/webpack.config');

const blockDirectory = {
    hero: {
        src: path.resolve(process.cwd(), 'src/blocks/hero', 'index.js'),
        buildPath: path.resolve(process.cwd(), 'src/blocks/hero/build'),
        buildName: '[name].block.js'
    }
}
module.exports = {
    ...defaultConfig,
    entry: {
        hero: blockDirectory.hero.src,
    },
    output: {
        path: blockDirectory.hero.buildPath,
        filename: blockDirectory.hero.buildName,
    }
}
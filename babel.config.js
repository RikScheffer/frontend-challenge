const styleXPlugin = require('@stylexjs/babel-plugin')

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            styleXPlugin,
            {
                dev: true,
                // Set this to true for snapshot testing
                // default: false
                test: false,
                // Required for CSS variable support
                unstable_moduleResolution: {
                    // type: 'commonJS' | 'haste'
                    // default: 'commonJS'
                    type: 'commonJS',
                    // The absolute path to the root directory of your project
                    rootDir: __dirname,
                },
            },
        ],
    ],
}

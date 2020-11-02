/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const postcssConfig = require('./postcss.config');
process.env.VUE_APP_VERSION = require('./package.json').version;


const extraPlugins = [];
if (process.env.NODE_ENV === 'development') {
    // const StylelintPlugin = require('stylelint-webpack-plugin');

    // extraPlugins.push(
    // new StylelintPlugin({
    //     files: ['src/**/*.{vue,scss}'],
    // }),
    // );
}

if (process.env.VUE_APP_ANALYZE_MOD) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    extraPlugins.push(
        new BundleAnalyzerPlugin(),
    );
}


module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,
    devServer: {
        disableHostCheck: true,
        port: 8080,
    },
    css: {
        loaderOptions: {
            postcss: postcssConfig,
            sass: {
                includePaths: ['./node_modules'],
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@sb': path.resolve('./.storybook'),
            },
        },
        devtool: 'source-map',
        plugins: [
            ...extraPlugins,
        ],
    },
    chainWebpack: (config) => {
        // These are some necessary steps changing the default webpack config of the Vue CLI
        // that need to be changed in order for Typescript based components to generate their
        // declaration (.d.ts) files.
        //
        // Discussed here https://github.com/vuejs/vue-cli/issues/1081
        if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_BUILD_MOD === 'lib') {
            config.module.rule('ts').uses.delete('cache-loader');

            config.module
                .rule('ts')
                .use('ts-loader')
                .loader('ts-loader')
                .tap((opts) => {
                    opts.transpileOnly = false;
                    opts.happyPackMode = false;
                    opts.configFile = 'tsconfig.build.json';
                    return opts;
                });
        }
    },
    parallel: false,
};

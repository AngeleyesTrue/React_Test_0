const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',

    // webpack의 출력을 디버깅 할 소스 맵을 사용하도록 설정합니다.
    devtool: "inline-source-map",

    devServer: {
        inline: true,
        hot: true
    },
});
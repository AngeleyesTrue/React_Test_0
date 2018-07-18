const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[hash].js",
        path: __dirname + "/dist"
    },

    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
    ],

    resolve: {
        // 확인 가능한 확장자로 '.ts' 및 '.tsx'를 추가합니다.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // '.ts' 또는 '.tsx' 확장자를 가진 모든 파일은 'awesome-typescript-loader'에 의해 처리됩니다.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // '.js' 파일의 모든 출력에는 'source-maps-loader'로 다시 처리된 소스 맵이 있습니다.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};
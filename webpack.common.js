const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    plugins: [
        new CleanWebpackPlugin(['dist']),
    ],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

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

    // 경로가 다음 중 하나와 일치하는 모듈을 임포트 경우
    // 해당하는 글로벌 변수가 있다고 가정하고 대신 사용하세요.
    // 이는 브라우저가 빌드와 라이브러리 사이에 캐시 할 수 있게 해주는
    // 모든 종속성을 번들로 묶는 것을 피할 수 있기 때문에 중요합니다.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
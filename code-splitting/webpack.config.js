var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: 'none', //production: 배포목적, development:개발목적 , none: 교육목적
  entry: './index.js', //변환대상 파일
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  //loader
  module: {
    rules: [
        //하나의 loader 규칙
      {
        test: /\.css$/, //모든 css 파일을 대상으로 아래 loader적용
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
        //css loader와 style loader 적용 (loader는 오른쪽에서 왼쪽 순서로 적용)
        // use: ['style-loader', 'css-loader'] //css loader: css가 웹펙 안으로 들어갈 수 있게 한다. ,
                                            //style loader: 웹펙 안에 들어가 있는 style code를 head안에 inline style로 넣어주는 것이다.
      }
    ]
  },
  //결과물에 대한 정보를 변형 후 제공
  plugins: [
    new MiniCssExtractPlugin()
  ],
}
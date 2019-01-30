const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 一句话理解 path和 publicPath的作用！！！！
// path 用来存放打包后文件的输出目录
// publicPath 用来定义静态资源的引用地址
module.exports = {
  cache: true,
  devtool: 'source-map',
  mode: 'development', // 会将 process.env.NODE_ENV 的值设为 development。
  // 启用 NamedChunksPlugin(） 和  NamedModulesPlugin()
  entry: {
    index: [

      // 开启 React 代码的模块热替换(HMR)
      'react-hot-loader/patch',

      // 为 webpack-dev-server 的环境打包代码
      // 然后连接到指定服务器域名与端口
      'webpack-dev-server/client?http://localhost:3000',

      // 为热替换(HMR)打包好代码
      // only- 意味着只有成功更新运行代码才会执行热替换(HMR)
      'webpack/hot/only-dev-server',

      // 我们 app 的入口文件
      './index.jsx',
      // './simpleReact.jsx',
      // './simpleStore.jsx',

    ],
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].js',

    // 输出的打包文件
    path: `${__dirname}/dist/assets/`,

    // 项目输出路径
    publicPath: '/assets/',

    // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
    chunkFilename: '[name].[chunkhash].js',
  },

  context: `${__dirname}/src`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          // 'babel-loader?cacheDirectory', 'eslint-loader',
          'babel-loader?cacheDirectory',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /^node_modules$/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'less-loader', options: { javascriptEnabled: true } },
        ],
        include: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
          { loader: 'less-loader', options: { javascriptEnabled: true } },
        ],
        exclude: /node_modules/,
      },
      {
        // 匹配.html文件
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href'],
            },
          },
        ],
        exclude: /^node_modules$/,
      },
      {
        test: /favicon\.png$/,
        use: [
          {
            // 使用file-loader
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
            },
          },
        ],
        exclude: /^node_modules$/,
      },
      {
        // 处理静态资源
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],

  },
  resolve: {
    extensions: ['.jsx', '.js', '.less', '.json'],
    alias: {
      '~': `${__dirname}/src`,
    },
  },
  externals: {
    axios: 'axios',
    'prop-types': 'PropTypes',
    'babel-polyfill': 'window',
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
  // 开启全局的模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './Template/index.html',
      filename: './index.html', // 生成的html存放路径，相对于 path
    }),
  ],
};

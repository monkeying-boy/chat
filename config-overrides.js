const { override, fixBabelImports,addWebpackAlias,addLessLoader  } = require('customize-cra');
const path = require("path");

module.exports =override(
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "src")
    }),
    addLessLoader({
        javascriptEnabled: true,
        localIdentName: '[local]--[hash:base64:5]'
    }),
    // (config)=>{ //暴露webpack的配置 config ,evn
    //     // 去掉打包生产map 文件
    //     // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    //     return config; 
    // }
)
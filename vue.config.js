module.exports = {
  "devServer":{
    "proxy": {
      "/api": {
      "target": 'https://api-sandbox.direct.yandex.com/json/v5/',
      "pathRewrite": { '^/api': '' },
      "changeOrigin": true,
      "secure": false
      },
      "/upload-image": {
        "target": 'https://pu.vk.com',
        "pathRewrite": { '^/upload-image': '' },
        "changeOrigin": true,
        "secure": false
      },
    }
  }
}
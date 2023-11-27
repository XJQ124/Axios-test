const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/open-apis',
        createProxyMiddleware({
            target: 'https://open.feishu.cn',
            changeOrigin: true,
        })
    );
};

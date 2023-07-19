const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('../config');
const { onError, onProxyReq, onProxyRes } = require('../services/proxy');

module.exports = {
    path: '/obsrv',
    name: 'obsrv',
    handler() {
        return createProxyMiddleware({
            headers: {
                "x-api-key": config.OBSRV_API_KEY
            },
            target: config.OBSRV_API_HOST,
            changeOrigin: true,
            ws: true
        })
    }
}
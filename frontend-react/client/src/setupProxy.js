const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log("Setup proxy to redirect /api to Nestjs apis");

  app.use(createProxyMiddleware("/api", { 
    target: process.env.NESTJS_PROXY_URL/*"http://localhost:3000"*/, 
    changeOrigin: true,
    pathRewrite: {'^/api' : ''}

  }));
  };
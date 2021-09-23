const { createProxyMiddleware } = require("http-proxy-middleware");

//const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/first/**", { target: "http://localhost:5000" })
  );
  // app.use(
  //   createProxyMiddleware("/auth/likes",{target:"http://localhost:5000"})
  // );

  // app.use(
  //   createProxyMiddleware("/dashboard", { target: "http://localhost:3000" })
  // );

  app.use(
    createProxyMiddleware("/updates/**", { target: "http://localhost:5000" })
  );
};

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

console.log(process.env.API_PORT)

const app = express();
const PORT = 8080;
const HOST = "localhost";

app.use('/api', createProxyMiddleware({
    target: `http://localhost:${process.env.API_PORT ? process.env.API_PORT : 4000}`,
    changeOrigin: true,
}));

app.use('/', createProxyMiddleware({
    target: `http://localhost:${process.env.WEB_PORT ? process.env.WEB_PORT : 3000}`,
    changeOrigin: true,
}));

app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});

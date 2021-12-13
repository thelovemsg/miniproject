const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require("http-proxy-middleware")
const port = 8080
const dev = process.env.NODE_ENV === 'development'
const app = next({ dev })
const handle = app.getRequestHandler()
const apiPaths = {
  '/api': {
    target: 'https://localhost:8080',
    pathRewrite: {
      '^/api': '/api'
    },
    changeOrigin: true
  }
}
app.prepare().then(() => {
  const server = express();
  if (dev) {
    console.log("dev");
    server.use('/api', createProxyMiddleware(apiPaths['/api']))
  }
  server.all('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}).catch(err => {
 console.log('Error:::::', err)
})
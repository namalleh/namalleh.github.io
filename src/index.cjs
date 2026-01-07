const { build, Server } = require('vite')

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const viteConfig = require("../vite.config.js")

const viteServer = new Server(viteConfig)
app.use(viteServer.expressRender)

if (isDev) {
  build(viteConfig)
}

// Listen the server
app.listen(port, '0.0.0.0')
console.log('Server listening on `localhost:' + port + '`.')
const express = require('express')
const app = express()

module.exports = app

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        acme-movie-api
      </body>
    </html>
    `)
})

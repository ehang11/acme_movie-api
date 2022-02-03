const app = require('./app')
const port = process.env.PORT || 3000
const {
  syncAndSeed,
  models: { Actor, Movie, Role },
} = require('./db')
app.listen(port, () => console.log(`listening on port ${port}`))

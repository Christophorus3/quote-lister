const express = require('express')
const favicon = require('express-favicon')
const path = require('path')


const port = process.env.port || 8080

const app = express()

//app.use(favicon(__dirname + "/build/favicon.ico"))

//app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, "build")))

// ping pong route - for test only.
app.get('/ping', (req, res) => {
  return res.send("pong")
})

app.get('/quote', (req, res) => {
  res.send('quote here.')
})

// serve the react app in index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})


app.listen(port)
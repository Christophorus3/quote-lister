const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('express-favicon')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const MongoClient = require('mongodb').MongoClient

// prepare MongoClient
const mongoUser = process.env.MONGO_USER
const mongoPwd = process.env.MONGO_PWD
const mongoDbName = process.env.MONGO_DB
const mongoUrl = `mongodb://${mongoUser}:${mongoPwd}@wottawa.at:27017/${mongoDbName}`

let db //holds mongo database

const port = process.env.port || 8080

const app = express()

//app.use(favicon(__dirname + "/build/favicon.ico"))

//app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, "build")))

//use body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// ping pong route - for test only.
app.get('/ping', (req, res) => {
  return res.send("pong")
})

app.get('/quotes', (req, res) => {
  db.collection('quotes').find().toArray((err, results) => {
    if(err) return res.send(err)

    res.send(results)
  })
})

app.post('/quote', (req, res) => {
  const {name, quote} = req.body
  console.log("name: ", name)
  console.log("quote: ", quote)
  //TODO: should definitly sanitize input here!!!

  //save quote to database:
  db.collection('quotes').save({name, quote}, (err, result) => {
    if (err) return console.log(err)

    console.log("saved to database: ", result)
    res.sendStatus(200)
  })


  //return res.sendStatus(200)
  //return res.redirect('/')
})

// serve the react app in index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

MongoClient.connect(mongoUrl, (err, client) => {
  if (err) {
    console.log(err)
  } else {
    console.log("connected to mongodb")
    db = client.db("quotes")

    app.listen(port, () => {
      console.log("quote api running on port " + port)
    })
  }
})
require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

const Article = require('../models/articleModel')
const User = require('../models/User')

const password = 'admin'
const salt = bcrypt.genSaltSync(bcryptSalt)
const hashPass = bcrypt.hashSync(password, salt)

mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err))

const user = new User({
    username: 'admin',
    password: hashPass
  })

const articles = new Article(
  [
    {
      owner: user._id,
      image: "https://static.e-stradivarius.net/5/photos2/2017/I/0/1/p/5150/245/660/5150245660_2_4_1.jpg?t=1506011275054",
      name:"jersey peluche granate",
      season: "otoño",
      colorsRange:"rojo",
      style:"casual",
      category:"top",
      notes:"regalo de mama por cumple 2017"
    },
    {
      owner: user._id,
      image: "https://static.e-stradivarius.net/5/photos2/2017/I/0/1/p/4956/447/660/4956447660_2_4_1.jpg?t=1506684252963",
      name:"jersey peluche granate",
      season: "otoño",
      colorsRange:"rojo",
      style:"casual",
      category:"bottom",
      notes:"regalo de mama por cumple 2017"
    },

  ]
)

User.create(user)
  .then(user => {
    console.log("user admin/admin created")
    return Article.create(articles)
  })
  .then(() => {
    console.log("articles created with owner admin")
    mongoose.connection.close()
  })
  .catch(err => console.log(err))

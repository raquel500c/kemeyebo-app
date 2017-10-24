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
mongoose.connect("mongodb://key:key@ds119685.mlab.com:19685/kemeyebo-app")
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err))

const user = new User({
    username: 'admin',
    password: hashPass
  })

const articles =[
  {
    owner: user._id,
    image: "https://static.e-stradivarius.net/5/photos2/2017/I/0/1/p/5150/245/660/5150245660_2_4_1.jpg?t=1506011275054",
    name:"jersey peluche granate",
    season: "otoño",
    colorsRange:"rojo",
    style:"trabajo",
    category:"parte de arriba",
    notes:"regalo de mama por cumple 2017"
  },
  {
    owner: user._id,
    image: "https://static.e-stradivarius.net/5/photos2/2017/I/0/1/p/4956/447/660/4956447660_2_4_1.jpg?t=1506684252963",
    name:"coulotte granate",
    season: "otoño",
    colorsRange:"rojo",
    style:"trabajo",
    category:"parte de abajo",
    notes:"regalo de mama por cumple 2017"
  },
  {
    owner: user._id,
    image: "https://static.e-stradivarius.net/5/photos2/2017/I/1/1/p/6837/241/040/6837241040_1_1_2.jpg?t=1506585486416",
    name:"botines cremallera",
    season: "otoño",
    colorsRange:"negro",
    style:"varios",
    category:"calzado",
    notes:"rebajas 2017"
  },
  {
    owner: user._id,
    image: "https://static.e-stradivarius.net/5/photos2/2017/I/0/1/p/3692/001/001/3692001001_1_1_2.jpg?t=1503488352654",
    name:"bandolera",
    season: "todas",
    colorsRange:"negro",
    style:"varios",
    category:"accesorio",
    notes:""
  },
  {
    owner: user._id,
    image: "https://static.e-stradivarius.net/5/photos2/2017/I/0/1/p/4952/792/001/4952792001_2_4_2.jpg?t=1505832984765",
    name:"pantalon encerado",
    season: "todas",
    colorsRange:"negro",
    style:"varios",
    category:"parte de abajo",
    notes:""
  },
  {
    owner: user._id,
    image: "https://static.e-stradivarius.net/5/photos2/2017/I/0/1/p/6185/170/004/6185170004_2_4_1.jpg?t=1503492893608",
    name:"camisa manga volantes",
    season: "otoño",
    colorsRange:"blanco",
    style:"varios",
    category:"parte de arriba",
    notes:"stradivarius"
  },
  {
    owner: user._id,
    image: "https://static.e-stradivarius.net/5/photos2/2017/I/0/1/p/6500/201/149/6500201149_2_4_2.jpg?t=1500546387622",
    name:"camiseta terciopelo flores",
    season: "todas",
    colorsRange:"negro",
    style:"varios",
    category:"parte de arriba",
    notes:""
  },
  {
    owner: user._id,
    image: "https://static.e-stradivarius.net/5/photos2/2017/I/0/1/p/4851/549/702/4851549702_2_4_2.jpg?t=1501171798885",
    name:"vaqueros roto tiro alto",
    season: "todas",
    colorsRange:"azul",
    style:"varios",
    category:"parte de abajo",
    notes:""
  },
  {
    owner: user._id,
    image: "https://static.e-stradivarius.net/5/photos2/2017/I/1/1/p/6811/241/040/6811241040_2_1_2.jpg?t=1506614629730",
    name:"botines planos tachas",
    season: "invierno",
    colorsRange:"negro",
    style:"informal",
    category:"calzado",
    notes:""
  },
  {
    owner: user._id,
    image: "https://static.e-stradivarius.net/5/photos2/2017/I/0/1/p/6355/171/001/6355171001_2_4_2.jpg?t=1504189675654",
    name:"mono culotte tirantes",
    season: "todas",
    colorsRange:"negro",
    style:"varios",
    category:"cuerpo entero",
    notes:""
  },
  {
    owner: user._id,
    image: "https://static.e-stradivarius.net/5/photos2/2017/I/0/1/p/3862/003/210/3862003210_2_4_2.jpg?t=1506600782883",
    name:"calcetines perlas",
    season: "invierno",
    colorsRange:"gris",
    style:"varios",
    category:"ropa interior",
    notes:""
  }

]

User.create(user)
  .then(user => {
    console.log("user admin/admin created")
    return Article.create(articles)
  })
  .then((art) => {
    console.log(art)
    mongoose.connection.close()
  })
  .catch(err => console.log(err))

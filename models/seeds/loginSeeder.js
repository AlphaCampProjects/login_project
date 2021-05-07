const mongoose = require('mongoose')
const Login = require('../login')
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

mongoose.connect('mongodb://localhost/login', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', () => {
  console('mongodb error!')
})
db.once('open', () => {
  for (let i = 0; i < users.length; i++) {
    Login.create({
      firstName: users[i].firstName,
      email: users[i].email,
      password: users[i].password
    })
  }
  console.log('mongodb connected!')
})

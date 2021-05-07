const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const db = mongoose.connection;
const Login = require('./models/login');

mongoose.connect('mongodb://localhost/login', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(bodyParser.urlencoded({ extended: true }));
db.on('error', () => {
  console('mongodb error!');
});
db.once('open', () => {
  console.log('mongodb connected!');
});
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  const { email, password } = req.body;
  let noUser = false;
  return Login.findOne({ email: email, password: password })
    .lean()
    .then(function (user) {
      if (user) {
        res.render('welcome', { user });
      } else {
        noUser = true;
        res.render('index', { noUser });
      }
    })
    .catch((error) => console.error(error));
});

app.get('/welcome', (req, res) => {
  res.render('/welcome');
});
app.listen(port, () => {
  console.log(`The express server is running on http://localhost:${port}`);
});

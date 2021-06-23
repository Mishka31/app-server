const express = require('express');
const exhbs = require('express-handlebars');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.engine('hbs', exhbs({ extname: 'hbs' }));

//Запросы пользователей
//http://localhost:777/
app.get('/', (req, res) => {
  res.render('home');
});
//http://localhost:777/about
app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(777, () => {
  console.log(`good!, running on port ${777}`);
});

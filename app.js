const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const PORT = process.env.PORT || 777;

const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.engine('hbs', exhbs({ extname: 'hbs' }));

//Запросы пользователей
//http://localhost:777/
app.get('/', (req, res) => {
  res.render('home', { cssFileName: 'home', titlePage: 'HOME' });
});
//http://localhost:777/about
app.get('/about', (req, res) => {
  res.render('about', { cssFileName: 'about', titlePage: 'About' });
});
//http://localhost:777/about
app.get('/products', (req, res) => {
  res.render('products', {
    products,
    cssFileName: 'products',
    titlePage: 'Goods',
  });
});
//http://localhost:777/product/ -- dynamic
app.get('/product/:productId', (req, res) => {
  const oneProduct = products.find(p => p.id === req.params.productId);
  res.render('product', {
    oneProduct,
    titlePage: 'product',
    cssFileName: 'onePro',
  });
});
//local host
app.listen(PORT, () => {
  console.log(`good!, running on port ${PORT}`);
});

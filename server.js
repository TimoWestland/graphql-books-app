const express = require('express');
const products = require('./app/routers/products');
const app = express();

app.listen(3000, function() {
  console.log('api works!');
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'app/views'));

app.use('/', products);

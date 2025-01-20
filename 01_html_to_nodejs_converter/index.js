require('dotenv').config();
const path = require("path")
const express = require('express');
const homeRoutes = require('./routes/home.route');
const aboutRoutes = require('./routes/about.route');
const contactRoutes = require('./routes/contact.route');
const productRoutes = require('./routes/product.route');
const mongoose  = require('mongoose');


const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

mongoose.connect(process.env.DB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
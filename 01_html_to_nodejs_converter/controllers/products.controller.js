const Product = require('../models/products.model');
const productsData = require('../data/product.json');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('products', {
      title: 'Our Products',
      products: products
    });
  } catch (error) {
    res.status(500).render('products', {
      title: 'Our Products',
      error: 'Error fetching products',
      products: []
    });
  }
};

exports.seedProducts = async (req, res) => {
  try {
    await Product.deleteMany({}); 
    await Product.insertMany(productsData.products);
    res.json({ message: 'Products seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error seeding products' });
  }
};
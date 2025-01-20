exports.getHome = (req, res) => {
    res.render('home', {
      title: 'Welcome to Our Website',
      message: 'Discover our amazing products and services'
    });
  };
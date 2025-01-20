exports.getAbout = (req, res) => {
    res.render('about', {
      title: 'About Us',
      content: 'We are a company dedicated to providing excellent products and services.'
    });
  };
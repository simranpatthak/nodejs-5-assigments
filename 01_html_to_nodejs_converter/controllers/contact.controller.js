const Contact = require('../models/contact.model');

exports.getContact = (req, res) => {
  res.render('contact', {
    title: 'Contact Us'
  });
};

exports.submitContact = async (req, res) => {
  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });
    await contact.save();
    res.redirect('/contact?success=true');
  } catch (error) {
    res.status(500).render('contact', {
      title: 'Contact Us',
      error: 'Error submitting form'
    });
  }
};
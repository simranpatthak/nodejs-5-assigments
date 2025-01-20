const fs = require('fs');
const addID = (req,res,next) => {
  const data = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
  const heroes = data.heroes;
  const maxId = heroes.reduce((max, hero) => Math.max(max, hero.id), 0);
  req.body.id = maxId + 1;
  next();
};

module.exports = {
  addID,
};

//+1

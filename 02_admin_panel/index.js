const express = require('express');
const fs = require('fs');
const { logger } = require('./middlewares/logger.middleware');
const { auth } = require('./middlewares/auth.middleware');
const { addID } = require('./middlewares/addID.middleware');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

const readDB = () => {
  return JSON.parse(fs.readFileSync('./db.json', 'utf8'));
};

const writeDB = (data) => {
  fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
};
app.post('/add/hero', addID, (req, res) => {
  try {
    const data = readDB();
    const newHero = {
      ...req.body,
      villains: req.body.villains || []
    };
    
    data.heroes.push(newHero);
    writeDB(data);
    
    res.json(data.heroes);
  } catch (error) {
    res.status(500).json({ error: "Error adding hero" });
  }
});

app.get('/heroes', (req, res) => {
  try {
    const data = readDB();
    res.json(data.heroes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching heroes" });
  }
});

app.patch('/update/villain/:hero_id', auth, (req, res) => {
  try {
    const data = readDB();
    const heroId = parseInt(req.params.hero_id);
    const heroIndex = data.heroes.findIndex(hero => hero.id === heroId);

    if (heroIndex === -1) {
      return res.status(404).json({ error: "Hero not found" });
    }

    data.heroes[heroIndex].villains = req.body.villains;
    writeDB(data);
    
    res.json(data.heroes[heroIndex]);
  } catch (error) {
    res.status(500).json({ error: "Error updating villains" });
  }
});

app.delete('/delete/hero/:hero_id', auth, (req, res) => {
  try {
    const data = readDB();
    const heroId = parseInt(req.params.hero_id);
    const heroIndex = data.heroes.findIndex(hero => hero.id === heroId);

    if (heroIndex === -1) {
      return res.status(404).json({ error: "Hero not found" });
    }

    data.heroes.splice(heroIndex, 1);
    writeDB(data);
    
    res.json(data.heroes);
  } catch (error) {
    res.status(500).json({ error: "Error deleting hero" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
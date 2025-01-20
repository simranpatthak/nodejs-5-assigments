require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const crudRoute = require('./routes/crud.route');
const app = express();
const port = process.env.PORT || 3000;
const userRoute = require("./routes/user.route")
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use("/api/auth",userRoute)
app.use("/api/crud",crudRoute)

app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
}); 
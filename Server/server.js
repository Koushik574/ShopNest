// const express = require('express');
// const { Pool } = require('pg');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// require('dotenv').config();



// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });


// app.use(bodyParser.json());
// app.use(cors());


// app.post('/api/contact', async (req, res) => {
//   const { username, mail, phnumber, message } = req.body;

//   try {
//     await pool.query('INSERT INTO contacts (username, mail, phnumber, message) VALUES ($1, $2, $3, $4)', [username, mail, phnumber, message]);
//     res.status(201).send('Contact saved');
//   } catch (error) {
//     console.error('Error saving contact:', error);
//     res.status(500).send('Server error');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });



const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(bodyParser.json());
app.use(cors({
  origin: 'https://shopnest-8qfn.onrender.com',
  optionsSuccessStatus: 200
}));

app.post('/api/contact', async (req, res) => {
  const { username, mail, phnumber, message } = req.body;

  try {
    await pool.query('INSERT INTO contacts (username, mail, phnumber, message) VALUES ($1, $2, $3, $4)', [username, mail, phnumber, message]);
    res.status(201).send('Contact saved');
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


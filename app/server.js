const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'myuser',
  host: 'db',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432,
});

app.get('/', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT NOW()');
    res.send(`Current time: ${result.rows[0].now}`);
  } finally {
    client.release();
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});


const express = require('express');
const app = express();

const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'postgres_db',
  password: 'password',
  port: 5432,
})

app.get('/', async(req, res) => {
  const { rows } = await pool.query('select * from users')
  res.send(rows)
});

const port = 3030;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
}); 

'use strict';
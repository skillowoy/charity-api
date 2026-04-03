const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'charity_fund'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Успішне підключення до БД charity_fund!');
});

app.get('/projects', (req, res) => {
  db.query('SELECT * FROM projects', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Цей коментар додано спеціально для тестування Pull Request
app.get('/test-pr', (req, res) => res.json({ message: "PR works!" }));

app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});

app.get('/donors', (req, res) => {
  db.query('SELECT * FROM donors', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/donors', (req, res) => {
  const { first_name, last_name, email, phone } = req.body;
  const query = 'INSERT INTO donors (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)';
  
  db.query(query, [first_name, last_name, email, phone], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Донора успішно додано!', donor_id: results.insertId });
  });
});

app.put('/donors/:id', (req, res) => {
  const { first_name, last_name, email, phone } = req.body;
  const { id } = req.params;
  const query = 'UPDATE donors SET first_name=?, last_name=?, email=?, phone=? WHERE donor_id=?';
  
  db.query(query, [first_name, last_name, email, phone, id], (err) => {
    if (err) throw err;
    res.json({ message: 'Дані донора оновлено!' });
  });
});

app.delete('/donors/:id', (req, res) => {
  const { id } = req.params;
  
  db.query('DELETE FROM donors WHERE donor_id=?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Донора видалено з бази!' });
  });
});
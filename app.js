// app.js - Express web application with SQL injection vulnerability
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000;

// Set up the database
const db = new sqlite3.Database(':memory:');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Initialize database with sample data
db.serialize(() => {
  db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT,
    is_admin INTEGER
  )`);
  
  // Add some sample data
  db.run(`INSERT INTO users (username, password, email, is_admin) VALUES 
    ('admin', 'admin123', 'admin@example.com', 1),
    ('user1', 'password123', 'user1@example.com', 0),
    ('user2', 'abc123', 'user2@example.com', 0),
    ('user3', 'qwerty', 'user3@example.com', 0)`);
    
  db.run(`CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT,
    price REAL
  )`);
  
  db.run(`INSERT INTO products (name, description, price) VALUES
    ('Laptop', 'High-performance laptop', 999.99),
    ('Smartphone', 'Latest model', 699.99),
    ('Tablet', '10-inch screen', 349.99),
    ('Headphones', 'Noise-cancelling', 199.99)`);
});

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// VULNERABLE ROUTE - SQL Injection in the search parameter
app.get('/search', (req, res) => {
  const searchTerm = req.query.term;
  
  // VULNERABLE CODE: Direct concatenation of user input into SQL query
  const query = `SELECT * FROM products WHERE name LIKE '%${searchTerm}%' OR description LIKE '%${searchTerm}%'`;
  
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    
    res.render('search', { products: rows, searchTerm });
  });
});

// VULNERABLE ROUTE - SQL Injection in login form
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  // VULNERABLE CODE: Direct concatenation of user input into SQL query
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  
  db.get(query, [], (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    
    if (user) {
      res.render('dashboard', { user });
    } else {
      res.render('index', { error: 'Invalid username or password' });
    }
  });
});

// Protected route
app.get('/admin', (req, res) => {
  // This would normally check session/authentication
  // But for this example, we'll just render the admin page
  db.all('SELECT * FROM users', [], (err, users) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    
    res.render('admin', { users });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Vulnerable app running at http://localhost:${port}`);
});

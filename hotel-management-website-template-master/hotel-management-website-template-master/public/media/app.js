const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hotel_management',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Routes

// Add a new customer
app.post('/customers', (req, res) => {
  const { name, email, phone } = req.body;
  const sql = 'INSERT INTO customers (name, email, phone) VALUES (?, ?, ?)';
  db.query(sql, [name, email, phone], (err, result) => {
    if (err) {
      res.status(500).send('Error adding customer');
    } else {
      res.status(201).send('Customer added successfully');
    }
  });
});

// Get all customers
app.get('/customers', (req, res) => {
  const sql = 'SELECT * FROM customers';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving customers');
    } else {
      res.json(results);
    }
  });
});

// Add a new room
app.post('/rooms', (req, res) => {
  const { room_number, room_type, price, status } = req.body;
  const sql = 'INSERT INTO rooms (room_number, room_type, price, status) VALUES (?, ?, ?, ?)';
  db.query(sql, [room_number, room_type, price, status], (err, result) => {
    if (err) {
      res.status(500).send('Error adding room');
    } else {
      res.status(201).send('Room added successfully');
    }
  });
});

// Get all rooms
app.get('/rooms', (req, res) => {
  const sql = 'SELECT * FROM rooms';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving rooms');
    } else {
      res.json(results);
    }
  });
});

// Create a booking
app.post('/bookings', (req, res) => {
  const { customer_id, room_id, check_in, check_out } = req.body;
  const sql =
    'INSERT INTO bookings (customer_id, room_id, check_in, check_out) VALUES (?, ?, ?, ?)';
  db.query(sql, [customer_id, room_id, check_in, check_out], (err, result) => {
    if (err) {
      res.status(500).send('Error creating booking');
    } else {
      res.status(201).send('Booking created successfully');
    }
  });
});

// Get all bookings
app.get('/bookings', (req, res) => {
  const sql = `
    SELECT bookings.id, customers.name AS customer_name, rooms.room_number, bookings.check_in, bookings.check_out 
    FROM bookings 
    JOIN customers ON bookings.customer_id = customers.id 
    JOIN rooms ON bookings.room_id = rooms.id
  `;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving bookings');
    } else {
      res.json(results);
    }
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

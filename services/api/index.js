// index.js
require('dotenv').config();
const express = require('express');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Holiday Shopping App API!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const sequelize = require('./config/database');

sequelize.authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL database.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const User = require('./models/User');

sequelize.sync() // { force: true } to drop tables and recreate them
  .then(() => {
    console.log('Database synced.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to sync the database:', err);
  });

  const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);

const userRoutes = require('./routes/user');

app.use('/api/user', userRoutes);
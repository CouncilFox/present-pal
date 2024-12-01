// routes/user.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const User = require('../models/User');

// Get current user's profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: { exclude: ['password_hash'] },
    });
    res.json(user);
  } catch (err) {
    console.error('Profile error:', err);
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;

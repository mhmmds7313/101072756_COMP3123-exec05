const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const userFilePath = path.join(__dirname, '..', 'user.json');

// GET /profile — return all user details from user.json
router.get('/profile', (req, res) => {
  fs.readFile(userFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read user file' });
    }
    res.json(JSON.parse(data));
  });
});

// POST /login — validate username and password
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile(userFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read user file' });
    }

    const user = JSON.parse(data);

    if (user.username !== username) {
      return res.json({ status: false, message: 'User Name is invalid' });
    }

    if (user.password !== password) {
      return res.json({ status: false, message: 'Password is invalid' });
    }

    res.json({ status: true, message: 'User Is valid' });
  });
});

// GET /logout/:username — return HTML message
router.get('/logout/:username', (req, res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = router;

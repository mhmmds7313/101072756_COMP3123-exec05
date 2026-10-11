const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const userRouter = require('./routes/users');

const PORT = process.env.port || 8081;

// Body parser for JSON
app.use(express.json());

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// User router
app.use('/api/v1/user', userRouter);

// GET /home
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Error handling middleware (last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + PORT);
});

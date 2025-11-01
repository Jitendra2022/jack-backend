// app.js
import express from 'express';  // if using ES Modules ("type": "module" in package.json)
// const express = require('express'); // use this instead if you're not using ES Modules

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example route
app.get('/', (req, res) => {
  res.send('Hello, world! Express server is running 🚀');
});

// Example API route
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});

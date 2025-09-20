const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db.js');
const rateLimiter = require('./middleWare/rateLimiter.js');
const notesRoutes = require('./Routes/notesRoutes.js');

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(rateLimiter);
app.use('/api/notes', notesRoutes);


const port = process.env.PORT || 3000;

// Start server after DB connects
connectDB().then(() => {
  app.listen(port, () => {
    console.log(` Server running on port ${port}`);
  });
});

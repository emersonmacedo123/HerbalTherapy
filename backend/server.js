const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection using environment variable
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Test route
app.get('/', (req, res) => {
    res.send('Bem-vindo ao backend do Herbal Therapy!');
});

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
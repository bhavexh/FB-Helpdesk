const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connectDB');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes

app.use('/api/users', userRoutes);


app.listen(PORT, () => {
  console.log('Listening on port 3000');
})
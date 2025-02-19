const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');

const app = express();
const port = process.env.PORT || 5005;

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/', (req, res) => {
    res.send("Hello!")
});

// API routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

mongoose.set("strictQuery", true);

mongoose.connect('mongodb+srv://sohailhazarysiam:hFRL0GISD0fUnKF3@portfolio.bxayt.mongodb.net/?retryWrites=true&w=majority&appName=portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => console.log(err));

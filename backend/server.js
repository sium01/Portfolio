const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');

const app = express();
const port =1208;

app.use(bodyParser.json());
app.use(cors());

mongoose.set("strictQuery", true); // Warning fix

mongoose.connect('mongodb+srv://sohailhazarysiam:hFRL0GISD0fUnKF3@portfolio.bxayt.mongodb.net/?retryWrites=true&w=majority&appName=portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => console.log(err));

app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
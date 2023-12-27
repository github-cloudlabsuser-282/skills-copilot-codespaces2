// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Import data
const comments = require('./comments.json');

// Create server
const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.json(comments);
});

app.post('/', (req, res) => {
    const { name, comment } = req.body;
    const newComment = {
        name,
        comment,
        id: comments.length + 1,
    };
    comments.push(newComment);
    res.json(newComment);
});

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = comments.findIndex((comment) => comment.id === Number(id));
    comments.splice(index, 1);
    res.json(id);
});

// Start server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint to multiply two numbers
app.post('/api/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    
    // Validate inputs
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Please provide two valid numbers' });
    }

    const result = num1 * num2;
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
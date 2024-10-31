// routes/computation.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Get the value from query or generate a random number
    const x = req.query.x ? parseFloat(req.query.x) : Math.random();
    const result = Math.asin(x);
    
    res.send(`asin applied to ${x} is ${result}`);
});

module.exports = router;

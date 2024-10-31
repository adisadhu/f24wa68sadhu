// Inside your computation route file, e.g., computation.js
const express = require('express');
const router = express.Router();

router.get('/computation', (req, res) => {
    // Get value from query or generate random
    const x = req.query.x ? parseFloat(req.query.x) : Math.random();
    const result = Math.asin(x);
    
    res.send(`asin applied to ${x} is ${result}`);
});

module.exports = router;

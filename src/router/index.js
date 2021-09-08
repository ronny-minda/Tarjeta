const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', { titulo: 'primera web' });
});


module.exports = router;
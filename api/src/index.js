const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.get('/api', function(req, res) {
    console.log('Get is called');
    res.json({ message: 'docker is easy with nodemon' })
    res.end();
})

app.listen(port, function() {
    console.log(`Server is listening on port http://localhost:${port}...`);
})
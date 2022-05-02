const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const database = require('./modules/database')

let connectToDB = async () => {
    console.info('Connecting to DB...');
    await database.connect();
    console.info('Connected to the DB.')

    const router = require('./router');
    
    app.get('/api', function(req, res) {
        console.log('Get is called');
        res.json({ message: 'docker is easy with nodemon!' })
        res.end();
    })

    app.use(router.path, router.router);
    
    app.listen(port, function() {
        console.log(`Server is listening on port http://localhost:${port}...`);
    })
}

connectToDB();


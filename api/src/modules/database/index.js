const { MongoClient } = require('mongodb');

let connectionString = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017` 

class Database {
    async connect() {
        console.info(connectionString)
        const client = new MongoClient(connectionString, {
            useUnifiedTopology : true,
            //authSource : 'mydb'
        })
        this.connection = await client.connect();
    }

    async disconnect() {
        this.connection.close();
    }

    get DB() {
        try {
            return this.connection.db('mydb')
        }
        catch (e) {
            console.error('Database unavailable', e.stack);
            return null;
        }
    }
}

module.exports = new Database();


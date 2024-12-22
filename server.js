const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/devops';

async function startServer() {
    try {
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('devops');

        app.get('/api/data', async (req, res) => {
            try {
                const data = await db.collection('cicd').find({}).toArray();
                res.json(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                res.status(500).send('Error fetching data from MongoDB');
            }
        });

        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    } catch (err) {
        console.error('Error connecting to MongoDB: ', err);
    }
}

startServer();

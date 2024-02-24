const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const PORT = 5500;
const MONGODB_URI = "mongodb+srv://mendozaa01:1m6VR6pTol0hLtb3@cluster01.ts9ryvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!email || !email.includes('@') ||
        !name ||
        !message
    ) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  try {
    const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });
    await client.connect();

    const db = client.db();
    const emailsCollection = db.collection('messages');

    const result = await emailsCollection.insertOne({ name, email, subject, message });

    client.close();

    res.json({ message: 'Email added successfully', result });
  } catch (error) {
    console.error('Error inserting email:', error);
    res.status(500).json({ error: 'contact.js error occurred' });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
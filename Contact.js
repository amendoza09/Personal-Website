const MongoClient = require('mongodb').MongoClient; 

use ('Cluster01');

// Connection URL 
const url = "mongodb+srv://mendozaa01:1m6VR6pTol0hLtb3@cluster01.ts9ryvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01"; 
 
// Connect to the server 
MongoClient.connect(url, function(err, client) { 
  // Handle any connection errors 
  if(err) { 
    console.log(err); 
    return; 
  } 
 
  // Get the database 
  const db = client.db('Emails'); 
 
  // Get the collection 
  const collection = db.collection('messages'); 
 
  const { email, name, message } = req.body;
  // Create a new entry 
  const newMessage = {
    name,
    email,
    message,
  };
 
  // Add the entry to the collection 
  collection.insertOne(newMessage, function(err, result) { 
    // Handle any errors 
    if(err) { 
      console.log(err); 
      return; 
    } 
 
    // Log the result 
    console.log(result); 
  }); 
 
  // Close the connection 
  client.close(); 
}); 
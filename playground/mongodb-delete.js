//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

   if (err) {
   	  return console.log('Unable to connect to MongoDB server');
   }
   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp')

   db.collection('Users').deleteMany({name: 'mike'}).then((result) => {
   	 console.log(result)
   });

   db.collection('Users').deleteOne({name: 'mike'}).then((result) => {
   	 console.log(result)
   });

   db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
   	 console.log(result)
   }, (err) => {
   	 console.log(err)
   })

   db.collection('Users').deleteMany({name: 'Andrew'});

   db.collection('Users').findOneAndDelete({
   	 _id: 123
   	 
   }).then((results) => {
   	 console.log(JSON.stringify(results, undefined, 2))
   })

});



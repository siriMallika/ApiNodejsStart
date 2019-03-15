let Mongodb = require('./db/Mongodb');

let db = new Mongodb({dbName: 'comedkku', collectionName:'students'});
db.Connect((isConnected) => {
   db.Insert({firtName:'Apaichon'}, (isInserted) =>  {
       console.log(isInserted);
       db.Close();
   })
})


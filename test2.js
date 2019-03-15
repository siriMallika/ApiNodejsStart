function a () {
    console.log('a');
    }
    
    function b () {
       console.log('b');
    }
    
    function c () {
       console.log('c');
    }
    
    function connectDb() {
       const MongoClient = require('mongodb').MongoClient;
       const assert = require('assert');
    
       // Connection URL
       const url = 'mongodb://localhost:27017';
    
       // Database Name
       const dbName = 'comedkku';
    
       // Create a new MongoClient
       const client = new MongoClient(url);
    
    // Use connect method to connect to the Server
       client.connect(function(err, client) {
           console.log('connected');
           client.close();
       })
    }

    function getData (timeout,callback){
        console.log('timeout');
        setTimeout(() => {
            callback('exit');
        }, timeout);
    }
    
    getData(10,(isExist)=>console.log(isExist));
    connectDb();
    a();
    b();
    c();
    
    
    
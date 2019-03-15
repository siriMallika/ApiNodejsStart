class Mongodb {
    constructor(config){
        this.MongoClient = require('mongodb').MongoClient;
        this.assert = require('assert');
        this.url = 'mongodb://localhost:27017';
        this.dbName = config.dbName;
        this.collectionName = config.collectionName;
        this.client = new this.MongoClient(this.url);
    }
 
    Connect(callback){
        this.client.connect((err, client) => {
            this.assert.equal(null, err);
            console.log('connected');
            this.client = client;
            callback(client);
        })
    }
 
    Insert(data, callback) {
        const db = this.client.db(this.dbName);
 
        // Insert a single document
        db.collection(this.collectionName).insertOne(data, (err, r) => {
            this.assert.equal(null, err);
            this.assert.equal(1, r.insertedCount);
            callback(r.insertedCount);
        })
    }
 
    Close() {
        this.client.close();
    }
 
 }
 
 module.exports = Mongodb;
 
 
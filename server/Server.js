class Server {
    constructor () {
        let express = require('express');
        //แปลงข้อมูลใน Body จาก json หรือ รูปแบบอื่น
        let bodyParser = require('body-parser');
        this.app = new express();
        this.app.use(bodyParser.json());
        this.Port = 3000;
        this.app.listen(this.Port);
        this.Init();
        console.log(`Service is running on port ${this.Port}.`)
    }
    Init () {
        //ถ้ามี client ส่งมาที่ http://localhost:3000/ เรียกว่า root path
        this.app.get('/', (req, res) => {
            res.send('Hello NodeJS');
        })

        //ถ้ามี client ส่งมาที่ http://localhost:3000/kku 
        this.app.get('/kku', (req, res) => {
            res.send('Hello KKU');
        })
    }
 }
 
 module.exports = Server;
 
 
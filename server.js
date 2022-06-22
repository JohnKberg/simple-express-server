const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require('cors')
const app = express();

//------------------------------
// Basic settings
//------------------------------
const port = 8080;

//------------------------------
// Apply middleware
//------------------------------
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));    //Parser for requests with Content-type: application/x-www-form-urlencoded
// app.use(bodyParser.json());                          //Parser for requests with Content-type: application/json

// add router in the Express app.
app.use("/", router);

//---------------------------------------
// Route handler - HTTP POST to /Send
//---------------------------------------
router.post('/Send', (request, response) => {
    
    // console.log(request.headers);
    console.log('.....Request Content-type.......')
    console.log(request.headers['content-type']);
    // console.log(request.hostname);
    console.log('.....Raw body.......');
    console.log(request.body);
    // console.log('.....Encoded.......');
    // console.log(request.body.EncodeData);
    console.log('.....Decoded body.EncodeData.......');
    var o = JSON.parse(Buffer.from(request.body.EncodeData, 'base64').toString('utf-8'));
    console.log(o);
    
    console.log('.....Encoded obj.Data.......');
    console.log(o.Data);
    console.log('.....Decoded obj.Data.......');
    var odata = Buffer.from(o.Data, 'base64').toString('utf-8');
    console.log(odata);

    console.log('.....Decoded obj.IP.......');
    var oip = Buffer.from(o.IP, 'base64').toString('utf-8');
    console.log(oip);
    
    response.json(`{'key':'${request.app.name}'}`)
    response.end('');
});

//------------------------------
// Start Express server
//------------------------------

app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});


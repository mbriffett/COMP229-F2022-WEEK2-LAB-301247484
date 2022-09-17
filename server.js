// Matthew Briffett 301247484 COMP229 Centennial College Fall 2022

const connect = require('connect');

//Instantiate app server
const app = connect();

//custom middleware
function helloText(req, res, next) {
    res.setHeader('Content-Type','text/plain');
    res.end('Hello from NodeJS Application');
}

function helloHTML(req, res, next){
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Hello from NodeJS Application as html</h1>');
}

function helloJSON(req, res, next){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({ 
        "message" : "Hello from NodeJS Application as json" 
    }));
}

// add middleware to connect application
app.use('/html', helloHTML);
app.use('/json', helloJSON);
app.use('/', helloText)

//Start the server
app.listen(3000);

console.log("Server running at http://localhost:3000");
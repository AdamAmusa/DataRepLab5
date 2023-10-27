const express = require('express')
const app = express()
const port = 4000


//for http request we can parse the data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/name', (req, res) =>{
    //first name and lastname is responded from the server as html content using the POST method
    res.send("Hello " + req.body.fname + " " + req.body.lname)
})


app.get('/name', (req, res)=>{
     //first name and lastname is responded from the server as html content using the GET method
    res.send('Hello ' + req.query.fname + " " + req.query.lname)

})
    

//returns html page from a file directory when queried 
app.get('/test', (req, res) => {

    res.sendFile(__dirname + '/index.html');

})


//Client request url and server responds with json data
app.get('/api/books', (req, res) => {
    //Json data that will be displayed on web page
    const data = [
        {
            "books": [
                {
                    "title": "Learn Git in a Month of Lunches",
                    "isbn": "1617292419",
                    "pageCount": 0,
                    "thumbnailUrl":
                        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                    "status": "MEAP",
                    "authors": ["Rick Umali"],
                    "categories": []
                },
                {
                    "title": "MongoDB in Action, Second Edition",
                    "isbn": "1617291609",
                    "pageCount": 0,
                    "thumbnailUrl":
                        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
                    "status": "MEAP",
                    "authors": [
                        "Kyle Banker",
                        "Peter Bakkum",
                        "Tim Hawkins",
                        "Shaun Verch",
                        "Douglas Garrett"
                    ],
                    "categories": []
                },
                {
                    "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                    "isbn": "1617292036",
                    "pageCount": 0,
                    "thumbnailUrl":
                        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
                    "status": "MEAP",
                    "authors": ["Simon Holmes"],
                    "categories": []
                }
            ]
        }
    ]
    //responds with json data
    res.json({ myBooks: data, "Message": "Hello from server.js" })
})

//Client sends a request and server responds with "Welcome to Data Representation and Querying"
app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Representation and Querying')
})

//Client sends a request and server responds with "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Client sends a request and server responds with good bye
app.get('/whatever', (req, res) => {
    res.send("Good Bye!")
})

//name is passed as a parameter in the url and and the data is returned in the web page
/*app.get('/hello/:name', (req, res) => {
    res.send("Hello " + req.params.name)
})*/



//Server listens on port 4000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




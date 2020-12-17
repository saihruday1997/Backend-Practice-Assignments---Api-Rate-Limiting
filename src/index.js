const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());
let posts = require("./initialData");

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/posts", (req, res) => {
    let arr = posts.slice(0, 10);
    res.status(200).send(arr);
});

app.get("/posts?max=15", (req, res) => {
    let arr = posts.slice(0, 15);
    res.status(200).send(arr);
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;

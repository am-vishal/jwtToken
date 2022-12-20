const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
const jwt = require('jsonwebtoken');

app.get("/", function (req, res) {
    res.json({ message: "Hey" })
})

app.post("/tokenGenerate", (req, res) => {
    const user = {
        id: 1,
        username: "Vishal",
        email: "vk@cn.com"
    }
    jwt.sign({ foo: "bar" }, 'secret', function (err, token) {
        if (err) {
            res.status(403);
        } else {
            res.json({ token })
        }
    })
})


app.listen(port, function (err) {
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})

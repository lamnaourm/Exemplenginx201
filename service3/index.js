const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Reponse de service 3");
})

app.listen(3002, () => {
    console.log("Server 3 started");
})
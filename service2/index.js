const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Reponse de service 2");
})

app.listen(3001, () => {
    console.log("Server 2 started");
})
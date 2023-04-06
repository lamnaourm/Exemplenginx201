const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Reponse de service 1");
})

app.listen(3000, () => {
    console.log("Server 1 started");
})
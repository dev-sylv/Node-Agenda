const express = require("express")

const cors = require("cors");
const { default: agenda } = require("./Config/db");

const port = 4000;

const app = express();

app.use(express.json());
app.use(cors())

app.listen(port, () =>{
    console.log("")
    console.log("Listening to server on port", port)
})

// It offers features like concurrent jobs, delayed jobs, repeatable jobs, etc. powered with MongoDB.
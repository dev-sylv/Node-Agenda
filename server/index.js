const express = require("express")

const cors = require("cors")

import { agenda } from "./Config/db";
import router from "./Routes/userroutes";

const port = 4000;

const app = express();
agenda()

app.use(express.json());
app.use(cors());

app.use("/api", router)

app.listen(port, () =>{
    console.log("")
    console.log("Listening to server on port", port)
})

// It offers features like concurrent jobs, delayed jobs, repeatable jobs, etc. powered with MongoDB.
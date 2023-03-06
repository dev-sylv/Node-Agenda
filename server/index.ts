import express, { Application, Request, Response} from "express";

import cors from "cors";

const port: number = 4000;

const app: Application = express();

app.use(express.json());
app.use(cors());

app.listen(port, () =>{
    console.log("Listening to server on port", port)
})
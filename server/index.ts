import express, { Application, Request, Response} from "express";

import cors from "cors";
import { DBconnect } from "./Config/db";

const port: number = 4000;

const app: Application = express();
DBconnect()

app.use(express.json());
app.use(cors());

app.listen(port, () =>{
    console.log("")
    console.log("Listening to server on port", port)
})
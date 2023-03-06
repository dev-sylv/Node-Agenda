import mongoose from "mongoose";

import agenda from "agenda";

const agendastring = "mongodb://localhost/AgendaTutorial"

export const DBconnect = async() =>{
    try {
        const connectstring = await mongoose.connect(agendastring);
        console.log(`DB is connected to ${connectstring.connection.host}`)
    } catch (error) {
        console.log(`An error occured in connecting DB to ${agendastring} `)
    }
}
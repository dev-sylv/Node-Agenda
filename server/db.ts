import mongoose from "mongoose";

import Agenda from "agenda";

const agendastring = "mongodb://localhost/AgendaTutorial"

export const agenda = new Agenda({db: { address: agendastring }})

export const DBconnect = async() =>{
    try {
        const connectstring = await mongoose.connect(agendastring);
        console.log(`DB is connected to ${connectstring.connection.host}`)
    } catch (error) {
        console.log(`An error occured in connecting DB to ${agendastring} `)
    }
}
// import { model, Document, Schema} from "mongoose";

// import mongoose from "mongoose";

const mongoose = require("mongoose")



// interface UserData {
//     name: string;
//     email: string;
//     password: string
// }

// interface MainUserData extends UserData, Document{};

const UserSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
},
{
    timestamps: true
});

const userModels = mongoose.model("AllUsers", UserSchema)

module.exports =  userModels
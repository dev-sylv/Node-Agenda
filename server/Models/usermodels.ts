import { model, Document, Schema} from "mongoose";

interface UserData {
    name: string;
    email: string;
    password: string
}

interface MainUserData extends UserData, Document{};

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
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

const userModels = model<MainUserData>("AllUsers", UserSchema)

export default userModels
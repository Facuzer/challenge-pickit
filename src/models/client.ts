import { model, Schema, Document, Types} from "mongoose";

export interface IClient extends Document{
    _id: Types.ObjectId
    name: String,
    last_name: String
}

const clientSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    last_name:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    }
})

export default model<IClient>("Client", clientSchema)
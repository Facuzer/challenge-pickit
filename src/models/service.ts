import { model, Schema, Document, Types} from "mongoose";

export interface IService extends Document{
    _id: Types.ObjectId
    name: String,
    cost: Number
}

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    cost:{
        type: Number,
        required: true,
    }
})

export default model<IService>("Service", serviceSchema)
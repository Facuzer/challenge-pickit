import { model, Schema, Document, SchemaTypes, Types} from "mongoose";

export interface ICar extends Document{
    _id: Types.ObjectId,
    brand: String,
    model: String,
    year: Number,
    plate: String,
    color: String,
    owner: Types.ObjectId
}

const carSchema = new Schema({
    brand: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    model:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    year:{
        type: Number,
        required: true
    },
    plate:{
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        unique: true
    },
    color:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    owner: {
        type: SchemaTypes.ObjectId,
        ref: "Client"
    }
})

export default model<ICar>("Car", carSchema)
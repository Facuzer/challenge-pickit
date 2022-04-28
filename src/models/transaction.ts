import { model, Schema, Document, SchemaTypes, Types} from "mongoose";

export interface ITransaction extends Document{
    _id: Types.ObjectId
    car: Types.ObjectId,
    services: [Types.ObjectId],
    total: Number
}

const transactionSchema = new Schema({
    car: {
        type: SchemaTypes.ObjectId,
        ref: "Car",
        required: true,
    },
    services:{
        type: [SchemaTypes.ObjectId],
        ref: "Service",
        required: true
    },
    createdAt:{
        type: Date,
        inmutable: true,
        default: () => Date.now()
    },
    total:{
        type: Number,
        required: true
    }
})



export default model<ITransaction>("Transaction", transactionSchema)
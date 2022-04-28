import Transaction, { ITransaction } from "../models/transaction"
import { Types } from "mongoose";
import Service, {IService} from "../models/service";
import Car from "../models/car";
import Client from "../models/client";
export class TransactionService{
    async create(transaction: any){
        let car = await Car.findById(transaction.car);
        if(!car){
            throw "El auto asignado a la transacción no existe"
        }
        let paintService = await Service.findOne({name: "pintura"}).lean();
        if(!paintService){
            const newTransaction= new Transaction(transaction);
            return await newTransaction.save();
        }
        let hasPaintingService = (transaction.services).includes(paintService._id.toString());
        if(hasPaintingService && car.color === "gris"){
            throw("No se le puede hacer un servicio de pintura a un auto gris")
        }
        await this.calculateTotal(transaction);
        const newTransaction = new Transaction(transaction);
        await newTransaction.save();
        return newTransaction;
    }

    async getAll(){
        const transactions = await Transaction.find().populate(["services", "car"]);
        return transactions;
    }

    async getByCar(id: String){
        const transactions = await Transaction.find({car: id}).populate(["services", "car"]);
        return transactions;
    }

    async calculateTotal(transaction: any){
        let total = 0;
        await Promise.all(transaction.services.map(async (service: Types.ObjectId) => {
            let serviceObject = await Service.findById(service);
            total += Number(serviceObject?.cost) || 0
        }));
        transaction.total = total;
    }
}

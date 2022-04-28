import {Request, Response} from "express"
import { TransactionService } from "../services/Transaction"

export const create = async (req: Request, res: Response)=>{
    try{
        const newTransaction = await new TransactionService().create(req.body)
        return res.status(201).json(newTransaction);
    }
    catch(e: any){
        console.error(e);
        res.status(409).json({ok:false, status: 409, message: e.message || e})
    }
}

export const getAll = async (req: Request, res: Response)=>{
    try{
        let transactions = await new TransactionService().getAll();
        return res.status(201).json(transactions);
    }
    catch(e: any){
        console.error(e);
        res.status(500).json({ok:false, status: 500, message: e.message || e})
    }
}

export const getByCar = async (req: Request, res: Response)=>{
    try{
        let transactions = await new TransactionService().getByCar(req.params.id)
        return res.status(201).json(transactions);
    }
    catch(e: any){
        console.error(e);
        res.status(500).json({ok:false, status: 500, message: e.message || e})
    }
}
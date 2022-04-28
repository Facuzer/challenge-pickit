import {Request, Response} from "express"
import Client, { IClient } from "../models/client";
import { ClientService } from "../services/Client";
export const create = async (req: Request, res: Response)=>{
    try{
        const newClient = await new ClientService().create(req.body);
        return res.status(201).json(newClient)
    }
    catch(e: any){
        console.error(e);
        res.status(500).json({ok:false, status: 500, message: e.message || e})
    }
}

export const getAll = async (req: Request, res: Response)=>{
    try{
        const clients = await new ClientService().getAll();
        return res.status(201).json(clients);
    }
    catch(e: any){
        console.error(e);
        res.status(500).json({ok:false, status: 500, message: e.message || e})
    }
}
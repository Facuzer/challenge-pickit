import {Request, Response} from "express"
import Service from "../models/service";
export const getAll = async(req: Request, res: Response)=>{
    try{
        let services = await Service.find();
        return res.status(200).json(services);
    }
    catch(e: any){
        console.error(e);
        res.status(500).json({ok:false, status: 500, message: e.message || e})
    }
}
import {Request, Response} from "express"
import Car, { ICar } from "../models/car"
import { CarService } from "../services/Car";
import mongoose from "mongoose";

export const create = async(req: Request, res: Response)=>{
    try{
        let newCar = await new CarService().create(req.body);
        return res.status(201).json(newCar)
    }
    catch(e: any){
        console.error(e);
        res.status(500).json({ok:false, status: 500, message: e.message || e})
    }
}

export const remove = async (req: Request, res: Response)=>{
    try{
        let removed = await new CarService().remove(req.params.id);
        return res.status(201).json(removed)
    }
    catch(e: any){
        console.error(e);
        res.status(500).json({ok:false, status: 500, message: e.message || e})
    }
}

export const update = async(req: Request, res: Response)=>{
   try{
        await new CarService().update(req.params.id, req.body);
        return res.status(200).json({message:"Auto actualizado"});
    }
    catch(e: any){
        console.error(e);
        res.status(409).json({ok:false, status: 409, message: e.message || e})
    }
}

export const getAll = async (req: Request, res: Response)=>{
    try{
        let cars = await new CarService().getAll();
        return res.status(200).json(cars);
    }
    catch(e: any){
        console.error(e);
        res.status(500).json({ok:false, status: 500, message: e.message || e})
    }
}

export const get = async (req: Request, res: Response)=>{
    try{
        let foundCar = await new CarService().get(req.params.id);
        if(!foundCar){
            return res.status(404).json({ok:false, status: 404, message:"Auto no encontrado"});
        }
        return res.status(200).json(foundCar);
    }
    catch(e: any){
        console.error(e);
        if(e instanceof mongoose.Error.CastError){
            return res.status(404).json({ok:false, status: 404, message:"Auto no encontrado"});
        }
        res.status(500).json({ok:false, status: 500, message: e.message || e})
    }
}





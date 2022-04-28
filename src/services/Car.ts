import Car, { ICar } from "../models/car";
import Client from "../models/client";
import {Error} from "mongoose";
export class CarService{
    async create(car: any){
        let newCar = new Car(car);
        await newCar.save();
        return newCar;
    }

    async remove(id: String){
        let removed = await Car.findByIdAndRemove(id);
        return removed;
    }

    async update(id: String, updateData: any){
        if(updateData.owner && !await Client.findById(updateData.owner)){
            throw("El propietario ingresado no existe en la base");
        }
        await Car.findByIdAndUpdate(id, updateData);   
    }

    async getAll(){
        let foundCar = await Car.find().populate("owner");
        return foundCar;
    }

    async get(id: String){
        let foundCar = await Car.findById(id).populate("owner");
        return foundCar;
    }
}
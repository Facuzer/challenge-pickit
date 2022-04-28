import mongoose from "mongoose";
import Service from "./models/service";
import config from "./config/config";


mongoose.connect(config.DB.URI);

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("DATABASE CONNECTED");
})

connection.on("error", (err)=>{
    console.error(err);
    process.exit(0);
})

async function createDatabaseServices(){
    if(!await Service.findOne()){
        await Promise.all(config.SERVICES.map(async(service)=>{
            let serviceObject = new Service(service)
            await serviceObject.save();
        }))
    }
}

createDatabaseServices();
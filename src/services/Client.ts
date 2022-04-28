import Client, {IClient} from "../models/client";
export class ClientService{
    async create(client: any){
        let newClient = new Client(client);
        await newClient.save();
        return newClient;
    }  

    async getAll(){
        let clients = await Client.find();
        return clients;
    }
}
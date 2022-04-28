import express from "express";
import morgan from "morgan";
import cors from "cors"
import carRoutes from "./routes/car.routes";
import clientRoutes from "./routes/client.routes";
import transactionRoutes from "./routes/transaction.routes";
import serviceRoutes from "./routes/service.routes";

const app = express();


app.set("port", process.env.PORT || 3000);



app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get("/", (req, res)=>{
    res.send(`API RUNNING ON http://localhost${app.get("port")}`)
});

app.use("/api", [carRoutes, clientRoutes, transactionRoutes, serviceRoutes]);


export default app;
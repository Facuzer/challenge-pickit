import app from "./app";
import "./datadase";

app.listen(app.get("port"));
console.log("Server on port: ", app.get("port"));

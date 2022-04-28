export default {
    DB:{
        URI: process.env.MONGODB_URI || "mongodb://localhost/pickit-challenge"
    },
    SERVICES:[{
        name: "Cambio de Aceite",
        cost: 1000
    },{
        name: "Cambio de Filtro",
        cost: 1200 
    },
    {
        name: "Cambio de Correa",
        cost: 3000 
    },{
        name: "Revisión General",
        cost: 1000 
    },{
        name: "Pintura",
        cost: 4000
    },
    {
        name: "Otro",
        cost: 3500 
    }
]
}
/* importo el expres para no usar el required - configuro en el package json que el type se4a module */
import express from "express";

/* 1 - Configurar un PUERTO */
const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log("Estoy en el puerto " + app.get("port"))
})

/* 2 - Configurar los MIDDLEWARES - funciones que le dan "habilidades al backend" */

/* 3 - Configurar las RUTAS */

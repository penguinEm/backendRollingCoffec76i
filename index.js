/* importo el expres para no usar el required - configuro en el package json que el type se4a module */
import express from "express";

import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
/* imports para construir las rutas hacia el index (configuracion D de los middlewares) */
import path from "path";
import { fileURLToPath } from "url";
import productosRouter from "./src/routes/productos.routes.js";

//! 1 - Configurar un PUERTO
const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

//! 2 - Configurar los MIDDLEWARES - funciones que le dan "habilidades al backend"
//a - el primero es importar dotenv para procesar variables de entorno
//b - cors: permite obtener configuraciones remotas
app.use(cors());
//c - morgan: obtenemos informacion extra en la terminal (que tipo de solicitud se realizo y que respuesta damos)
app.use(morgan("dev"));
//d - express: interpreta el formato json
app.use(express.json());
//e - express: interpreta como acceder a los datos del body del request
app.use(express.urlencoded({ extended: true }));
//f - express: interpretar la ubicacion del index.html desde public
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

//! 3 - Configurar las RUTAS
//http://localhost:4001/

app.use("/api", productosRouter);

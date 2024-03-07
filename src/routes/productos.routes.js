/* Instancio el enrutador de express, el cual me permitira crear rutas */
import { Router } from "express";
import { listarProductos } from "../controllers/productos.controllers.js";
const router = Router();

//! Como crear rutas.
router.route("/productos").get(listarProductos);

export default router;

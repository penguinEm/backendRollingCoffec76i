/* Instancio el enrutador de express, el cual me permitira crear rutas */
import { Router } from "express";
import { crearProductoDb, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";
const router = Router();

//! Como crear rutas.
router.route("/productos").get(listarProductos).post(crearProductoDb)
router.route("/productos/:id").get(obtenerProducto)

export default router;

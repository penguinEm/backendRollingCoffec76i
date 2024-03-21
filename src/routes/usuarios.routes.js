import { Router } from "express";
import { crearUsuarioDb } from "../controllers/usuarios.controllers.js";


const router = Router();
router.route("/registro").post(crearUsuarioDb);

export default router;

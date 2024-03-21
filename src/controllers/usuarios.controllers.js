import Usuario from "../database/models/usuario.js";

//! POST para crear usuario
export const crearUsuarioDb = async (req, res) => {
    try {
      const usuarioNuevo = new Usuario(req.body);
      //todo:validar los datos del body
      await usuarioNuevo.save();
      res.status(201).json({
        mensaje: "El usuario fue registrado exitosamente!",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "No se pudo registrar al usuario",
      });
    }
  };
  
//!Lógica para controlar los productos
import Producto from "../database/models/producto.js";

export const listarProductos = (req, res) => {
  console.log("Aqui prepparo la lista de productos");
  res.send("Enviando la lista de productos");
};

//! POST para crear productos
export const crearProductoDb = async (req, res) => {
  try {
    //extraer los datos del body
    //todo:validar los datos del body
    //si los datos son correctos pedir a la db CREAR el producto
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    //responder al frontend
    res.status(201).json({
      mensaje: "El producto fue creado exitosamente!",
    });
  } catch (error) {
    console.log(error);
    //Consultar en caso de ser necesario el numero de los status en: https://http.cat/
    res.status(400).json({
      mensaje: "El producto no pudo ser creado",
    });
  }
};

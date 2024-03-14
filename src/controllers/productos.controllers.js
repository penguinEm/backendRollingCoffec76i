//!Lógica para controlar los productos
import Producto from "../database/models/producto.js";

//! GET de todos los productos
export const listarProductos = async(req, res) => {
  try {
    const productos = await Producto.find() //al find le puedo agregar filtros separado por comas
    res.status(200).json(productos)
  } catch (error) {
    console.error(error)
    res.status(500)({
      mensaje: "Error al listar los productos"
    })
  }
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

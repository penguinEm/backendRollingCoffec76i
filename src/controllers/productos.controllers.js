//!Lógica para controlar los productos
import Producto from "../database/models/producto.js";

//! GET de todos los productos
export const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.find(); //al find le puedo agregar filtros separado por comas
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500)({
      mensaje: "Error al listar los productos",
    });
  }
};

//! GET de 1 producto
export const obtenerProducto = async (req, res) => {
  try {
    //extraer el id de la ruta
    console.log(req.params.id)
    //solicidar a la bd buscar ese producto
    const productoBuscado = await Producto.findById(req.params.id)
    //pregutnar si no se encontro el producto
    if (productoBuscado === null){
      return res.status(404).json({
        mensaje: "Producto con el id enviado no existe"
      })
    }
    //enviar respuesta
    res.status(200).json(productoBuscado)
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: "No se pudo encontrar el producto solicitado",
    });
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

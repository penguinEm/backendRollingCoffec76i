import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    unique: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 10,
    max: 10000,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/;
        return pattern.test(valor);
      },
      message: (dato) => `${dato.value} no es una URL de imagen válida`,
    },
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Panaderia", "Cafeteria", "Reposteria"],
  },
  descripcionBreve: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 250,
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 30,
    maxLength: 1000,
  },
});

//! Crear el MODELO de producto.
const Producto = mongoose.model("producto", productoSchema);

export default Producto;

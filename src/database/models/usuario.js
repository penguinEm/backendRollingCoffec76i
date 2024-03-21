import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  apellidoUsuario: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  emailUsuario: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (valor) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(valor);
      },
    },
  },
  contraseniaUsuario: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 30,
  },
});

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;

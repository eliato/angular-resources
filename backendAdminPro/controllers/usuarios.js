const Usuario = require("../models/usuarios");
const { response } = require("express");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();

  res.json({
    ok: true,
    usuarios,
  });
};

const crearUsuarios = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const existeEmail = await Usuario.findOne({ email });

    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: "El correo ya exite",
      });
    }

    const usuario = new Usuario(req.body);

    // Encryptar la contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
    //genera el token JWT
    const token = await generateJWT(usuario.id);

    res.json({
      ok: true,
      usuario,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      mg: "Error inesperado al crear usuario",
    });
  }
};

const actualizarUsuarios = async (req, res = response) => {
  const uid = req.params.id;

  try {
    const usuarioDb = await Usuario.findById(uid);

    if (!usuarioDb) {
      return res.status(404).json({
        ok: false,
        mg: "Id de usuario no existe!",
      });
    }

    //actualizaciones

    const { password, google, email, ...campos } = req.body;

    if (usuarioDb.email !== email) {
      const existeEmail = await Usuario.findOne({ email });

      if (existeEmail) {
        return res.status(400).json({
          ok: false,
          mg: "Ya existe otro usuario con ese email!",
        });
      }
    }

    campos.email = email;

    const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, {
      new: true,
    });

    res.json({
      ok: true,
      usuario: usuarioActualizado,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      mg: "Error inesperado en actualizar",
    });
  }
};

const borrarUsuario = async (req, res = response) => {
  const uid = req.params.id;

  try {
    const usuarioDb = await Usuario.findById(uid);

    if (!usuarioDb) {
      return res.status(404).json({
        ok: false,
        mg: "Id de usuario no existe!",
      });
    }

    await Usuario.findByIdAndDelete(uid);

    return res.status(200).json({
      ok: true,
      msj: "Usuario Eliminado con exito!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: true,
      msj: "Ocurrio algo inesperado al borrar usuario!",
    });
  }
};

module.exports = {
  getUsuarios,
  crearUsuarios,
  actualizarUsuarios,
  borrarUsuario,
};

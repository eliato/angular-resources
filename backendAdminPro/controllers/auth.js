const { response } = require("express");
const Usuario = require("../models/usuarios");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // verifica email
    const usuarioDb = await Usuario.findOne({ email });

    if (!usuarioDb) {
      return res.status(404).json({
        ok: false,
        msj: "Datos iconrrectos email, vuelve a intentarlo",
      });
    }

    //verifica password
    const validPassword = bcrypt.compareSync(password, usuarioDb.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: true,
        msj: "Datos iconrrectos, vuelve a intentarlo",
      });
    }

    //genera el token JWT
    const token = await generateJWT(usuarioDb.id);

    return res.status(200).json({
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      mg: "Error inesperado al hacer login",
    });
  }
};

module.exports = {
  login,
};

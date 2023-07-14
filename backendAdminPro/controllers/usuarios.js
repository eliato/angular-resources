const Usuario = require('../models/usuarios');


const getUsuarios = async(req, res) => {

  const usuarios = await Usuario.find();

  res.json(
    {
      "ok":true,
      usuarios
      
    }
  )

}

const crearUsuarios = async(req, res) => {

  const {nombre, email, password} = req.body;

  const usuario = new Usuario(req.body);

 await usuario.save();


  res.json(
    {
      "ok":true,
      usuario
      
    }
  )

}


module.exports = {
  getUsuarios, 
  crearUsuarios
}
const Usuario = require('../models/usuarios');
const { response } = require('express');


const getUsuarios = async(req, res) => {

  const usuarios = await Usuario.find();

  res.json(
    {
      "ok":true,
      usuarios
      
    }
  )

}

const crearUsuarios = async(req, res = response) => {

  const {nombre, email, password} = req.body;

  


  try {

    const existeEmail = await Usuario.findOne({ email });
    if(existeEmail){ 
      return res.status(400).json({
        ok: false, 
        msg: 'El correo ya exite'});
    }
    const usuario = new Usuario(req.body);
    await usuario.save();
      res.json(
        {
          "ok":true,
          usuario
          
        }
      )
    
  } catch (error) {
      res.status(500).json({
        ok: false,
        mg: 'Error inesperado verificar la consola'
      })
  }



}


module.exports = {
  getUsuarios, 
  crearUsuarios
}
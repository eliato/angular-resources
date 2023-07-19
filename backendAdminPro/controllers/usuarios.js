const Usuario = require('../models/usuarios');
const { response } = require('express');
const bcrypt = require('bcryptjs')


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

  const {email, password} = req.body;
  try {

    const existeEmail = await Usuario.findOne({ email });
    if(existeEmail){ 
      return res.status(400).json({
        ok: false, 
        msg: 'El correo ya exite'});
    }
    const usuario = new Usuario(req.body);
    

    // Encryptar la contraseña 
      const salt = bcrypt.genSaltSync();
      usuario.password = bcrypt.hashSync( password, salt )


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
        mg: 'Error inesperado al crear usuario'
      })
  }



}

const actualizarUsuarios = async (req, res = response) => {

  const uid = req.params.id;

  try {

    const usuarioDb = await Usuario.findById( uid )

    if ( !usuarioDb ) {
      
    return  res.status(404).json({
        ok: false,
        mg: 'Id de usuario no existe!'
      })
      
    }

  //actualizaciones


  const campos = req.body;

  if (usuarioDb.email === req.body.email ) {
    delete campos.email;
  } else {

    const existeEmail = await Usuario.findOne({ email: req.body.email });

    if (existeEmail) {
      return  res.status(400).json({
        ok: false,
        mg: 'Ya existe otro usuario con ese email!'
      })
    }

    
  }
  
  delete campos.password;
  delete campos.google;

  const usuarioActualizado = await Usuario.findByIdAndUpdate( uid, campos, { new: true});   
  
  res.json({
    ok: true,
     usuario: usuarioActualizado
  })
    
  } catch (error) {

    res.status(500).json({
      ok: false,
      mg: 'Error inesperado en actualizar'
    })
    
  }

}


module.exports = {
  getUsuarios, 
  crearUsuarios,
  actualizarUsuarios
}
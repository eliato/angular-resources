
const getUsuarios = (req, res) => {

  res.json(
    {
      "ok":true,
      "msj": "hola mundo",
      usuarios: []
    }
  )

}


module.exports = {getUsuarios}
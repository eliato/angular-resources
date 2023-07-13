const express = require('express');
const { dbConnection } = require('./database/config')


const app = express();

dbConnection();

app.listen( 3000, () => {
  console.log('Servidor Corriendo en el puerto ' + 3000);
}

)


app.get('/', (req, res) => {

  res.json(
    {
      "ok":true,
      "msj": "hola mundo"
    }
  )

})
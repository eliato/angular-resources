const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config')

// Crear el servidor express
const app = express();

//config CORS
app.use( cors() );

// base de datos
dbConnection();


app.listen( process.env.PORT, () => {
  console.log('Servidor Corriendo en el puerto ' + process.env.PORT);
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
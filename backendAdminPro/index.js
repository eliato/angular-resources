const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config')

// Crear el servidor express
const app = express();

//config CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() )

// base de datos
dbConnection();


app.use('/api/usuarios', require('./routes/usuarios'))


app.listen( process.env.PORT, () => {
  console.log('Servidor Corriendo en el puerto ' + process.env.PORT);
}

)


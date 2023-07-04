const express = require('express');

const app = express();

app.listen( 3000, () => {
  console.log('Servidor Corriendo en el puerto ' + 3000);
}

)
const mongoose = require('mongoose');

const dbConnection = async() => {

  try {
    
    await  mongoose.connect('mongodb+srv://mean-user:unaSvByNp8IFDc1i@cluster0.d5gc2rb.mongodb.net/hospitaldb');
    console.log('DB online');
    
  } catch (error) {
    console.error();
    throw new Error('Error al intentar conectarse a la base');
  }

}

module.exports = {
  dbConnection
}

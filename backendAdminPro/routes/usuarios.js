const { Router } = require('express');
const { check } = require('express-validator')
const { getUsuarios, crearUsuarios, actualizarUsuarios, borrarUsuario } = require('../controllers/usuarios')
const { validarCampos } = require ('../middlewares/validar-campos')
const router = Router();



router.get('/', getUsuarios );

router.post('/', [
    check('nombre', 'El correo es requerido').not().isEmpty(),
    check('password', 'El password es requerido').not().isEmpty(),
    check('email', 'el email es requerido').isEmail(),
    validarCampos
] ,crearUsuarios );

router.put('/:id', 
[
    check('nombre', 'El correo es requerido').not().isEmpty(),
    check('role', 'El rol es requerido').not().isEmpty(),
    check('email', 'el email es requerido').isEmail(),
    validarCampos 
], actualizarUsuarios
);

router.delete('/:id', borrarUsuario)




module.exports = router;
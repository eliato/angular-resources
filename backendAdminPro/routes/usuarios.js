const { Router } = require('express');
const { check } = require('express-validator')
const { getUsuarios, crearUsuarios } = require('../controllers/usuarios')

const router = Router();



router.get('/', getUsuarios );

router.post('/', [
    check('nombre', 'El correo es requerido').not().isEmpty(),
    check('password', 'El password es requerido').not().isEmpty(),
    check('email', 'el email es requerido').isEmail(),
] ,crearUsuarios );






module.exports = router;
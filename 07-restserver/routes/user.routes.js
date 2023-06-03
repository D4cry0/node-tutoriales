
import { Router } from 'express';

import { usuarioDelete,
         usuarioGet,
         usuarioPatch,
         usuarioPost,
         usuarioPut } from '../controllers/users.controllers.js';

const router = Router();


router.get('/', usuarioGet );

router.post('/', usuarioPost ); 

// : ese tipo de params es directamente despues del slash /
//  los query params como son opciones no se colocan aqui
router.put('/:id', usuarioPut ); 

router.delete('/', usuarioDelete ); 

router.patch('/', usuarioPatch );


export {
    router
}
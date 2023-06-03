import { response, request } from 'express';



const usuarioGet = (req, res = response) => {

    // http://localhost:8080/api/usuarios?nombre=Arny&apikey=3143523412&page=1&limit=30
    const { nombre, apikey, page = '1', limit = '5' } = req.query;

    res.json({
        msg: 'get API - controlador get',
        nombre,
        apikey,
        page,
        limit
    });
}

const usuarioPost = (req, res = response) => {
    // se puede validar un poco con las desestructuración
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador post',
        nombre,
        edad
    });
}

const usuarioPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'put API - controlador put',
        id
    });
}

const usuarioPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador patch'
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador delete'
    });
}

export {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}
const {getUsuariosDB, addUsuarioDB, updateUsuarioDB, deleteUsuarioDB, getUsuarioPorCodigoDB } = require('../useCases/usuarioUseCases')

const getUsuarios = async (request, response) => {
    await getUsuariosDB()
          .then(data => response.status(200).json(data))
          .catch(err => response.status(400).json({
            status : 'error',
            message : 'Erro ao consultar as Usuarios: ' + err
          }))
}

const addUsuario = async (request, response) => {
    await addUsuarioDB(request.body)
          .then(data => response.status(200).json({
                status : "success", message : "Usuario criado",
                objeto : data
          }))
          .catch(err => response.status(400).json({
            status : 'error',
            message : err
          }))
}

const updateUsuario = async (request, response) => {
    await updateUsuarioDB(request.body)
          .then(data => response.status(200).json({
                status : "success", message : "Usuario alterado",
                objeto : data
          }))
          .catch(err => response.status(400).json({
            status : 'error',
            message : err
          }))
}

const deleteUsuario = async (request, response) => {
    await deleteUsuarioDB(request.params.codigo)
          .then(data => response.status(200).json({
                status : "success", message : data
          }))
          .catch(err => response.status(400).json({
            status : 'error',
            message : err
          }))
}

const getUsuarioPorCodigo = async (request, response) => {
    await getUsuarioPorCodigoDB(request.params.codigo)
          .then(data => response.status(200).json(data))
          .catch(err => response.status(400).json({
            status : 'error',
            message : err
          }))
}

module.exports = {
    getUsuarios, addUsuario, updateUsuario, deleteUsuario, getUsuarioPorCodigo
}
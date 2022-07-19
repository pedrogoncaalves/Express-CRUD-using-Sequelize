const express = require("express");


const produtoController = require("../controllers/produtoController")
const fabricanteController = require("../controllers/fabricanteController")
const categoriasController = require("../controllers/categoriasController")
const usuariosController = require("../controllers/usuariosController")


const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");

const usuarioCreateValidation = require("../validations/usuarios/create")

const routes = express.Router()


routes.get("/", (req, res) => {
    console.log(req.query);
    res.send("Hello Word!");
})

routes.get("/produtos", requestLog, bloqueio, produtoController.listarProduto);
routes.post("/produtos", produtoController.cadastrarProduto);
routes.delete("/produto/:id", produtoController.deletarProduto);
routes.put("/produto/:id", produtoController.atualizarProduto);

routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);

routes.post("/fabricantes", fabricanteController.criarFabricante);

routes.post("/categorias", categoriaController.criarCategoria);
// metodo para identificacao pela URL
routes.get("/produto/:id?/:teste", (req, res) => {
    console.log(req.params);
    res.send("Hello Word!");
})

routes.post("/cadastrar", (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

module.exports = routes;

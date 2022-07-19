const { Categorias } = require("../models")

const categoriaController = {
    async criarCategoria (req, res){
        
        const {nome} = req.body;

        
        const novaCategoria = await Categorias.create({
            nome,
        });

        res.json(novaCategoria)
    }
}

module.exports = categoriaController;
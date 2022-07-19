const { Fabricantes } = require("../models")

const fabricanteController = {
    async criarFabricante (req, res){
        
        const {nome} = req.body;

        
        const novoFabricante = await Fabricantes.create({
            nome,
        });

        res.json(novoFabricante);
    }
}

module.exports = fabricanteController;
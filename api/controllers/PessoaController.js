const database = require("../models/");

class PessoaController {
  //Método GET
  static async listarPessoa(req, res) {
    try {
      const Pessoas = await database.Pessoas.findAll();
      return res.status(200).json(Pessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
module.exports = PessoaController;

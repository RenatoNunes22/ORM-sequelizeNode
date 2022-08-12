const database = require("../models/");

class PessoaController {
  //Listar as pessoas
  static async listarPessoa(req, res) {
    try {
      const pessoas = await database.Pessoas.findAll();
      return res.status(200).json(pessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  //Buscar uma pessoa
  static async PessoaID(req, res) {
    const { id } = req.params;
    try {
      const pessoa = await database.Pessoas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  //Registrar uma pessoa
  static async RegistrarPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      await database.Pessoas.create(novaPessoa);
      return res.status(200).send("Cadastro Concluido");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  //Atualizar um registro
  static async AtualizarRegisto(req, res) {
    const atualiza = req.body;
    const { id } = req.params;
    try {
      await database.Pessoas.update(atualiza, {
        where: {
          id: Number(id),
        },
      });
      return res.status(200).send("Atualização concluída");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  //Deletar um registro
  static async DeletarRegistro(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res.status(200).send("Registro deletado com sucesso");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
module.exports = PessoaController;

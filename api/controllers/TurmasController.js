const database = require("../models");

class TurmasController {
  //Lista as turmas
  static async listarTurmas(req, res) {
    try {
      const turmas = await database.Turmas.findAll();
      return res.status(200).json(turmas);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  //Selecionar uma turma
  static async selecionarTurma(req, res) {
    const { id } = req.params;
    try {
      const turma = await database.Turmas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  //Criar uma turma
  static async criarTurma(req, res) {
    const novaTurma = req.body;
    try {
      await database.Turmas.create(novaTurma);
      return res
        .status(200)
        .send(`Turma: ${json(novaTurma)} criado com sucesso`);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  //Atualizar uma turma
  static async AtualizarRegisto(req, res) {
    const atualiza = req.body;
    const { id } = req.params;
    try {
      await database.Turmas.update(atualiza, {
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
      await database.Turmas.destroy({ where: { id: Number(id) } });
      return res.status(200).send("Registro deletado com sucesso");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
module.exports = TurmasController;

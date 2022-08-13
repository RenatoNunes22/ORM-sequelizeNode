const database = require("../models/");

class NiveisController {
  //Listar niveis
  static async listarNiveis(req, res) {
    try {
      const niveis = await database.Niveis.findAll();
      return res.status(200).json(niveis);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  //Selecionar uma nivel
  static async selecionarNivel(req, res) {
    const { id } = req.params;
    try {
      const turma = await database.Niveis.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  //Criar uma nivel
  static async criarNiveis(req, res) {
    const novoNivel = req.body;
    try {
      await database.Niveis.create(novoNivel);
      return res.status(200).send("Nivel criado com sucesso");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  //Atualizar uma turma
  static async AtualizarRegisto(req, res) {
    const atualiza = req.body;
    const { id } = req.params;
    try {
      await database.Niveis.update(atualiza, {
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
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res.status(200).send("Registro deletado com sucesso");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
module.exports = NiveisController;

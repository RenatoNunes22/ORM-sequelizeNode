const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.listarPessoa);
router.get("/pessoas/:id", PessoaController.PessoaID);
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.MatriculaID
);
router.post("/pessoas", PessoaController.RegistrarPessoa);
router.post(
  "/pessoas/:estudanteId/matricula",
  PessoaController.RegistrarMatricula
);
router.put("/pessoas/:id", PessoaController.AtualizarRegisto);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.AtualizarMatricula
);
router.delete("/pessoas/:id", PessoaController.DeletarRegistro);
router.delete("/pessoas/:id/matricula/:id", PessoaController.DeletarMatricula);

module.exports = router;

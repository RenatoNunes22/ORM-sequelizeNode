const { Router } = require("express");
const TurmaController = require("../controllers/TurmasController");

const router = Router();

router.get("/turmas", TurmaController.listarTurmas);
router.get("/turmas/:id", TurmaController.selecionarTurma);
router.post("/turmas", TurmaController.criarTurma);
router.put("/turmas/:id", TurmaController.AtualizarRegisto);
router.delete("turmas/:id", TurmaController.DeletarRegistro);
module.exports = router;

const { Router } = require("express");
const NiveisController = require("../controllers/NiveisController");

const router = Router();

router.get("/niveis", NiveisController.listarNiveis);
router.get("/niveis/:id", NiveisController.selecionarNivel);
router.post("/niveis", NiveisController.criarNiveis);
router.put("/niveis/:id", NiveisController.AtualizarRegisto);
router.delete("/niveis/:id", NiveisController.DeletarRegistro);
module.exports = router;

const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.listarPessoa);
router.get("/pessoas/:id", PessoaController.PessoaID);
router.post("/pessoas", PessoaController.RegistrarPessoa);
router.put("/pessoas/:id", PessoaController.AtualizarRegisto);
router.delete("/pessoas/:id", PessoaController.DeletarRegistro);
module.exports = router;

const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.listarPessoa);
router.get("/pessoas/:id", PessoaController.PessoaID);
module.exports = router;

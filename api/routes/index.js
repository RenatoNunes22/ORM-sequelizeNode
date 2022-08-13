const bodyParser = require("body-parser");
const pessoas = require("./pessoaRoute");
const niveis = require("./niveisRouter");
const turmas = require("./turmaRoute");
module.exports = (app) => {
  app.use(bodyParser.json(), pessoas, niveis, turmas);
};

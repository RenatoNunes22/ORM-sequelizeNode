const bodyParser = require("body-parser");
const pessoas = require("./pessoaRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), pessoas);
};

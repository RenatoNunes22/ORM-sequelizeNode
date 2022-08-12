const express = require("express");
const routes = require("./routes");

const app = express();
const port = 4001;
routes(app);
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

module.exports = app;

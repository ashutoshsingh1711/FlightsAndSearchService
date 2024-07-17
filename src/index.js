const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const setupAndStartServer = async () => {
  /* create the express instance */
  const app = express();

  /* Application level middlewares */
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  //Server start-up
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

setupAndStartServer();

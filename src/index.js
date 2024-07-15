const express = require("express");
const { PORT } = require("./config/serverConfig");
const setupAndStartServer = async () => {
  //create the express instance
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

setupAndStartServer();

const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const { Airport, City } = require("./models/index");
const db = require("./models/index");
const setupAndStartServer = async () => {
  /* create the express instance */
  const app = express();

  /* Application level middlewares */
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  //Server start-up
  app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`);
    /* need to run only one time  to use internal sequelize functions like getAirports, addAirport */
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }

    /* Fetch the Airports of the given city id */
    // const city = await City.findOne({
    //   where: {
    //     id: 2,
    //   },
    // });
    // const airports = await city.getAirports();

    /* Add airport */

    /* Create a airport with random id */
    // const createNewAirport = await Airport.create({
    //   name: "Jindal Vijaynagar Airport",
    //   cityId: 5,
    // });

    /* Fetch the random id airport /*
    const getNewAirport = await Airport.findOne({
      where: {
        id: 5,
      },
    });

    /* Associate the newAirport with correct city */
    // await city.addAirport(getNewAirport);
  });
};

setupAndStartServer();

const { AirportService } = require("../services/index");
const airportService = new AirportService();

const create = async (req, res, next) => {
  try {
    const response = await airportService.create(req.body);
    return res.status(201).json({
      message: "Successfully create the airport",
      err: [],
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: [],
      success: false,
      err: error,
      message: "Cannot create a new request",
    });
  }
};

module.exports = {
  create,
};

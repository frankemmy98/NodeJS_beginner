const allowedOrigins = require("../config/allowedOrigins");

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow_Credentials", true);
    // res.header(
    //   "Access-Control-Allow-Methods: POST, PUT, PATCH, GET, DELETE, OPTIONS"
    // );
    // res.header(
    //   "Access-Control-Allow-Headers: Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"
    // );
  }
  next();
};

module.exports = credentials;

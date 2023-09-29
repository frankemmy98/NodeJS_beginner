const allowedOrigins = require("./allowedOrigins");
// CORS middleware
// Cross Origin Resource Sharing

const corsOptions = {
  origin: (origin, callback) => {
    // checking if the domain is in the whiteist
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // first parameter is usually the error
      // second parameter will be true which means the origin will be sent back, saying its allowed
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;

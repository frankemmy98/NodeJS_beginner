// whatever domain that should access the backend server that cors will not pprevent
const allowedOrigins = [
  "https://www.yoursite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
  "http://localhost:3000",
];

module.exports = allowedOrigins;

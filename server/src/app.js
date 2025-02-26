const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");

require("dotenv").config();
// require("./db.js");

const server = express();
server.name = "API";
/*
	//const URL_CLIENT = process.env.URL_CLIENT || "http://localhost:3000";
	const cors = require('cors');
	// Configura CORS con opciones para permitir solo el acceso desde un dominio específico
	const corsOptions = {
		origin: 'https://tudominio.com',
		optionsSuccessStatus: 200 // Algunos navegadores (por ejemplo, IE11) requieren este código de estado
	};
	server.use(cors(corsOptions));
*/

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Credentials", "true");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

server.use("/", routes);

// Error catching endways.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;

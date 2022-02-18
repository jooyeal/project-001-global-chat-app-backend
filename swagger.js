const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");
const options = {
  swaggerDefinition: {
    components: {},
    info: {
      title: "Global Chat API",
      version: "1.0.0",
      description: "Global Chat API with node.js express",
    },
    basePath: "/api",
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
    definitions: {},
  },
  apis: ["./routes/*/*.js", "./swaggers/*"],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};

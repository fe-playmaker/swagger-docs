import { Spot } from "@airtasker/spot";
const express = require("express"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const app = express();
const PORT = 7777;

const contract = Spot.parseContract("./api/api.ts")
const openApiJson = Spot.OpenApi3.generateOpenAPI3(contract)
const openApi = {
  definition: {...openApiJson,
    openapi: '3.0.0',
    info: {
      title: 'PlayMaker 2.0',
      version: '2.0',
    },
  },
  apis: ["./routes/*.js"],
}

const specs = swaggerJsdoc(openApi);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.get("/api-docs-json", (req: any, res: any) => {
  res.json(openApiJson)
})

app.listen(PORT,'0.0.0.0', (error: any) =>{
  if(!error){
      console.log("Server is Successfully Running, and App is listening on port "+ PORT)}
  else {
      console.log("Error occurred, server can't start", error);}
  }
);
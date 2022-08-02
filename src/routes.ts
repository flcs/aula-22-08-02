import { Router } from "express";
// import hotelController from './controller/hotel';
// import quartoController from './controller/quarto';
// import telefoneController from './controller/telefone';
import enderecoController from "./controller/endereco";

const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Hello World fernando");
});

// routes.get('/hotels', hotelController.index);
// routes.get('/hotel/:id', hotelController.get);
// routes.put('/hotel/:id', hotelController.add);
// routes.delete('/hotel/:id', hotelController.delete);
// routes.post('/hotel/:id', hotelController.update);

// routes.get('/quartos', quartoController.index);
// routes.get('/quarto/:id', quartoController.get);
// routes.put('/quarto/:id', quartoController.add);
// routes.delete('/quarto/:id', quartoController.delete);
// routes.post('/quarto/:id', quartoController.update);

// routes.get('/telefones', telefoneController.index);
// routes.get('/telefone/:id', telefoneController.get);
// routes.put('/telefone/:id', telefoneController.add);
// routes.delete('/telefone/:id', telefoneController.delete);
// routes.post('/telefone/:id', telefoneController.update);

routes.get("/enderecos", enderecoController.index);
routes.get("/endereco/:id", enderecoController.get);
routes.put("/endereco/:id", enderecoController.add);
routes.delete("/endereco/:id", enderecoController.delete);
routes.post("/endereco/:id", enderecoController.update);

export default routes;

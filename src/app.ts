import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ServerApiVersion } from "mongodb";
// import UserController from './controllers/UserController';
import routes from "./routes";
// import cria_tabela from './infra/cria_tabelas';
import Database from "./database";

class App {
  public express: express.Application;
  public db: Database;

  public constructor() {
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express = express();
    this.express.use(express.json());
    this.express.use(cors());
    this.db = new Database();
    this.db.connectDatabase();
  }

  private routes() {
    this.express.use(routes);
  }

  public listen(port: number): void {
    this.express.listen(port, () => {
      console.log(`Aplicação iniciada na porta : ${port}`);
    });
  }
}

export default new App();

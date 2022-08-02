import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ServerApiVersion } from "mongodb";
// import UserController from './controllers/UserController';
import routes from "./routes";
// import cria_tabela from './infra/cria_tabelas';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.express.use(cors());

    this.middlewares();
    this.initMongoose();
    this.connectDatabase();
    this.routes();
  }

  private initMongoose() {
    mongoose.set("runValidators", true);
  }

  private middlewares(): void {
    this.express = express();
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes() {
    this.express.use(routes);
  }

  private connectDatabase(): void {
    const uri =
      "mongodb+srv://admin:admin@cluster0.c0lb9.mongodb.net/hotel?retryWrites=true&w=majority";
    // const uri: string = "mongodb+srv://admin:admin@cluster0.orgtp6c.mongodb.net/primeiro?retryWrites=true&w=majority";
    mongoose
      .connect(uri, {
        serverApi: ServerApiVersion.v1
      })
      .then(() => {
        console.log("Conectado ao mongodb");
        // cria_tabela()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public listen(port: number): void {
    this.express.listen(port, () => {
      console.log(`Aplicação iniciada na porta : ${port}`);
    });
  }
}

export default new App();

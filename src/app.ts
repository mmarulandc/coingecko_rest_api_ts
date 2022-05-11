import express, { Application } from "express";
import morgan from "morgan";
import { AuthRouter }  from "./routes";

export default class App {
  private app: Application;
  private defaultPort = 3000;
  private port: number | string;

  constructor(port?: number | string) {
    this.app = express();
    this.port = port || process.env.PORT || this.defaultPort;
    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.app.set("port", this.port);
  }

  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  private routes() {
    // this.app.use('/', (req, res) => {
    //   return res.send('hello world')
    // });

    this.app.use('/user', AuthRouter)

  }

  public start() {
    this.app.listen(this.app.get("port"));
    console.log("listening on port ", this.app.get("port"));
  }
}

import express, { Application } from 'express';
import morgan from 'morgan';
import { AuthRouter } from './routes';
import { handleError } from './middlewares';

export default class App {
  private app: Application;
  private defaultPort = 3000;
  private port: number | string;

  constructor(port?: number | string) {
    this.app = express();
    this.port = port || process.env.PORT || this.defaultPort;
    this.settings();
    this.loadMiddlewares();
    this.routes();
    this.loadCustomMiddlewares();
  }

  private settings() {
    this.app.set('port', this.port);
  }

  private loadMiddlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  private loadCustomMiddlewares() {
    this.app.use(handleError);
  }

  private routes() {
    this.app.use('/user', AuthRouter);
  }

  public start() {
    this.app.listen(this.app.get('port'));
    console.log('listening on port ', this.app.get('port'));
  }
}

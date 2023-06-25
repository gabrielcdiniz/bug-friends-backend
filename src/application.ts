import cors from 'cors';
import morgan from 'morgan';

import { routes } from './routes';

import express from 'express';
import type { Express } from 'express';

class Application {
  public server: Express;

  public constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(morgan('tiny'));
  }

  private routes(): void {
    this.server.use(routes);
  }
}

const application = new Application().server;

export { application };

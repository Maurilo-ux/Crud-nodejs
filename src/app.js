import express from 'express';
import routes from './routes';

// organizando as classe

class App{

    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    // a camada entre express e Api. 
    middlewares(){
        this.server.use(express.json());

    }

    //agrupar as rotas
    routes(){
        this.server.use(routes);
    }
}

// instanciando e Impoetando
const app = new App();
export default app.server;
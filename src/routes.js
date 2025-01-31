import express from 'express';
import customers from "./app/controllers/CustomersControllers"
const routes = express.Router();

routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.get("/customers", customers.create);
routes.get("/customers/:id", customers.update);
routes.get("/customers/:id", customers.destroy);

// export deve ser feito a todo momento
export default routes;
const Routes = require("express");
const routes = new Routes();

const customers = require("./app/controllers/CustomersControllers")

routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.get("/customers", customers.create);
routes.get("/customers/:id", customers.update);
routes.get("/customers/:id", customers.destroy);

// export deve ser feito a todo momento
module.exports = routes;
const Routes = require("express");
const routes = new Routes();

routes.get("/", function(req,res){
    res.json({ message: "olá mundo"})
})

// export deve ser feito a todo momento
module.exports = routes;
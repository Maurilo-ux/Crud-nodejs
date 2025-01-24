const express = require("express");
const server = express();

//Query params = ?nome=Maurilio&idade=22&id=1
//Route params = /hello/:nome


//Shows & List ==============================================================================================

server.use(express.json());


// Lista de Customers
let customers = [
    {id:1,name:"Maurilio", site: "https://www.instagram.com/maurili_magal/"},
    {id:2,name:"Kimberly", site: "https://www.instagram.com/maurili_magal/"},
    {id:3,name:"James", site: "https://www.instagram.com/maurili_magal/"}
]

server.get("/customers", function(req,res){

    res.json(customers);

});


server.get("/customers/:id", function(req,res){
    // ParseInt devolve o id com tipo int ao inves de string.
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 400;

    console.debug("get :: /customers/:id", customer);

    res.status(status).json(customer)

});
//===========================================================================================================


//Inserção ==================================================================================================

server.post("/customers", function(req,res){
    const {name,site} = req.body;

    // para fazer a inserção de um novo customers precisa buscar pelo ultimo e acrescentar +1.
    const id = customers[customers.length - 1].id + 1;
    const newCustomer = {id, name, site};

    
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});

//===========================================================================================================

//Atualizar =================================================================================================

server.put("/customers/:id",function(req,res){
    const id = parseInt(req.params.id);
    const {name,site} = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0? 200 : 400 ;

    if(index >= 0 ){
        customers[index] = {id: parseInt(id), name, site};
    }

    res.status(status).json(customers[index]);
});

//===========================================================================================================

//Delete ====================================================================================================

server.delete("/customers",function(req,res){
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id)
    const status = index >=0? 200 : 400;

    if (index >= 0){
        customers.splice(index,1);
    }

    res.status(status).json
});

//===========================================================================================================



// server.get("/", function(req,res){
//     res.json({ 
//         "title": "hello world",
//         "messagem": "olá amigo, tudo bem?!"
//     });
// });

// server.get("/hello", function(req,res){
//     //você pode declarar antes
//     const nome = req.query.nome;
//     //Você tambem pode declara ambos juntos
//     const {idade, id} = req.query;
//     res.send('hola '+nome+" tudo bem? seu id: "+id+", sua idade é: "+idade+"")

//     //http://localhost:8084/hello?nome=Maurilio&idade=22&id=1
    
// });

// server.get("/hello/:nome/:id/:idade", function(req,res){
//     //você pode declarar antes
//     const nome = req.params.nome;
//     //Você tambem pode declara ambos juntos
//     const {idade, id} = req.params;
//     res.send('hola '+nome+" tudo bem? seu id: "+id+", sua idade é: "+idade+"")

//     //http://localhost:8084/hello/Maurilio/1/22
// });


//127.0.0.1
//localhost
server.listen(3000);
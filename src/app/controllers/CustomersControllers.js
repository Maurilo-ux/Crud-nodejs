let customers = [
    {id:1,name:"Maurilio", site: "https://www.instagram.com/maurili_magal/"},
    {id:2,name:"Kimberly", site: "https://www.instagram.com/maurili_magal/"},
    {id:3,name:"James", site: "https://www.instagram.com/maurili_magal/"}
]

class CustomersControllers{

    index(req, res){
        res.json(this.customers);
    }

    show(req, res){
        const id = parseInt(req.params.id);
        const customer = this.customers.find(item => item.id === id);
        const status = customer ? 200 : 400;
    
        console.debug("get :: /customers/:id", customer);
    
        res.status(status).json(customer)
    }

    update(req, res){
        const id = parseInt(req.params.id);
        const {name,site} = req.body;
    
        const index = this.customers.findIndex(item => item.id === id);
        const status = index >= 0? 200 : 400 ;
    
        if(index >= 0 ){
            this.customers[index] = {id: parseInt(id), name, site};
        }
    
        res.status(status).json(this.customers[index]);
    }

    create(req, res){
        const {name,site} = req.body;
        // para fazer a inserção de um novo customers precisa buscar pelo ultimo e acrescentar +1.
        const id = this.customers[this.customers.length - 1].id + 1;
        const newCustomer = {id, name, site};
    
        customers.push(newCustomer);
        res.status(201).json(newCustomer);
    }

    destroy(req, res){
        const id = parseInt(req.params.id);
        const index = this.customers.findIndex(item => item.id === id)
        const status = index >=0? 200 : 400;
    
        if (index >= 0){
            this.customers.splice(index,1);
        }
    
        res.status(status).json
    }
}

module.exports = new CustomersControllers();
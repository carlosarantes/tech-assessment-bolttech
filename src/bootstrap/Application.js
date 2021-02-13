const express = require("express");

const routes = require("../api/v1/routes");

require("../providers/Database");

class Application {

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {       
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes(){
        this.app.get('/health', (req, res) => res.json({ message : "Api Is Working fine." }) );
        this.app.use('/api/v1', routes);
    }
}

module.exports = new Application();
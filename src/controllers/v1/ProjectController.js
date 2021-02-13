const User = require("../../models/User");
const Project = require("../../models/Project");

class ProjectController {

    async findAll(req, res) {

        const user_id = 1;

        const user = await User.findByPk(user_id);
        if(!user) {
            throw new Error("DEU MERDA");
        }

        const project = await Project.create({
            name: "teste",
            description: "",
            user_id
        });

    }

    async create(req, res) {
        
    }

    async findById(req, res) {
        
    }

    async update(req, res) {
        
    }

    async delete(req, res) {
        
    }

    async findByUserId(req, res) {
        
    }
}

module.exports = new ProjectController();
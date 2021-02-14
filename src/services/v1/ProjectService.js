const Project = require("../../models/Project");
const User = require("../../models/User");
const HttpError = require("../../errors/HttpError");

class ProjectService {

    async findAll() {
        return await Project.findAll();
    }

    async findById(id) {
        const project = await Project.findByPk(id);
        if(!project) throw new HttpError("Project not found.", 404);
        return project;
    }

    async findByUserId(user_id) {
        return await Project.findAll({ where : { user_id : user_id }, include: { association : 'tasks' }});
    }

    async create(body) {
        return await Project.create(body);
    }

    async update(id, body) {
        const result = await Project.update(body, { where : { id }});
        if(!result || !result[0]) {
            throw new HttpError("Project not found.", 404);
        }
    }

    async delete(id) {
        const result = await Project.destroy({ where : { id }});
        if (!result) {
            throw new HttpError("Project not found.", 404);
        }
    }
}

module.exports = new ProjectService();
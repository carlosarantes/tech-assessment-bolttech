const Project = require("../../models/Project");
const User = require("../../models/User");
const HttpError = require("../../errors/HttpError");

        /*
        const user_id = 1;

        const user = await User.findByPk(user_id);
        if(!user) {
            throw new Error("DEU MERDA");
        }

        const project = await Project.create({
            name: "teste",
            description: "testes",
            user_id
        });
        */

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
        return await Project.findAll({ where : { user_id : user_id } });
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

        /* 
            DELETE /api/book/122 - The server successfully processed the request, but is not returning any content
            204 No Content
            DELETE /api/book/122 - Resource does not exist
            404 Not Found
            DELETE /api/book/122 - Resource already deleted
            410 Gone
            DELETE /api/book/122 - Users does not have permission

            403 Forbidden
            DELETE /api/book/122 - Method Not Allowed

            405 Method Not Allowed
            DELETE /api/book/122 - Conflict (User can resolve the conflict and delete)

            409 Conflict
        */


    }
}


module.exports = new ProjectService();
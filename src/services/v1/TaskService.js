const moment = require('moment');

const Task = require("../../models/Task");
const HttpError = require("../../errors/HttpError");

class TaskService {

    async findAll() {
        return await Task.findAll();
    }

    async findById(id) {
        const task = await Task.findByPk(id);
        if(!task) throw new HttpError("Task not found.", 404);
        return task;
    }

    async findByProjectId(id) {
        return await Task.findAll({ where : { project_id } });
    }

    async create(body) {
        return await Task.create(body);
    }

    async finish(id) {
        const user = await this.findById(id);
        if (user.finished_at) {
            throw new HttpError("Task already finished.", 422);
        } else {
            user.finished_at = moment().format();
        }
    }

    async update(id, body) {
        const result = await Task.update(body, { where : { id }});
        if(!result || !result[0]) {
            throw new HttpError("Task not found.", 404);
        }
    }

    async delete(id) {
        const result = await Task.destroy({ where : { id }});
        if (!result) {
            throw new HttpError("Task not found.", 404);
        }
    }
}


module.exports = new TaskService();
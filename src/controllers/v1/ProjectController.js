const ProjectService = require("../../services/v1/ProjectService");
const TaskService = require("../../services/v1/TaskService");

class ProjectController {

    async findAll(req, res) {
        try {
            const projects = await ProjectService.findAll();
            return res.json({ projects });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async create(req, res) {
        try {
            const project = await ProjectService.create(req.body);
            return res.status(201).json({ project });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const project = await ProjectService.findById(id);
            return res.json({ project });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async findByUserId(req, res) {
        try {
            const { userId } = req.params;
            const project = await ProjectService.findByUserId(userId);
            return res.json({ project });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async findTaskByProjectId(req, res) {
        try {
            const { id } = req.params;
            const tasks = await TaskService.findByProjectId(id);
            return res.json({ tasks });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            await ProjectService.update(id, req.body);
            return res.status(204);
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await ProjectService.delete(id);
            return res.status(204);
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }
}

module.exports = new ProjectController();
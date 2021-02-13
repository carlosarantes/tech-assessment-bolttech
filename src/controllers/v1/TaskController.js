const TaskService = require("../../services/v1/TaskService");

class TaskController {

    async findAll(req, res) {
        try {
            const tasks = await TaskService.findAll();
            return res.json({ tasks });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async create(req, res) {
        try {
            const task = await TaskService.create(req.body);
            return res.status(201).json({ task });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const task = await TaskService.findById(id);
            return res.status(201).json({ task });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            await TaskService.update(id, req.body);
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
            await TaskService.delete(id);
            return res.status(204);
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async findByProjectId(req, res) {
        try {
            const { projectId } = req.params;
            const tasks = await TaskService.findByProjectId(projectId);
            return res.json({ tasks });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }
}

module.exports = new TaskController();
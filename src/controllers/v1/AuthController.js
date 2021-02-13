const User = require("../../models/User");

class AuthController {
    async register(req, res) {
        try {
            const { name, email, password } = req.body;
            console.log(name, email, password);
            const user = await User.create({ name, email, password });
            return res.json({ user });
        } catch (e) {
            console.log(e);
            return res.status(400).json({ message : e.message });
        }


    }   

    async authenticate(req, res) {

    }
}

module.exports = new AuthController();
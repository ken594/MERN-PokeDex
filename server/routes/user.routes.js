const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/api', UserController.index);
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    // this route now has to be authenticated
    // app.get("/api/users", authenticate, UserController.getAll);
}
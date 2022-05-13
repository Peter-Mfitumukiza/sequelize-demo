const router = require('express').Router();
const userController = require('./controllers/userController');

router.get("/", userController.getUsers); 
router.post("/new", userController.saveUser);
router.post("/login", userController.login);

module.exports = router;
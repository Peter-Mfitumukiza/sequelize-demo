import express from 'express';
import { getUsers, saveUser, login, updateUser } from './controllers/user.controller.js';
import { validateUser, validateLogin } from './middlewares/validations.js';
const router = express.Router();

router.get("/", getUsers); 
router.post("/new", validateUser, saveUser);
router.post("/login", validateLogin, login);
router.patch("/update/:id", validateUser, updateUser);


export default router;
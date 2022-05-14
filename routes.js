import express from 'express';
import { getUsers, saveUser, login, updateUser } from './controllers/user.controller.js';
const router = express.Router();

router.get("/", getUsers); 
router.post("/new", saveUser);
router.post("/login", login);
router.patch("/update/:id", updateUser);

export default router;
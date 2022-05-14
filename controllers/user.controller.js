import User from '../models/user.js'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import hashPassword from '../utils/hashPassword.js';
import { compare } from 'bcrypt';

dotenv.config();

const { sign } = jwt;

export const getUsers = async(req,res)=>{
    let users = await User.findAll();
    return res.send(users);
}

export const saveUser = async(req,res)=>{
    let user = await User.findOne({ where: { email: req.body.email } });
    if(user) return res.json({status:"error", message: "Email already taken!"});

    let newUser = { ...req.body }
    newUser.password = await hashPassword(newUser.password);
    await User.create(newUser);
    return res.send({ message: "user created successfully", data: newUser });
}

export const login = async(req,res)=>{
    let user = await User.findOne({ where: { email: req.body.email } });

    if(user == null) return res.send("Invalid email or password");
    
    const validPassword = await compare(req.body.password,user.password)
    if(!validPassword) return res.json('invalid email or password').status(401)

    const token  = sign({ ...user }, process.env.JWT_KEY);
    return res.send({message:"Logged in successfully", token});
}

export const updateUser = async(req,res)=>{
    try {
        const { name, age, address } = req.body;
        let user = await User.findOne({ where: { id: req.params.id } });

        if (!user) return res.status(404).send({ message: "User with that id doesn't exist" });
        
        await User.update( { name, age, address }, { where: { id: req.params.id } })
            res.status(200).send("Successfully updated the user.")
      } catch (err) {
        res.status(500).send({ message: `Error: ${err}` });
      }
}
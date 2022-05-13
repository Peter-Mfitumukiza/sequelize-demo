const User = require('../models/user');
const jwt = require('jsonwebtoken');

const getUsers = async(req,res)=>{
    let users = await User.findAll();
    return res.send(users);
}

const saveUser = async(req,res)=>{
    let newUser = { ...req.body }
    await User.create(newUser);
    return res.send({ message: "user created successfully", data: newUser });
}

const login = async(req,res)=>{
    let user = await User.findOne({ where: { email: req.body.email } });
    if(user == null){
        return res.send("Invalid email or password");
    }
    if(user.password != req.body.password){
        return res.send("Invalid email or password.")
    }
    const token  = jwt.sign({ ...user }, process.env.JWT_KEY);
    return res.send({message:"Logged in successfully", token});
}

module.exports.getUsers = getUsers;
module.exports.saveUser = saveUser;
module.exports.login = login;
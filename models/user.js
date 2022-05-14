import { STRING, INTEGER } from 'sequelize';
import db from '../config/database.js';

const User = db.define('users',{
    names:{
        type: STRING,
        allowNull: false
    },
    email:{
        type: STRING,
        allowNull: false
    },
    age:{
        type: INTEGER,
        allowNull: false
    },
    password:{
        type: STRING,
        allowNull: false
    },
    address:{
        type: STRING,
        allowNull: false
    }
})

export default User;
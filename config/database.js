import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(
    process.env.DB, 'postgres', process.env.password, {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max:5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

export default db;
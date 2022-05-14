import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';
import userRoutes from './routes.js';
import db from './config/database.js';

dotenv.config();
const app = express();

db.authenticate()
    .then(()=>console.log("DB connected successfully!"))
    .catch(err => console.log(err))

app.use(json());
app.use(urlencoded({extended:true}));
app.use("/users", userRoutes);

let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}.....`);
});
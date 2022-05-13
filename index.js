require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes');
const db = require('./config/database');
const app = express();

db.authenticate()
    .then(()=>console.log("DB connected successfully!"))
    .catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/users", userRoutes);

let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}.....`);
});

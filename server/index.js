const express = require('express');
const app = express();
const db = require('./models');
const cors = require("cors");

app.use(express.json());
app.use(cors());
const userRouter = require('./router/users');
app.use('/dnu180dn4d3d', userRouter);

db.sequelize.sync().then(()=>{
    app.listen(8080, () =>{
        console.log("Server runnning on port 8080");
    });
});

const express = require ("express");
const app = express();
const cors =require("cors");
const mongoose = require("mongoose")
require('dotenv').config();
// const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");


//middlewares
app.use(express.json())
app.use(cors())
// app.use(cookieParser());
//db connection

//  const MONGODB_URI = "mongodb+srv://omkarm:root@123@cluster1.yhn6sug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("db connected"))
.catch((err) => console.log(err));

  app.use("/api/auth", authRoutes); 

  app.get("/health", (req, res) => {
    res.json({
      service: "pro-manage server",
      status: "Active",
      time: new Date(),
    });
  });


const port = process.env.PORT||6080;
app.listen(port,() => console.log(`listening on port ${port}`))
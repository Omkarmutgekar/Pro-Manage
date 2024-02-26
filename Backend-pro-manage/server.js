require('dotenv').config();
const express = require ("express");
const app = express();
const cors =require("cors");
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");


//middlewares
app.use(express.json())
app.use(cors())
app.use(express.json())
app.use(cookieParser());
//db connection


mongoose
  .connect(process.env.mongourl)
  .then(() => console.log("----DB CONNECTED----"))
  .catch((error) => console.log("Failed to connect", error));


  app.use("/api/auth", authRoutes);


const port = process.env.PORT||8080;
app.listen(port,() => console.log(`listening on port ${port}`))
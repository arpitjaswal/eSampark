import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js"

const app = express();
 dotenv.config();

//routes defined
app.use("/posts", postRoutes);

//middlewares
app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));

const PORT = process.env.PORT || 5000;



//database connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT, ()=>console.log(`Server is listening in ${process.env.MODE} mode at ${PORT}`)))
    .catch((error)=>console.log(error.message));



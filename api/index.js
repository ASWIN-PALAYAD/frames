import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/connectDb.js';
dotenv.config();  


//routess imports
import userRoutes from './routes/usersRoutes.js'
import autheRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'


//middlewares
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

//routes
app.use('/api/users',userRoutes);
app.use('/api/auth',autheRoutes);
app.use('/api/post',postRoutes);






app.listen(5000,()=> {
    connectDB();
    console.log("server started at port 5000 ");  
})
import express from 'express';
import { dbConnect } from './src/config/dbConnect.js';
import dotenv from 'dotenv/config'
import userRoute  from './src/routes/userRoute.js';
import cors from 'cors'
import router from './src/routes/formRoutes.js';

const app = express();
const port = process.env.PORT || 9007;

dbConnect();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));


app.use("/api/form", router);

app.use('/user', userRoute);

app.listen(port ,()=>{
  console.log(`Server is running at port no ${port} `);
})

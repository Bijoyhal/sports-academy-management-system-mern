import mongoose from "mongoose";
import dotenv from 'dotenv/config'

export const dbConnect =async()=>{
   try {
      await mongoose.connect(process.env.URL);
      console.log("Mongodb is connected")
   } catch (error) {
      console.log(error)
   }
}
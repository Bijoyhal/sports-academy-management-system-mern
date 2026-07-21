import nodemailer from 'nodemailer';
import dotenv from 'dotenv/config';
import { text } from 'express';

export const verifyMail = async (otp , email) =>{
    const trasport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.mailUser,
            pass:process.env.mailPass
        }
    })

    const config = {
        to:email,
        from:process.env.mailUser,
        subject:"Verify your mail",
        text:`Your otp is ${otp}
              This otp is is valid for 10 min `
    }

    trasport.sendMail(config, (error , info)=>{
      if(error){
        console.log('Email can not send', error);
        throw new Error(error);
      }

      console.log("Email sent successfully");
      console.log(info);

    })
}
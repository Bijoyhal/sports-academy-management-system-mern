import userSchema from "../modals/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";
import { verifyMail } from "../sendMail/sendEmail.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //Admin section
  

    const user = await userSchema.findOne({ email });
    if (user) {
      return res.status(401).json({
        success: false,
        message: "User is already exist",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const data = await userSchema.create({
      username,
      email,
      password: hashPassword,
    });
    return res.status(200).json({
      success: true,
      message: "You have successfully registerd",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Admin
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const accessToken = jwt.sign(
        {
          role: "admin",
          email: process.env.ADMIN_EMAIL,
        },
        process.env.secretKey,
        {
          expiresIn: "10d",
        },
      );

      return res.status(200).json({
        success: true,
        message: "Admin login successful",
        role: "admin",
        accessToken: accessToken,
      });
    }

    //User
    const user = await userSchema.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Email does not exist",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: "Inavlid credential",
      });
    }

    if (validPassword) {
      const otp = Math.floor(Math.random() * 900000 + 100000).toString();
      user.otp = otp;
      user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);

      verifyMail(otp, email);

      const accessToken = jwt.sign(
        {
          id: user._id,
          role: "user",
        },
        process.env.secretKey,
        {
          expiresIn: "10d",
        },
      );
      user.isLogin = true;
      await user.save();
      return res.status(200).json({
        success: true,
        message: "Login successfull",
        accessToken: accessToken,
        data: user,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Verify otp

export const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;

    const user = await userSchema.findOne({ otp });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (user.otpExpiration < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpiration = null;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

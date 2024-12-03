import mongoose from "mongoose";
import UserModel from "../models/user.js";
// import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const Register = async (req, res) => {
  try {
    // console.log("Request Body:", req.body);

    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please fill all fields",
      });
    }

    const existUser = await UserModel.findOne({ email });

    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please login.",
      });
    }

    const hashpassword = bcrypt.hashSync(password, 10);

    const NewUser = new UserModel({
      fullName,
      email,
      password: hashpassword,
    });

    await NewUser.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: NewUser,
    });
  } catch (error) {
    console.error("Error in Register function:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please Fill all fields",
      });
    }
    const FindUser = await UserModel.findOne({ email });

    if (!FindUser) {
      return res.status(303).json({
        success: false,
        message: "No User Found",
      });
    }

    const comparepassword = await bcrypt.compare(password, FindUser.password);

    if (!comparepassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }
    const token = jwt.sign({ userId: FindUser._id }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3 * 24 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      message: "Login Successfully",
      user: FindUser,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const Logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "Logout Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userid = req.params.id;
    const { fullName, newpassword, oldpassword } = req.body;

    const ExistUser = await UserModel.findById(userid);
    if (!ExistUser) {
      res.status(404).json({
        success: false,
        message: "Account not Found",
      });
    }

    if (oldpassword) {
      const comparePassword = await bcrypt.compare(
        oldpassword,
        ExistUser.password
      );
      if (!comparePassword) {
        res.status(404).json({
          success: false,
          message: "Oldpassword is incorrect",
        });
      }
    }
    if (fullName) {
      ExistUser.fullName = fullName;
    }

    if (oldpassword && newpassword) {
      const hashedPassword = await bcrypt.hash(newpassword, 10);
      ExistUser.password = hashedPassword;
    } else if (oldpassword && !newpassword) {
      return res.status(400).json({
        success: false,
        message: "New password is required when old password is provided.",
      });
    }
    await ExistUser.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Profile updated successfully.",
        user: ExistUser,
      });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { Register, Login, Logout, updateProfile };

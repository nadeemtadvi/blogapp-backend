import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String, required:true
    },
    email: {
      type: String, required:true,
      unique:true
    },
    password: {
      type: String, required:true
    },
   
  },
  { timestamps: true }
);
const UserModel = mongoose.model("Users", userSchema);
 export default UserModel
import express from "express";
import dotenv from "dotenv";
import DBcon from "./utils/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import AuthRoutes from "./routes/Auth.js";
import BlogsRoutes from "./routes/Blog.js";
// import PublicRoutes from "./routes/Public.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
DBcon();


app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))

const corsOptoins={
  origin:true,
  credentials:true
}
app.use(cors(corsOptoins))

app.get("/", (req, res) => {
  res.send("Backend ");
});

app.use(cookieParser());

app.use("/auth", AuthRoutes);
app.use("/blog", BlogsRoutes);
// app.use("/public", PublicRoutes);

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});

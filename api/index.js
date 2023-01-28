import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";
import reviewsRouter from "./routes/reviews.js";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config(); //configuration for .env file and read it

const app = express(); //create express app server

const connect = async () => {
  //initial mongodb connection (it will try always to connect if disconnected)
  try {
    await mongoose.connect(process.env.MONGO);

    console.log("connected to mongo db");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
}); //listen to connection (connected)
mongoose.connection.on("disconnected", () => {
  console.log("mongo disconnected");
}); //listen to connection (disconnected)

//middlewares  <.is used because it reach req and res before sending anything to user.>
app.use(cors());
app.use(cookieParser());
app.use(express.json()); //use for send json objects to express server
app.use("/api/auth", authRouter); //use auth router to reach endpoints
app.use("/api/users", usersRouter); //use users router to reach endpoints
app.use("/api/hotels", hotelsRouter); //use hotels router to reach endpoints
app.use("/api/rooms", roomsRouter); //use rooms router to reach endpoints
app.use("/api/reviews", reviewsRouter);

//error handling middleware it will use if there is any error in routes or api requests
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(9000, () => {
  connect();
  console.log("welcome backend!!");
});

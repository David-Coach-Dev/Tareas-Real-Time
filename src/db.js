import { connect } from "mongoose";
export const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017/tarearealtimedb")
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
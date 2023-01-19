import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  error: boolean;
  response: any;
};
export default async function ConnectDb() {
  mongoose.set("strictQuery", false);
  try {
    mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("database connected");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import ConnectDb from "../../utils/connectMongoDB";
import register from "../../models/register";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const connectDb = await ConnectDb();
  try {
    const {userId} = req.query;
    const data = req.body;
    if(userId && data){
        await register.findByIdAndUpdate(userId, data);
        res.status(200).json(data);
        console.log(data);
    } 
    res.status(404).json({error:"User Not Selected.....!"})
  } catch (error){
    res.status(404).json({error:"Error While Updating The Data ....!"})
  }
};

export default handler;

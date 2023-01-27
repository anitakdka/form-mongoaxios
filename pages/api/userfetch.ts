import type { NextApiRequest, NextApiResponse } from "next";
import ConnectDb from "../../utils/connectMongoDB";
import register from "../../models/register";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const connectDb = await ConnectDb();
  try {
    const data = await register.find({});
    // register.findOne({name:"anita"});
    console.log(data);
    res.status(200).json(data);
    if (!data) return;
    res.status(404).json({ error: "Data Not Found" });
    
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
};

export default handler;

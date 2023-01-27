import type { NextApiRequest, NextApiResponse } from "next";
import ConnectDb from "../../utils/connectMongoDB";
import register from "../../models/register";

type Data = {
  error: boolean;
  sucess: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const connectDb = await ConnectDb();
  const username = req.body[0].username;
  // const email = req.body[0].email;
  // const password = req.body[0].password;
  // const cofirmPassword = req.body[0].confirmPassword;
  
  console.log(connectDb);

  if (req.method == "POST") {
    console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
      let data = new register({
        username: req.body[i].username,
      //   email: req.body[i].email,
      //   password: req.body[i].password,
      //  cofirmPassword: req.body[i].confirmPassword
      });
      await data.save();
    }
    res.status(200).json({ error: false, sucess: "user register success" });
  } else {
    res.status(403).json({ error: true, sucess: "This method is not allowed" });
  }
};

export default handler;

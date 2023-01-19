// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  const email = req.body[0].email;
  const password = req.body[0].password;
  console.log(connectDb);

  if (req.method == "POST") {
    console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
      let c = new register({
        username: req.body[i].username,
        email: req.body[i].email,
        password: req.body[i].password,
      });

      await c.save();
    }

    res.status(200).json({ error: false, sucess: "user register success" });
  } else {
    res.status(403).json({ error: true, sucess: "This method is not allowed" });
  }
  //   try {
  //     users
  //       .create({
  // username: username,
  // email: email,
  // password: password,
  //       })
  //       .then((result) => {
  //         console.log(result);
  //       });
  //     res.status(200).json({ error: false, sucess: "user register success" });
  //   } catch (error) {
  //     res.status(403).json({ error: true, sucess: "user not register" });
  //   }
};

export default handler;

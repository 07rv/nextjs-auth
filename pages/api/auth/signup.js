import dbConnect from "@/database/mongodb";
import Users from "@/modal/User";
import { hash } from "bcrypt";
export default async function handler(req, res) {
  dbConnect();

  if (req.method === "POST") {
    if (!req.body) res.status(404).json({ error: "Don't have body" });

    const { username, email, password } = req.body;
    const checkingexisting = await Users.findOne({ email });

    if (checkingexisting)
      res.status(422).json({ error: "User Already exists" });

    try {
      const newuser = new Users({
        username: username,
        email: email,
        password: await hash(password, 12),
      });

      newuser.save();
      res.status(200).json(newuser);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.status(500).json({ message: "HTTP method not valid" });
  }
}

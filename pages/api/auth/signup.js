import { saveUser } from "@/services/users";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).send();
  }
  const { name, lastName, email, password, repeatPassword } = req.body;
  //   console.log(name, lastName, email, password, repeatPassword);
  //   console.log(req.body);
  try {
    saveUser(name, lastName, email, password, repeatPassword);
    res.status(201).send();
  } catch (err) {
    res.status(400).json({ message: err });
  }
}

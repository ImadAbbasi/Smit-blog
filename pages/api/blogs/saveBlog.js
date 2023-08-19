import { saveBlog } from "@/services/blogs";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).send();
  }
  const { author, title, content } = req.body;
  //   console.log(name, lastName, email, password, repeatPassword);
  //   console.log(req.body);
  try {
    saveBlog(author, title, content);
    res.status(201).send();
  } catch (err) {
    res.status(400).json({ message: err });
  }
}

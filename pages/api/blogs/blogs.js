import { getAllBlogs } from "@/services/blogs";

export default function handler(req, res) {
  if (req.method === "Get") {
    return res.status(200).json(getAllBlogs());
  }
  return res.status(404).send();
}

import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "blogs.json");

export function getAllBlogs() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getBlogById(id) {
  const data = getAll();
  return data.find((p) => p.id === Number(id));
}

export function saveBlog(author, title, content) {
  const data = getAllBlogs();
  data.push({
    id: data.length + 1,
    author,
    title,
    content,
  });
  fs.writeFileSync(filePath, JSON.stringify(data));
}

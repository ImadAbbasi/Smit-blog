import { hash, compare } from "bcryptjs";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export function getAllUsers() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getUserById(id) {
  const data = getAll();
  return data.find((p) => p.id === Number(id));
}

export function getUserByEmail(email) {
  const data = getAllUsers();
  return data.find((p) => p.email.toLowerCase() === email.toLowerCase());
}

export async function verifyPass(hashedPassword, password) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

export async function saveUser(
  name,
  lastName,
  email,
  password,
  repeatPassword
) {
  const found = getUserByEmail(email);
  if (found) {
    throw new Error("Email already taken");
  }
  const data = getAllUsers();
  const hashedPassword = await hash(password, 12);
  const hashedRepeatPassword = await hash(repeatPassword, 12);
  data.push({
    id: data.length + 1,
    name,
    lastName,
    email,
    password: hashedPassword,
    repeatPassword: hashedRepeatPassword,
  });
  fs.writeFileSync(filePath, JSON.stringify(data));
}

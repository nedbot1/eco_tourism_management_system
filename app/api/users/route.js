import knex from "@/database";
import crypto from "crypto";
export async function GET() {
  const users = await knex("users").select("*");
  return new Response(JSON.stringify({ users }), { status: 200 });
}

export async function POST(req) {
  const body = await req.json();
  const { userName, passWord, email, userType } = body;
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(passWord, salt, 1000, 64, "sha512")
    .toString("hex");
  const data = await knex("users")
    .insert({
      username: userName,
      salt: salt,
      hash_password: hash,
      email,
      user_type: userType,
    })
    .returning("*");
  return Response.json({ data });
}

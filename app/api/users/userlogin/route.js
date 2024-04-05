import crypto from "crypto";
import knex from "@/database";

export async function POST(req) {
  try {
    const { userName, password } = await req.json();

    const [foundUser] = await knex("users")
      .where("username", userName)
      .select("*");
    const hash = crypto
      .pbkdf2Sync(password, foundUser.salt, 1000, 64, "sha512")
      .toString("hex");

    const isValidLogin = hash === foundUser.hash_password;
    if (isValidLogin)
      return Response.json({
        data: {
          user_name: foundUser.username,
          email: foundUser.email,
        },
      });
    else return Response.json({ error: "Invalid username or password" });
  } catch (error) {
    console.error("post error:", error);
  }
}

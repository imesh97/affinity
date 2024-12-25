import { serialize } from "cookie";

export async function POST(request: Request) {
  const data: { password: string } = await request.json();
  const password = data.password;
  const cookie = serialize(process.env.PASSWORD_COOKIE!, "true", {
    httpOnly: true,
    path: "/",
  });

  if (process.env.PASSWORD !== password) {
    return new Response("Incorrect password", {
      status: 401,
    });
  }

  return new Response("Correct password", {
    status: 200,
    headers: {
      "Set-Cookie": cookie,
    },
  });
}

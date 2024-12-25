import { PasswordPrompt } from "@/components/PasswordPrompt";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const loginCookie = cookieStore.get(process.env.PASSWORD_COOKIE!);
  const isLoggedIn = !!loginCookie?.value;

  if (!isLoggedIn) {
    return <PasswordPrompt />;
  }

  return (
    <div>
      <p>Logged in.</p>
    </div>
  );
}

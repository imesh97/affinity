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
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-200">
      <p className="text-center">
        Logged in.
        <br />
        <br />
        Work in progress...
      </p>
    </div>
  );
}

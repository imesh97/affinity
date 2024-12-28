import HeroSection from "@/components/HeroSection";
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
    <main>
      <HeroSection />
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Additional Content</h2>
          <p className="mb-4">
            This section is added to demonstrate the sticky navigation.
          </p>
          <p className="mb-4">
            As you scroll down, you&apos;ll notice that the navigation bar
            sticks to the top of the page.
          </p>
          <p className="mb-4">
            It also changes its appearance slightly to indicate that it&apos;s
            in a &quot;sticky&quot; state.
          </p>
          {[...Array(10)].map((_, i) => (
            <p key={i} className="mb-4">
              Scroll down to see more...
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

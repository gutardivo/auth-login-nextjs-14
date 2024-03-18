import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/lib";

export default async function Page() {
  const session = await getSession();

  if (!session) {redirect("/");}
  return (
    <section>
      <p>Logged In</p>
    </section>
  );
}

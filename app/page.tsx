import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <nav className="hidden md:flex ">
        <ul className="flex justify-start items-center gap-3 lg:gap-4 ">
          <li>Home</li>
          <li>List</li>
          <li>
            <Link href={"/auth"}>Auth</Link>
          </li>
        </ul>
      </nav>
      <div className="mt-8">pwa app</div>
    </main>
  );
}

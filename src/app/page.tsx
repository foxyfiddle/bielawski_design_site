import Link from "next/link";

export default function Home() {
  return (
    <main>

      <h1 className="text-6xl font-bold text-center mt-40 mb-10 mr-50 ml-50">
        I've been working on some cool stuff.
      </h1>

      {/* Home page gallery */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-center gap-10 p-10">
          <Link
            href="/work/cvm"
            className="h-screen flex items-center justify-center"
          >
            <img
              src="web_lockup.png"
              alt="CVM Project Thumbnail"
              className="h-95 w-auto"
            />
          </Link>
          <Link
            href="/work/cvm"
            className="h-screen flex items-center justify-center"
          >
            <img
              src="web_lockup.png"
              alt="CVM Project Thumbnail"
              className="h-95 w-auto"
            />
          </Link>
          <Link
            href="/work/cvm"
            className="h-screen flex items-center justify-center"
          >
            <img
              src="web_lockup.png"
              alt="CVM Project Thumbnail"
              className="h-95 w-auto"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}

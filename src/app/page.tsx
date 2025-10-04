import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-6xl font-bold text-center mt-40 mb-10 mr-50 ml-50">
        {"I've been working on some cool stuff."}
      </h1>

      {/* Home page gallery */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-center gap-10 p-10">
          <Link
            href="/work/cvm"
            className="h-screen flex items-center justify-center"
          >
            <Image
              src="/web_lockup.png"
              alt="CVM Project Thumbnail"
              width={500}
              height={500}
            />
          </Link>
          <Link
            href="/work/cvm"
            className="h-screen flex items-center justify-center"
          >
            <Image
              src="/web_lockup.png"
              alt="CVM Project Thumbnail"
              width={500}
              height={500}
            />
          </Link>
          <Link
            href="/work/cvm"
            className="h-screen flex items-center justify-center"
          >
            <Image
              src="/web_lockup.png"
              alt="CVM Project Thumbnail"
              width={500}
              height={500}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}

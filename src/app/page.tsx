import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-6xl font-bold text-center text-base-content mt-40 mb-65 mr-50 ml-50">
        {"I've been working on some cool stuff."}
      </h1>

      {/* Home page gallery */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-center gap-10 p-10">
          <div className="flex flex-col items-start">
            <Link
              href="/work/cvm"
              className="flex items-center justify-center"
            >
              <Image
                src="/web_lockup.png"
                alt="CVM Project Thumbnail"
                width={500}
                height={500}
              />
            </Link>
            <p className="pt-7">Cuyahoga Valley Media</p>
          </div>
          <div className="flex flex-col items-start">
            <Link
              href="/work/cvm"
              className="flex items-center justify-center"
            >
              <Image
                src="/web_lockup.png"
                alt="CVM Project Thumbnail"
                width={500}
                height={500}
              />
            </Link>
            <p className="pt-7">Cuyahoga Valley Media</p>
          </div>
          <div className="flex flex-col items-start">
            <Link
              href="/work/cvm"
              className="flex items-center justify-center"
            >
              <Image
                src="/web_lockup.png"
                alt="CVM Project Thumbnail"
                width={500}
                height={500}
              />
            </Link>
            <p className="pt-7">Cuyahoga Valley Media</p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-10 p-10">
          <div className="flex flex-col items-start">
            <Link
              href="/work/cvm"
              className="flex items-center justify-center"
            >
              <Image
                src="/web_lockup.png"
                alt="CVM Project Thumbnail"
                width={500}
                height={500}
              />
            </Link>
            <p className="pt-7">Cuyahoga Valley Media</p>
          </div>
          <div className="flex flex-col items-start">
            <Link
              href="/work/cvm"
              className="flex items-center justify-center"
            >
              <Image
                src="/web_lockup.png"
                alt="CVM Project Thumbnail"
                width={500}
                height={500}
              />
            </Link>
            <p className="pt-7">Cuyahoga Valley Media</p>
          </div>
          <div className="flex flex-col items-start">
            <Link
              href="/work/cvm"
              className="flex items-center justify-center"
            >
              <Image
                src="/web_lockup.png"
                alt="CVM Project Thumbnail"
                width={500}
                height={500}
              />
            </Link>
            <p className="pt-7">Cuyahoga Valley Media</p>
          </div>
        </div>
      </div>
    </main>
  );
}

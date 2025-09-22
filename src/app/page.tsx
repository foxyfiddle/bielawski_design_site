export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center p-8">
      <section className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold">Hello, world 🌎</h1>
        <p className="text-lg text-neutral-600">
          Deployed on <strong>Vercel</strong> with Next.js.
        </p>
        <a
          href="https://github.com/yourname/my-site"
          className="inline-block rounded px-4 py-2 border"
        >
          View Source
        </a>
      </section>
    </main>
  );
}

